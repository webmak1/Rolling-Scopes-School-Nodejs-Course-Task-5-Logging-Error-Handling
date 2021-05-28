"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBUsers = void 0;
const InMemoryDbTasks_1 = require("common/InMemoryDbTasks");
const lodash_1 = require("lodash");
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
const UsersData = [];
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
const getUser = async (id) => {
    const allUsers = await getAllUsers();
    return allUsers.filter((el) => el?.id === id)[0];
};
/**
 * ### Create User in DataBase file
 * @param {User} user - User body
 * @returns {Promise<User>} - Promise with Created User in DataBase file
 */
const createUser = async (user) => {
    UsersData.push(user);
    return getUser(user.id);
};
/**
 * ### Remove User in DataBase file
 * @param {string} userId - User Id
 * @returns {Promise<User>} - Promise with Deleted User in DataBase file
 */
const removeUser = async (userId) => {
    const deletedUser = await getUser(userId);
    await lodash_1.default.remove(UsersData, (user) => user.id === userId);
    await InMemoryDbTasks_1.DBTasks.deleteUserFromTasks(userId);
    return deletedUser;
};
/**
 * ### Update User in DataBase file
 * @param {string} id - User Id
 * @param {object} newUser - new User
 * @returns {Promise<User>} - Promise with Updated User in DataBase file
 */
const updateUser = async (id, newUser) => {
    await removeUser(id);
    await createUser(newUser);
    return getUser(id);
};
exports.DBUsers = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    removeUser,
};
