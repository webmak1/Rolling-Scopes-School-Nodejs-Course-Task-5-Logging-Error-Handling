// @ts-check

import { usersRepo } from 'resources/users/user.memory.repository';
import { User } from 'resources/users/user.model';

/**
 * A Public User Data
 * @typedef {Object} PublicUserData - Public User Data
 * @property {string} id - id
 * @property {string} name - name
 * @property {string} login - login
 */

/**
 * ### Get All Users in Service
 * @returns {Promise<PublicUserData[]>} - Promise with All Users in Service
 */
const getAll = async () => {
  const users = await usersRepo.getAll();
  return users.map(User.toResponse);
};

/**
 * ### Get User by ID in Service
 * @param {express.Request} req
 * @returns {Promise<PublicUserData>} - Promise with User by ID in Service
 */
const get = async (userId: string) => {
  const user = await usersRepo.get(userId);
  return User.toResponse(user);
};

/**
 * ### Create User by ID in Service
 * @param {express.Request} req
 * @returns {Promise<PublicUserData | {}>} - Promise with Created User in Service
 */
const create = async (login: string, password: string, name: string) => {
  const user = new User({
    id,
    login,
    password,
    name,
  });
  const createdUser = await usersRepo.create(user);
  return User.toResponse(createdUser);
};

/**
 * ### Update User in Service
 * @param {string} id - User Id
 * @param {User} newUser - new User
 * @returns {Promise<PublicUserData>}  - Promise with Updated User in Service
 */
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
  return User.toResponse(updatedUser);
};

/**
 * ### Remove User in Service
 * @param {string} id - User Id
 * @returns {Promise<PublicUserData>} - Promise with Deleted User in Service
 */
const remove = async (userId: string) => {
  const user = await usersRepo.remove(userId);
  return User.toResponse(user);
};

export const usersService = {
  getAll,
  get,
  create,
  update,
  remove,
};
