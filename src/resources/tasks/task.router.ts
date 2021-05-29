// @ts-check

import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { tasksService } from 'resources/tasks/task.service';

// interface hasBoardId extends express.Request {
//   boardId: string;
// }

const router = express.Router({ mergeParams: true });

router.route('/').get(async (_req: express.Request, res: express.Response) => {
  try {
    return res.json(await tasksService.getAll());
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

router
  .route('/:id')
  .get(async (req: express.Request, res: express.Response) => {
    try {
      const { boardId, id: taskId } = req.params;
      if (boardId && taskId) {
        return res.json(await tasksService.get(boardId, taskId));
      }
      return res.status(StatusCodes.BAD_REQUEST).send('[App] wrong req params');
    } catch (err) {
      return res.status(StatusCodes.NOT_FOUND).send(err.message);
    }
  });

router.route('/').post(async (req: express.Request, res: express.Response) => {
  try {
    const { boardId } = req.params;
    const { title, order, description, userId, columnId } = req.body;

    if (boardId) {
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
    }
    return res.status(StatusCodes.BAD_REQUEST).send('[App] wrong req params');
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

router
  .route('/:id')
  .put(async (req: express.Request, res: express.Response) => {
    try {
      const { boardId, id: taskId } = req.params;
      const { title, order, description, userId, columnId } = req.body;
      if (boardId && taskId) {
        return res.json(
          await tasksService.update(
            boardId,
            taskId,
            title,
            order,
            description,
            userId,
            columnId
          )
        );
      }
      return res.status(StatusCodes.BAD_REQUEST).send('[App] wrong req params');
    } catch (err) {
      return res.status(StatusCodes.NOT_FOUND).send(err.message);
    }
  });

router
  .route('/:id')
  .delete(async (req: express.Request, res: express.Response) => {
    try {
      const { id: deletionId } = req.params;
      if (deletionId) {
        return res.json(await tasksService.remove(deletionId));
      }
      return res.status(StatusCodes.BAD_REQUEST).send('[App] wrong req params');
    } catch (err) {
      return res.status(StatusCodes.NOT_FOUND).send(err.message);
    }
  });

export { router };
