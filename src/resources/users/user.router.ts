// @ts-check

import { Application, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { usersService } from 'resources/users/user.service';
import express = require('express');

const router: Application = express();

// GET ALL USERS
router.route('/').get(async (_req: Request, res: Response) => {
  try {
    return res.json(await usersService.getAll());
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

// GET USER BY ID
router.route('/:id').get(async (req: Request, res: Response) => {
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

// CREATE USER
router.route('/').post(async (req: Request, res: Response) => {
  try {
    const { login, password, name } = req.body;
    return res
      .status(StatusCodes.CREATED)
      .json(await usersService.create(login, password, name));
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

// UPDATE USER
router.route('/:id').put(async (req: Request, res: Response) => {
  try {
    const { id: userId } = req.params;
    const { login, password, name } = req.body;
    if (userId) {
      return res.json(await usersService.update(userId, login, password, name));
    }
    return res.status(StatusCodes.BAD_REQUEST).send('[App] wrong req params');
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

// DELETE USER
router.route('/:id').delete(async (req: Request, res: Response) => {
  console.log('DELETE');
  console.log(req.params);

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
