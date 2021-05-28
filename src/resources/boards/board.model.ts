// @ts-check

import { v4 as uuidv4 } from 'uuid';

interface IBoard {
  id: string;
  title: string;
  columns: object;
}

/**
 *  ### Class to create a Board object
 */
export class Board implements IBoard {
  public id: string;
  public title: string;
  public columns: object;

  /**
   *
   * @param {Object} Board - Board
   */
  constructor({ title, columns }) {

    /**
     * @property {uuid()} id - id
     */
    this.id = uuidv4();
    /**
     * @property {string} title - title
     */
    this.title = title;
    /**
     * @property {string} columns - columns
     */
    this.columns = columns;
  }

  /**
   * ### Return Board public data
   * @property {Function} toResponse - Returns Board public data
   * @param {Board} board - Board
   * @returns { Board} - Board
   */
  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}
