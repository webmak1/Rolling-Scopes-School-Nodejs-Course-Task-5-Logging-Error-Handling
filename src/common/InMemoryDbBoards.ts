// @ts-check

import { DBTasks } from 'common/InMemoryDbTasks';
import { remove } from 'lodash';
import { IBoard } from 'resources/boards/board.model';

/**
 * A Board
 * @typedef {Object} Board - Board
 * @property {string} id - Id
 * @property {string} title - Title
 * @property {string} columns - Columns
 */

/**
 * @type{Board[]}
 */
const BoardsData: IBoard[] = [];

/**
 * ### Get All Boards in DataBase file
 * @returns {Promise<Board[]>} - Promise with All Boards in DataBase file
 */
const getAllBoards = async () => BoardsData.slice(0);

/**
 * ### Get Board By Id in DataBase file
 * @param {string} id - board id
 * @returns {Promise<Board>} - Promise with a Single Board in DataBase file
 */
const getBoard = async (id: string) => {
  const allBoards = await getAllBoards();
  return allBoards.filter((el) => el?.id === id)[0];
};

/**
 * ### Create Board in DataBase file
 * @param {Board} board - Board body
 * @returns {Promise<Board>} - Promise with Created Board in DataBase file
 */
const createBoard = async (newBoard: IBoard) => {
  BoardsData.push(newBoard);
  return getBoard(newBoard.id);
};

/**
 * ### Remove Board in DataBase file
 * @param {string} boardId - Board Id
 * @returns {Promise<Board>} - Promise with Deleted Board in DataBase file
 */
const removeBoard = async (boardId: string) => {
  const deletedBoard = await getBoard(boardId);
  await remove(BoardsData, (board) => board.id === boardId);
  await DBTasks.removeTaskByBoardId(boardId);
  return deletedBoard;
};

/**
 * ### Update Board in DataBase file
 * @param {string} id - Board Id
 * @param {Board} newBoard - New Board
 * @returns {Promise<Board>} - Promise with Updated Board in DataBase file
 */
const updateBoard = async (newBoardData: IBoard) => {
  await removeBoard(newBoardData.id);
  await createBoard(newBoardData);
  return getBoard(newBoardData.id);
};

export const DBBoards = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  removeBoard,
};
