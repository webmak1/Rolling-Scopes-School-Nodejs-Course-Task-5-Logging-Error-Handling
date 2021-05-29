// @ts-check

import { usersRepo } from 'resources/users/user.memory.repository';
import { User } from 'resources/users/user.model';

const getAll = async () => {
  const users = await usersRepo.getAll();
  return users.map(User.toResponse);
};

const get = async (userId: string) => {
  const user = await usersRepo.get(userId);
  return User.toResponse(user);
};

const create = async (login: string, password: string, name: string) => {
  const user = new User({
    id: '',
    login,
    password,
    name,
  });
  const createdUser = await usersRepo.create(user);
  if (createdUser) {
    return User.toResponse(createdUser);
  }
  throw new Error('[App] Null Pointer Exception');
};

const update = async (
  userId: string,
  login: string,
  password: string,
  name: string
) => {
  const newUserData = new User({
    id: userId,
    login,
    password,
    name,
  });
  const updatedUser = await usersRepo.update(newUserData);
  if (updatedUser) {
    return User.toResponse(updatedUser);
  }
  throw new Error('[App] Null Pointer Exception');
};

const remove = async (userId: string) => {
  const user = await usersRepo.remove(userId);

  if (user) {
    return User.toResponse(user);
  }
  throw new Error('[App] Null Pointer Exception');
};

export const usersService = {
  getAll,
  get,
  create,
  update,
  remove,
};
