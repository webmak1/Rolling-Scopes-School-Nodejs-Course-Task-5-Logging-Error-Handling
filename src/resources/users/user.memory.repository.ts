// @ts-check

import { DBUsers } from 'common/InMemoryDbUsers';
import { IUser, User } from 'resources/users/user.model';

// GET ALL USERS
const getAll = async (): Promise<IUser[]> => DBUsers.getAllUsers();

// GET USER BY ID
const get = async (userId: string): Promise<IUser> => {
  const user = await DBUsers.getUser(userId);
  if (!user) {
    throw new Error(`[App Error] The user with id: ${userId} was not found!`);
  }
  return user;
};

// CREATE USER
const create = (
  login: string,
  password: string,
  name: string
): Promise<IUser> => {
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
): Promise<IUser> => {
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
const remove = (userId: string): Promise<IUser> => DBUsers.removeUser(userId);

export const usersRepo = {
  getAll,
  get,
  create,
  update,
  remove,
};
