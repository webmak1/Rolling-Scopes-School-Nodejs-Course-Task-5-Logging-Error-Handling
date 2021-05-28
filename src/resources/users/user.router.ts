// @ts-check
import * as express from 'express';
import { StatusCodes } from 'http-status-codes';
import { usersService } from 'resources/users/user.service';

const router = express();

/**
 * A Public User Data
 * @typedef {Object} PublicUserData - Public User Data
 * @property {string} id - id
 * @property {string} name - name
 * @property {string} login - login
 */

/**
 * ### Get All Users
 * @param {string} path - Express path
 * @route {GET} /
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(PublicUserData[])} - All Users in JSON format
 */
router.route('/').get(async (_req, res) => {
  try {
    return res.json(await usersService.getAll());
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

/**
 * ### Get Single Users
 * @param {string} path - Express path
 * @route {GET} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(PublicUserData)} - Single User in JSON format
 */
router.route('/:id').get(async (req, res) => {
  try {
    const { id: userId } = req.params;
    return res.json(await usersService.get(userId));
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

/**
 * ### Create User
 * @param {string} path - Express path
 * @route {POST} /
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(PublicUserData)} - Created User in JSON format
 */
router.route('/').post(async (req, res) => {
  try {
    const { login, password, name } = req.body;
    return res
      .status(StatusCodes.CREATED)
      .json(await usersService.create(login, password, name));
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

/**
 * ### Update User
 * @param {string} path - Express path
 * @route {PUT} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(PublicUserData)} - Updated User in JSON format
 */
router.route('/:id').put(async (req, res) => {
  try {
    const { id: userId } = req.params;
    const { login, password, name } = req.body;
    return res.json(await usersService.update(userId, login, password, name));
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

/**
 * ### Delete User
 * @param {string} path - Express path
 * @route {DELETE} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(PublicUserData)} - Deleted User in JSON format
 */
router.route('/:id').delete(async (req, res) => {
  try {
    const { id: userId } = req.params;
    return res.json(await usersService.remove(userId));
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

export { router };
