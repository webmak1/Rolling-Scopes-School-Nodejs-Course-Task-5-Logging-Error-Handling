// @ts-check

import { DBBoards } from 'common/InMemoryDbBoards';
import { Board } from 'resources/boards/board.model';

// GET ALL
const getAll = async () => DBBoards.getAllBoards();

// GET BY ID
const get = async (id: string) => {
  const board = await DBBoards.getBoard(id);
  if (!board) {
    throw new Error(`[App Error] The board with id: ${id} was not found!`);
  }
  return board;
};

// CREATE BOARD
const create = (title: string, columns: string) => {
  const newBoard = new Board({
    id: undefined,
    title,
    columns,
  });
  DBBoards.createBoard(newBoard);
  return DBBoards.getBoard(newBoard.id);
};

// UPDATE BOARD
const update = (boardId: string, title: string, columns: string) => {
  const updateBoard = new Board({
    id: boardId,
    title,
    columns,
  });

  const res = DBBoards.updateBoard(updateBoard);
  return res;
};

// REMOVE BOARD
const remove = (boardId: string) => DBBoards.removeBoard(boardId);

export const boardsRepo = {
  getAll,
  get,
  create,
  update,
  remove,
};
