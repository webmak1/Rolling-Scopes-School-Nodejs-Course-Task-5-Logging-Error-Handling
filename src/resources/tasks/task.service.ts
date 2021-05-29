// @ts-check

import { tasksRepo } from 'resources/tasks/task.memory.repository';
import { Task } from 'resources/tasks/task.model';

/**
 * ### Get All Tasks in Service
 * @returns {Promise<Task[]>} - Promise with All Tasks in Service
 */
const getAll = async () => {
  const tasks = await tasksRepo.getAll();
  return tasks.map(Task.toResponse);
};

/**
 * ### Get Task by Id in Service
 * @param {express.Request} req
 * @returns {Promise<Task>} - Promise with a Single Task in Service
 */
const get = async (boardId: string, taskId: string) => {
  const task = await tasksRepo.get(boardId, taskId);
  return Task.toResponse(task);
};

/**
 * ### Create Task in Service
 * @param {express.Request} req
 * @returns {Promise<Task>} - Promise with Created Task in Service
 */
const create = async (
  boardId: string,
  title: string,
  order: string,
  description: string,
  userId: string,
  columnId: string
) => {
  const task = await tasksRepo.create(
    boardId,
    title,
    order,
    description,
    userId,
    columnId
  );
  return Task.toResponse(task);
};

/**
 * ### Update Task in Service
 * @param {express.Request} req
 * @returns {Promise<Task>} - Promise with Updated Task in Service
 */
const update = async (
  boardId: string,
  taskId: string,
  title: string,
  order: string,
  description: string,
  userId: string,
  columnId: string
) => {
  const updatedTask = await tasksRepo.update(
    boardId,
    taskId,
    title,
    order,
    description,
    userId,
    columnId
  );
  return Task.toResponse(updatedTask);
};

/**
 * ### Remove Task in Service
 * @param {express.Request} req
 * @returns {Promise<Task>} - Promise with Deleted Task
 */
const remove = async (deletionId: string) => {
  const task = await tasksRepo.remove(deletionId);
  return Task.toResponse(task);
};

export const tasksService = {
  getAll,
  get,
  create,
  update,
  remove,
};
