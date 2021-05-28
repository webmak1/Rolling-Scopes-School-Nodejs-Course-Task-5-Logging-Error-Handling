"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const tasksService = require('resources/tasks/task.service');
exports.router = express_1.default.Router({ mergeParams: true });
/**
 * ### Get All Task
 * @param {string} path - Express path
 * @route {GET} /
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Task[])} - All Tasks in JSON format
 */
exports.router.route('/').get(async (_req, res) => {
    try {
        return res.json(await tasksService.getAll());
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(err.message);
    }
});
/**
 * ### Get Single Task
 * @param {string} path - Express path
 * @route {GET} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Task)} - Single Task in JSON format
 */
exports.router.route('/:id').get(async (req, res) => {
    try {
        return res.json(await tasksService.get(req));
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(err.message);
    }
});
/**
 * ### Create Task
 * @param {string} path - Express path
 * @route {POST} /
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Task)} - Created Task in JSON format
 */
exports.router.route('/').post(async (req, res) => {
    try {
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(await tasksService.create(req));
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(err.message);
    }
});
/**
 * ### Update Task
 * @param {string} path - Express path
 * @route {PUT} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Task)} - Updated Task in JSON format
 */
exports.router.route('/:id').put(async (req, res) => {
    try {
        return res.json(await tasksService.update(req));
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(err.message);
    }
});
/**
 * ### Delete Task
 * @param {string} path - Express path
 * @route {DELETE} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Task)} - Deleted Task in JSON format
 */
exports.router.route('/:id').delete(async (req, res) => {
    try {
        return res.json(await tasksService.remove(req));
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(err.message);
    }
});
