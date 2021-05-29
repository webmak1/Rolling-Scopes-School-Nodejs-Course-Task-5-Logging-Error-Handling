// @ts-check

import { tasksRepo } from 'resources/tasks/task.memory.repository';
import { Task } from 'resources/tasks/task.model';

const getAll = async () => {
  const tasks = await tasksRepo.getAll();
  return tasks.map(Task.toResponse);
};

const get = async (boardId: string, taskId: string) => {
  const task = await tasksRepo.get(boardId, taskId);
  return Task.toResponse(task);
};

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

const remove = async (deletionId: string) => {
  const task = await tasksRepo.remove(deletionId);
  if (task) {
    return Task.toResponse(task);
  }
  throw new Error('[App] Null Pointer Exception');
};

export const tasksService = {
  getAll,
  get,
  create,
  update,
  remove,
};
