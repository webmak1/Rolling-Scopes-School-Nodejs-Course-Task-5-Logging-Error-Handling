"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersService = void 0;
const user_memory_repository_1 = require("resources/users/user.memory.repository");
const user_model_1 = require("resources/users/user.model");
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
    const users = await user_memory_repository_1.usersRepo.getAll();
    return users.map(user_model_1.User.toResponse);
};
/**
 * ### Get User by ID in Service
 * @param {express.Request} req
 * @returns {Promise<PublicUserData>} - Promise with User by ID in Service
 */
const get = async (req) => {
    const user = await user_memory_repository_1.usersRepo.get(req.params.id);
    return user_model_1.User.toResponse(user);
};
/**
 * ### Create User by ID in Service
 * @param {express.Request} req
 * @returns {Promise<PublicUserData | {}>} - Promise with Created User in Service
 */
const create = async (req) => {
    const { login, password, name } = req.body;
    const user = new user_model_1.User({
        login,
        password,
        name,
    });
    const createdUser = await user_memory_repository_1.usersRepo.create(user);
    return user_model_1.User.toResponse(createdUser);
};
/**
 * ### Update User in Service
 * @param {string} id - User Id
 * @param {User} newUser - new User
 * @returns {Promise<PublicUserData>}  - Promise with Updated User in Service
 */
const update = async (id, newUser) => {
    const user = await user_memory_repository_1.usersRepo.update(id, newUser);
    return user_model_1.User.toResponse(user);
};
/**
 * ### Remove User in Service
 * @param {string} id - User Id
 * @returns {Promise<PublicUserData>} - Promise with Deleted User in Service
 */
const remove = async (id) => {
    const user = await user_memory_repository_1.usersRepo.remove(id);
    return user_model_1.User.toResponse(user);
};
exports.usersService = {
    getAll,
    get,
    create,
    update,
    remove,
};
