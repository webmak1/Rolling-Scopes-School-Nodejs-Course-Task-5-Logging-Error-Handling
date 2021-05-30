// @ts-check

import { DBUsers } from 'common/InMemoryDbUsers';
import { User } from 'resources/users/user.model';

// GET ALL USERS
const getAll = async () => DBUsers.getAllUsers();

// GET USER BY ID
const get = async (userId: string) => {
  const user = await DBUsers.getUser(userId);
  if (!user) {
    throw new Error(`[App Error] The user with id: ${userId} was not found!`);
  }
  return user;
};

// CREATE USER
const create = (login: string, password: string, name: string) => {
  const user = new User({
    id: undefined,
    login,
    password,
    name,
  });
  DBUsers.createUser(user);
  return DBUsers.getUser(user.id);
};

// UPDATE USER
const update = (
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
  DBUsers.updateUser(newUserData);
  return DBUsers.getUser(newUserData.id);
};

// DELETE USER
const remove = (userId: string) => DBUsers.removeUser(userId);

export const usersRepo = {
  getAll,
  get,
  create,
  update,
  remove,
};
