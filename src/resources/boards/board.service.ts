// @ts-check

import { boardsRepo } from 'resources/boards/board.memory.repository';
import { Board } from 'resources/boards/board.model';

/**
 * ### Get All Boards in Service
 * @returns {Promise<Board[]>} - Promise with All Boards in Service
 */
const getAll = async () => {
  const boards = await boardsRepo.getAll();
  return boards.map(Board.toResponse);
};

/**
 * ### Get Board By Id in Service
 * @param {express.Request} req
 * @returns {Promise<Board>} - Promise with a Single Board in Service
 */
const get = async (boardId: string) => {
  const board = await boardsRepo.get(boardId);
  return Board.toResponse(board);
};

/**
 * ### Create Board in Service
 * @param {express.Request} req
 * @returns {Promise<Board>} - Promise with Created Board in Service
 */
const create = async (title: string, columns: string) => {
  const board = await boardsRepo.create(title, columns);
  return Board.toResponse(board);
};

/**
 * ### Update Board in Service
 * @param {express.Request} req
 * @returns {Promise<Board>} - Promise with Updated Board in Service
 */
const update = async (boardId: string, title: string, columns: string) => {
  const board = await boardsRepo.update(boardId, title, columns);
  return Board.toResponse(board);
};

/**
 * ### Remove Board in Service
 * @param {express.Request} req
 * @returns {Promise<Board>} - Promise with Deleted Board in Service
 */
const remove = async (boardId: string) => {
  const board = await boardsRepo.remove(boardId);
  return Board.toResponse(board);
};

export const boardsService = {
  getAll,
  get,
  create,
  remove,
  update,
};
