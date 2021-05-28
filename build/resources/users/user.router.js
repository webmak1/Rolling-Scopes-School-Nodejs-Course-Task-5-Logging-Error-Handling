"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// @ts-check
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const user_service_1 = require("resources/users/user.service");
exports.router = express_1.default.Router();
/**
 * A Public User Data
 * @typedef {Object} PublicUserData - Public User Data
 * @property {string} id - id
 * @property {string} name - name
 * @property {string} login - login
 */
/**
 * ### Get All Users
 * @param {string} path - Express path
 * @route {GET} /
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(PublicUserData[])} - All Users in JSON format
 */
exports.router.route('/').get(async (_req, res) => {
    try {
        return res.json(await user_service_1.usersService.getAll());
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(err.message);
    }
});
/**
 * ### Get Single Users
 * @param {string} path - Express path
 * @route {GET} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(PublicUserData)} - Single User in JSON format
 */
exports.router.route('/:id').get(async (req, res) => {
    try {
        return res.json(await user_service_1.usersService.get(req));
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(err.message);
    }
});
/**
 * ### Create User
 * @param {string} path - Express path
 * @route {POST} /
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(PublicUserData)} - Created User in JSON format
 */
exports.router.route('/').post(async (req, res) => {
    try {
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(await user_service_1.usersService.create(req));
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(err.message);
    }
});
/**
 * ### Update User
 * @param {string} path - Express path
 * @route {PUT} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(PublicUserData)} - Updated User in JSON format
 */
exports.router.route('/:id').put(async (req, res) => {
    try {
        return res.json(await user_service_1.usersService.update(req.params.id, req.body));
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(err.message);
    }
});
/**
 * ### Delete User
 * @param {string} path - Express path
 * @route {DELETE} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(PublicUserData)} - Deleted User in JSON format
 */
exports.router.route('/:id').delete(async (req, res) => {
    try {
        return res.json(await user_service_1.usersService.remove(req.params.id));
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(err.message);
    }
});
