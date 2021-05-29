// @ts-check
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { usersService } from 'resources/users/user.service';

// const router = express();
const router = express.Router();

router.route('/').get(async (_req: express.Request, res: express.Response) => {
  try {
    return res.json(await usersService.getAll());
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

router
  .route('/:id')
  .get(async (req: express.Request, res: express.Response) => {
    try {
      const { id: userId } = req.params;
      if (userId) {
        return res.json(await usersService.get(userId));
      }
      return res.status(StatusCodes.BAD_REQUEST).send('[App] wrong req params');
    } catch (err) {
      return res.status(StatusCodes.NOT_FOUND).send(err.message);
    }
  });

router.route('/').post(async (req: express.Request, res: express.Response) => {
  try {
    const { login, password, name } = req.body;
    return res
      .status(StatusCodes.CREATED)
      .json(await usersService.create(login, password, name));
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

router
  .route('/:id')
  .put(async (req: express.Request, res: express.Response) => {
    try {
      const { id: userId } = req.params;
      const { login, password, name } = req.body;
      if (userId) {
        return res.json(
          await usersService.update(userId, login, password, name)
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
      const { id: userId } = req.params;
      if (userId) {
        return res.json(await usersService.remove(userId));
      }
      return res.status(StatusCodes.BAD_REQUEST).send('[App] wrong req params');
    } catch (err) {
      return res.status(StatusCodes.NOT_FOUND).send(err.message);
    }
  });

export { router };
