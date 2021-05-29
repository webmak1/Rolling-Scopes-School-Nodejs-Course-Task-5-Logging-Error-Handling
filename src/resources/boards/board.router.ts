// @ts-check

// import { Board } from 'boards/board.model.ts';
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { boardsService } from 'resources/boards/board.service';

// const router = express();
const router = express.Router();

router.route('/').get(async (_req: express.Request, res: express.Response) => {
  try {
    return res.json(await boardsService.getAll());
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

router
  .route('/:id')
  .get(async (req: express.Request, res: express.Response) => {
    try {
      const { id: boardId } = req.params;
      if (boardId) {
        return res.json(await boardsService.get(boardId));
      }

      return res
        .status(StatusCodes.BAD_REQUEST)
        .send('[App] Invalid req params');
    } catch (err) {
      return res.status(StatusCodes.NOT_FOUND).send(err.message);
    }
  });

router.route('/').post(async (req: express.Request, res: express.Response) => {
  try {
    const { title, columns } = req.body;
    return res
      .status(StatusCodes.CREATED)
      .json(await boardsService.create(title, columns));
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

router
  .route('/:id')
  .put(async (req: express.Request, res: express.Response) => {
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

router
  .route('/:id')
  .delete(async (req: express.Request, res: express.Response) => {
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
