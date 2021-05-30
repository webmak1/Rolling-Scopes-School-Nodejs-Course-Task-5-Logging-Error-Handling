// @ts-check

import { DBTasks } from 'common/InMemoryDbTasks';
import { remove } from 'lodash';
import { IUser } from 'resources/users/user.model';

const UsersData: IUser[] = [];

const getAllUsers = async (): Promise<IUser[]> => {
  const res = UsersData.slice(0);
  if (res) {
    return res;
  }
  throw '[App] Null Pointer Exception!';
};

const getUser = async (userId: string): Promise<IUser> => {
  const allUsers = await getAllUsers();
  const res = allUsers.filter((el) => el?.id === userId)[0];
  if (res) {
    return res;
  }
  throw '[App] Null Pointer Exception!';
};

const createUser = async (user: IUser): Promise<IUser> => {
  UsersData.push(user);
  const res = await getUser(user.id);
  if (res) {
    return res;
  }
  throw '[App] Null Pointer Exception!';
};

const removeUser = async (userId: string): Promise<IUser> => {
  const deletedUser = await getUser(userId);
  remove(UsersData, (user) => user.id === userId);
  await DBTasks.deleteUserFromTasks(userId);
  const res = deletedUser;
  if (res) {
    return res;
  }
  throw '[App] Null Pointer Exception!';
};

const updateUser = async (newUserData: IUser): Promise<IUser> => {
  await removeUser(newUserData.id);
  await createUser(newUserData);
  const res = await getUser(newUserData.id);
  if (res) {
    return res;
  }
  throw '[App] Null Pointer Exception!';
};

export const DBUsers = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  removeUser,
};
