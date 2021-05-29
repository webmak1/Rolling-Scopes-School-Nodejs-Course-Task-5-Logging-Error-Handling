// @ts-check

import { DBBoards } from 'common/InMemoryDbBoards';
import { Board } from 'resources/boards/board.model';

/**
 * A Board
 * @typedef {Object} Board - Board
 * @property {string} id - Id
 * @property {string} title - Title
 * @property {string} columns - Columns
 */

/**
 * ### Get All Boards in Repository
 * @returns {Promise<Board[]>} - Promise with All Boards in Repository
 */
const getAll = async () => DBBoards.getAllBoards();

/**
 * ### Get Board By Id in Repository
 * @param {string} id - board id
 * @returns {Promise<Board>} - Promise with a Single Board in Repository
 */
const get = async (id: string) => {
  const board = await DBBoards.getBoard(id);
  if (!board) {
    throw new Error(`[App Error] The board with id: ${id} was not found!`);
  }
  return board;
};

/**
 * ### Create Board in Repository
 * @param {object} board - Board body
 * @returns {Promise<Board>} - Promise with Created Board in Repository
 */
const create = (title: string, columns: string) => {
  const newBoard = new Board({
    id: '',
    title,
    columns,
  });

  DBBoards.createBoard(newBoard);
  return get(newBoard.id);
};

/**
 * ### Update Board in Repository
 * @param {string} id - Board Id
 * @param {Board} newBoard - New Board
 * @returns {Promise<Board>} - Promise with Updated Board in Repository
 */
const update = (boardId: string, title: string, columns: string) => {
  const newBoardData = new Board({
    id: boardId,
    title,
    columns,
  });
  DBBoards.updateBoard(newBoardData);
  return get(newBoardData.id);
};

/**
 * ### Remove Board in Repository
 * @param {string} boardId - Board Id
 * @returns {Promise<Board>} - Promise with Deleted Board in Repository
 */
const remove = (boardId: string) => DBBoards.removeBoard(boardId);

export const boardsRepo = {
  getAll,
  get,
  create,
  update,
  remove,
};
