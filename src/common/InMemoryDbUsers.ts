// @ts-check

import { DBTasks } from 'common/InMemoryDbTasks';
import { remove } from 'lodash';
import { IUser } from 'resources/users/user.model';

/**
 * A User
 * @typedef {Object} User - User
 * @property {string} id - Id
 * @property {string} name - Name
 * @property {string} login - Login
 * @property {string} password - Password
 */

/**
 * @type{User[]}
 */
const UsersData: IUser[] = [];

/**
 * ### Get All Users in DataBase file
 * @returns {Promise<User[]>} - Promise with All Users in DataBase file
 */
const getAllUsers = async () => UsersData.slice(0);

/**
 * ### Get User by Id in DataBase file
 * @param {string} id - user id
 * @returns {Promise<User>} - Promise with a Single User in DataBase file
 */
const getUser = async (userId: string) => {
  const allUsers = await getAllUsers();
  return allUsers.filter((el) => el?.id === userId)[0];
};

/**
 * ### Create User in DataBase file
 * @param {User} user - User body
 * @returns {Promise<User>} - Promise with Created User in DataBase file
 */
const createUser = async (user: IUser) => {
  UsersData.push(user);
  return getUser(user.id);
};

/**
 * ### Remove User in DataBase file
 * @param {string} userId - User Id
 * @returns {Promise<User>} - Promise with Deleted User in DataBase file
 */
const removeUser = async (userId: string) => {
  const deletedUser = await getUser(userId);
  await remove(UsersData, (user) => user.id === userId);
  await DBTasks.deleteUserFromTasks(userId);
  return deletedUser;
};

/**
 * ### Update User in DataBase file
 * @param {string} id - User Id
 * @param {object} newUser - new User
 * @returns {Promise<User>} - Promise with Updated User in DataBase file
 */
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
