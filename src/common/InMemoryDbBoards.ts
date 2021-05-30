// @ts-check

import { DBTasks } from 'common/InMemoryDbTasks';
import { remove } from 'lodash';
import { IBoard } from 'resources/boards/board.model';

const BoardsData: IBoard[] = [];

// GET ALL BOARDS
const getAllBoards = (): IBoard[] => {
  const res = BoardsData.slice(0);
  if (res) {
    return res;
  }
  throw '[App] Null Pointer Exception!';
};

// GET BOARD BY ID
const getBoard = (id: string): IBoard => {
  const allBoards = getAllBoards();
  const res = allBoards.filter((el) => el?.id === id)[0];
  if (res) {
    return res;
  }
  throw '[App] Null Pointer Exception!';
};

// CREATE BOARD
const createBoard = (board: IBoard): IBoard => {
  BoardsData.push(board);
  const res = getBoard(board.id);
  if (res) {
    return res;
  }
  throw '[App] Null Pointer Exception!';
};

// UPDATE BOARD
const updateBoard = async (updateBoard: IBoard): Promise<IBoard> => {
  await removeBoard(updateBoard.id);
  createBoard(updateBoard);
  const res = getBoard(updateBoard.id);
  if (res) {
    return res;
  }
  throw '[App] Null Pointer Exception!';
};

// REMOVE BOARD
const removeBoard = async (boardId: string): Promise<IBoard> => {
  const deletedBoard = getBoard(boardId);
  remove(BoardsData, (board) => board.id === boardId);
  await DBTasks.removeTaskByBoardId(boardId);
  const res = deletedBoard;
  if (res) {
    return res;
  }
  throw '[App] Null Pointer Exception!';
};

export const DBBoards = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  removeBoard,
};
