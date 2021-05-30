// @ts-check

import { DBTasks } from 'common/InMemoryDbTasks';
import { remove } from 'lodash';
import { IUser } from 'resources/users/user.model';

const UsersData: IUser[] = [];

const getAllUsers = async () => UsersData.slice(0);

const getUser = async (userId: string) => {
  const allUsers = await getAllUsers();
  return allUsers.filter((el) => el?.id === userId)[0];
};

const createUser = async (user: IUser) => {
  UsersData.push(user);
  return getUser(user.id);
};

const removeUser = async (userId: string) => {
  const deletedUser = await getUser(userId);
  await remove(UsersData, (user) => user.id === userId);
  await DBTasks.deleteUserFromTasks(userId);
  return deletedUser;
};

const updateUser = async (newUserData: IUser) => {
  await removeUser(newUserData.id);
  await createUser(newUserData);
  return getUser(newUserData.id);
};

export const DBUsers = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  removeUser,
};
