// @ts-check

import * as express from 'express';
import { StatusCodes } from 'http-status-codes';
const tasksService = require('resources/tasks/task.service');

const router = express({ mergeParams: true });

/**
 * ### Get All Task
 * @param {string} path - Express path
 * @route {GET} /
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Task[])} - All Tasks in JSON format
 */
router.route('/').get(async (_req, res) => {
  try {
    return res.json(await tasksService.getAll());
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

/**
 * ### Get Single Task
 * @param {string} path - Express path
 * @route {GET} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Task)} - Single Task in JSON format
 */
router.route('/:id').get(async (req, res) => {
  try {
    return res.json(await tasksService.get(req));
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

/**
 * ### Create Task
 * @param {string} path - Express path
 * @route {POST} /
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Task)} - Created Task in JSON format
 */
router.route('/').post(async (req, res) => {
  try {
    const { boardId } = req.params;
    const { title, order, description, userId, columnId } = req.body;

    console.log(boardId);

    return res
      .status(StatusCodes.CREATED)
      .json(
        await tasksService.create(
          boardId,
          title,
          order,
          description,
          userId,
          columnId
        )
      );
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

/**
 * ### Update Task
 * @param {string} path - Express path
 * @route {PUT} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Task)} - Updated Task in JSON format
 */
router.route('/:id').put(async (req, res) => {
  try {
    return res.json(await tasksService.update(req));
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

/**
 * ### Delete Task
 * @param {string} path - Express path
 * @route {DELETE} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Task)} - Deleted Task in JSON format
 */
router.route('/:id').delete(async (req, res) => {
  try {
    return res.json(await tasksService.remove(req));
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

export { router };
