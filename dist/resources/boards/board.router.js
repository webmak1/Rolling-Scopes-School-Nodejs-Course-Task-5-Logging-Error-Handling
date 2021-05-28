"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// import { Board } from 'boards/board.model.ts';
const board_service_1 = require("boards/board.service");
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
exports.router = express_1.default.Router();
/**
 * ### Get All Boards
 * @param {string} path - Express path
 * @route {GET} /
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Board[])} - All Boards in JSON format
 */
exports.router.route('/').get(async (_req, res) => {
    try {
        return res.json(await board_service_1.boardsService.getAll());
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(err.message);
    }
});
/**
 * ### Get Single Board
 * @param {string} path - Express path
 * @route {GET} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Board)} - Single Board in JSON format
 */
exports.router.route('/:id').get(async (req, res) => {
    try {
        return res.json(await board_service_1.boardsService.get(req));
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(err.message);
    }
});
/**
 * ### Create Board
 * @param {string} path - Express path
 * @route {POST} /
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Board)} - Created Board in JSON format
 */
exports.router.route('/').post(async (req, res) => {
    try {
        return res
            .status(http_status_codes_1.StatusCodes.CREATED)
            .json(await board_service_1.boardsService.create(req));
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(err.message);
    }
});
/**
 * ### Update Board
 * @param {string} path - Express path
 * @route {PUT} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Board)} - Updated Board in JSON format
 */
exports.router.route('/:id').put(async (req, res) => {
    try {
        return res.json(await board_service_1.boardsService.update(req));
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(err.message);
    }
});
/**
 * ### Delete Board
 * @param {string} path - Express path
 * @route {DELETE} /:id
 * @param {express.Request} req  - Express request object
 * @param {express.Response} res  - Express response object
 * @returns {JSON(Board)} - Deleted Board in JSON format
 */
exports.router.route('/:id').delete(async (req, res) => {
    try {
        return res.json(await board_service_1.boardsService.remove(req));
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(err.message);
    }
});
