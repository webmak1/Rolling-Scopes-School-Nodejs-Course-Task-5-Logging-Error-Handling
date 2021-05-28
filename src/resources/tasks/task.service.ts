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
const get = async (req) => {
  const { boardId, id: taskId } = req.params;
  const task = await tasksRepo.get(boardId, taskId);
  return Task.toResponse(task);
};

/**
 * ### Create Task in Service
 * @param {express.Request} req
 * @returns {Promise<Task>} - Promise with Created Task in Service
 */
const create = async (boardId, title, order, description, userId, columnId) => {
  console.log(boardId, title, order, description, userId, columnId);

  const task = await tasksRepo.create(
    new Task({
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    })
  );
  return Task.toResponse(task);
};

/**
 * ### Update Task in Service
 * @param {express.Request} req
 * @returns {Promise<Task>} - Promise with Updated Task in Service
 */
const update = async (req) => {
  const { body } = req;
  const { boardId, id: taskId } = req.params;

  const updatedTask = await tasksRepo.update(boardId, taskId, body);
  return Task.toResponse(updatedTask);
};

/**
 * ### Remove Task in Service
 * @param {express.Request} req
 * @returns {Promise<Task>} - Promise with Deleted Task
 */
const remove = async (req) => {
  const task = await tasksRepo.remove(req.params.id);
  return Task.toResponse(task);
};

export const tasksService = {
  getAll,
  get,
  create,
  update,
  remove,
};
