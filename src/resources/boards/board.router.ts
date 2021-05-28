// @ts-check

// import { Board } from 'boards/board.model.ts';
import * as express from 'express';
import { StatusCodes } from 'http-status-codes';
import { boardsService } from 'resources/boards/board.service';

const router = express();

/**
 * ### Get All Boards
 * @param {string} path - Express path
 * @route {GET} /
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Board[])} - All Boards in JSON format
 */
router.route('/').get(async (_req, res) => {
  try {
    return res.json(await boardsService.getAll());
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

/**
 * ### Get Single Board
 * @param {string} path - Express path
 * @route {GET} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Board)} - Single Board in JSON format
 */
router.route('/:id').get(async (req, res) => {
  try {
    const { id: boardId } = req.params;
    return res.json(await boardsService.get(boardId));
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

/**
 * ### Create Board
 * @param {string} path - Express path
 * @route {POST} /
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Board)} - Created Board in JSON format
 */
router.route('/').post(async (req, res) => {
  try {
    const { title, columns } = req.body;
    return res
      .status(StatusCodes.CREATED)
      .json(await boardsService.create(title, columns));
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

/**
 * ### Update Board
 * @param {string} path - Express path
 * @route {PUT} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Board)} - Updated Board in JSON format
 */
router.route('/:id').put(async (req, res) => {
  try {
    const { id: boardId } = req.params;
    const { title, columns } = req.body;

    return res.json(await boardsService.update(boardId, title, columns));
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

/**
 * ### Delete Board
 * @param {string} path - Express path
 * @route {DELETE} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Board)} - Deleted Board in JSON format
 */
router.route('/:id').delete(async (req, res) => {
  try {
    const { id: boardId } = req.params;
    return res.json(await boardsService.remove(boardId));
  } catch (err) {
    console.log('DELETE BOARD');
    console.log(err);
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

export { router };
