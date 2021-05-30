// @ts-check

import { usersRepo } from 'resources/users/user.memory.repository';
import { IUser, User } from 'resources/users/user.model';

// GET ALL
const getAll = async (): Promise<IUser[]> => {
  const users = await usersRepo.getAll();
  return users.map(User.toResponse);
};

// GET USER BY ID
const get = (userId: string): IUser => {
  const user = usersRepo.get(userId);
  return User.toResponse(user);
};

// CREATE USER
const create = (login: string, password: string, name: string): IUser => {
  const createdUser = usersRepo.create(login, password, name);
  if (createdUser) {
    return User.toResponse(createdUser);
  }
  throw '[App] Null Pointer Exception!';
};

// UPDATE USER
const update = async (
  userId: string,
  login: string,
  password: string,
  name: string
): Promise<IUser> => {
  const updatedUser = await usersRepo.update(userId, login, password, name);
  if (updatedUser) {
    return User.toResponse(updatedUser);
  }
  throw '[App] Null Pointer Exception!';
};

// DELETE USER
const remove = (userId: string): IUser => {
  const user = usersRepo.remove(userId);
  if (user) {
    return User.toResponse(user);
  }
  throw '[App] Null Pointer Exception!';
};

export const usersService = {
  getAll,
  get,
  create,
  update,
  remove,
};
