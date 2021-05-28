// @ts-check

import { v4 as uuidv4 } from 'uuid';

export interface ITask {
  id: string;
  title: string;
  order: string;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
}

/**
 *  ### Class to create a Task object
 */
export class Task implements ITask {
  public id: string;
  public title: string;
  public order: string;
  public description: string;
  public userId: string;
  public boardId: string;
  public columnId: string;
  /**
   *
   * @param {Object} Task - Task
   */
  constructor({ title, order, description, userId, boardId, columnId }) {
    /**
     * @property {uuid()} id - id
     */
    this.id = uuidv4();
    /**
     * @property {string} title - title
     */
    this.title = title;
    /**
     * @property {string} order - order
     */
    this.order = order;
    /**
     * @property {string} description - description
     */
    this.description = description;
    /**
     * @property {string} userId - userId
     */
    this.userId = userId;
    /**
     * @property {string} boardId - boardId
     */
    this.boardId = boardId;
    /**
     * @property {string} columnId - columnId
     */
    this.columnId = columnId;
  }

  /**
   * ### Return Task public data
   * @param {Task} task - Task
   * @returns {Task}
   */
  static toResponse(task) {
    return task;
  }
}
