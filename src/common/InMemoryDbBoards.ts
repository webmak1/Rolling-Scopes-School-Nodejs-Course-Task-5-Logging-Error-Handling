// @ts-check

import { DBTasks } from 'common/InMemoryDbTasks';
import { remove } from 'lodash';
import { IBoard } from 'resources/boards/board.model';

const BoardsData: IBoard[] = [];

// GET ALL BOARDS
const getAllBoards = async () => BoardsData.slice(0);

// GET BOARD BY ID
const getBoard = async (id: string) => {
  const allBoards = await getAllBoards();
  return allBoards.filter((el) => el?.id === id)[0];
};

// CREATE BOARD
const createBoard = async (board: IBoard) => {
  BoardsData.push(board);
  return getBoard(board.id);
};

// UPDATE BOARD
const updateBoard = async (updateBoard: IBoard) => {
  await removeBoard(updateBoard.id);
  await createBoard(updateBoard);
  return getBoard(updateBoard.id);
};

// REMOVE BOARD
const removeBoard = async (boardId: string) => {
  const deletedBoard = await getBoard(boardId);
  await remove(BoardsData, (board) => board.id === boardId);
  await DBTasks.removeTaskByBoardId(boardId);
  return deletedBoard;
};

export const DBBoards = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  removeBoard,
};
