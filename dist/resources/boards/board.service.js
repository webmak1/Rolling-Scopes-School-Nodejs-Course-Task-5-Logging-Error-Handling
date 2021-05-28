"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
const board_memory_repository_1 = require("boards/board.memory.repository");
const board_model_1 = require("boards/board.model");
const express_1 = require("express");
/**
 * ### Get All Boards in Service
 * @returns {Promise<Board[]>} - Promise with All Boards in Service
 */
const getAll = async () => {
    const boards = await board_memory_repository_1.default.getAll();
    return boards.map(board_model_1.Board.toResponse);
};
/**
 * ### Get Board By Id in Service
 * @param {express.Request} req
 * @returns {Promise<Board>} - Promise with a Single Board in Service
 */
const get = async (req) => {
    const { id: boardId } = req.params;
    const board = await board_memory_repository_1.default.get(boardId);
    return board_model_1.Board.toResponse(board);
};
/**
 * ### Create Board in Service
 * @param {express.Request} req
 * @returns {Promise<Board>} - Promise with Created Board in Service
 */
const create = async (req) => {
    const board = await board_memory_repository_1.default.create(new board_model_1.Board({
        title: req.body.title,
        columns: req.body.columns,
    }));
    return board_model_1.Board.toResponse(board);
};
/**
 * ### Update Board in Service
 * @param {express.Request} req
 * @returns {Promise<Board>} - Promise with Updated Board in Service
 */
const update = async (req) => {
    const board = await board_memory_repository_1.default.update(req.params.id, req.body);
    return board_model_1.Board.toResponse(board);
};
/**
 * ### Remove Board in Service
 * @param {express.Request} req
 * @returns {Promise<Board>} - Promise with Deleted Board in Service
 */
const remove = async (req) => {
    const { id: boardId } = req.params;
    const board = await board_memory_repository_1.default.remove(boardId);
    return board_model_1.Board.toResponse(board);
};
// Dummy for linter
if (process.env.level) {
    console.log('**Express Version: ', express_1.default.version);
}
module.exports = {
    getAll,
    get,
    create,
    remove,
    update,
};
