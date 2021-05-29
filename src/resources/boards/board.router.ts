// @ts-check

import { Application, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { boardsService } from 'resources/boards/board.service';
import express = require('express');

const router: Application = express();
// const router = express.Router();

// GET ALL BOARDS
router.route('/').get(async (_req: Request, res: Response) => {
  try {
    return res.json(await boardsService.getAll());
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

// GET BOARD BY ID
router.route('/:id').get(async (req: Request, res: Response) => {
  try {
    const { id: boardId } = req.params;

    if (boardId) {
      return res.json(await boardsService.get(boardId));
    }

    return res.status(StatusCodes.BAD_REQUEST).send('[App] Invalid req params');
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

// GREATE BOARD
router.route('/').post(async (req: Request, res: Response) => {
  try {
    const { title, columns } = req.body;
    return res
      .status(StatusCodes.CREATED)
      .json(await boardsService.create(title, columns));
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

// UPDATE BOARD
router.route('/:id').put(async (req: Request, res: Response) => {
  try {
    const { id: boardId } = req.params;
    const { title, columns } = req.body;
    if (boardId) {
      return res.json(await boardsService.update(boardId, title, columns));
    }
    return res.status(StatusCodes.BAD_REQUEST).send('[App] wrong req params');
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

// DELETE BOARD
router.route('/:id').delete(async (req: Request, res: Response) => {
  try {
    const { id: boardId } = req.params;
    if (boardId) {
      return res.json(await boardsService.remove(boardId));
    }
    return res.status(StatusCodes.BAD_REQUEST).send('[App] wrong req params');
  } catch (err) {
    console.log('DELETE BOARD');
    console.log(err);
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

export { router };
