"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardsService = void 0;
const board_memory_repository_1 = require("resources/boards/board.memory.repository");
const board_model_1 = require("resources/boards/board.model");
/**
 * ### Get All Boards in Service
 * @returns {Promise<Board[]>} - Promise with All Boards in Service
 */
const getAll = async () => {
    const boards = await board_memory_repository_1.boardsRepo.getAll();
    return boards.map(board_model_1.Board.toResponse);
};
/**
 * ### Get Board By Id in Service
 * @param {express.Request} req
 * @returns {Promise<Board>} - Promise with a Single Board in Service
 */
const get = async (req) => {
    const { id: boardId } = req.params;
    const board = await board_memory_repository_1.boardsRepo.get(boardId);
    return board_model_1.Board.toResponse(board);
};
/**
 * ### Create Board in Service
 * @param {express.Request} req
 * @returns {Promise<Board>} - Promise with Created Board in Service
 */
const create = async (req) => {
    const board = await board_memory_repository_1.boardsRepo.create(new board_model_1.Board({
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
    const board = await board_memory_repository_1.boardsRepo.update(req.params.id, req.body);
    return board_model_1.Board.toResponse(board);
};
/**
 * ### Remove Board in Service
 * @param {express.Request} req
 * @returns {Promise<Board>} - Promise with Deleted Board in Service
 */
const remove = async (req) => {
    const { id: boardId } = req.params;
    const board = await board_memory_repository_1.boardsRepo.remove(boardId);
    return board_model_1.Board.toResponse(board);
};
exports.boardsService = {
    getAll,
    get,
    create,
    remove,
    update,
};
