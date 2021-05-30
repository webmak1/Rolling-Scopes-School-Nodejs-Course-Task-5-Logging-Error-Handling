// @ts-check

import { DBTasks } from 'common/InMemoryDbTasks';
import { ITask, Task } from 'resources/tasks/task.model';

// GET ALL TASKS
const getAll = async (): Promise<ITask> => DBTasks.getAllTasks();

// GET TASK BY ID
const get = async (boardId: string, taskId: string): Promise<ITask> => {
  const task = await DBTasks.getTask(boardId, taskId);
  if (!task) {
    throw new Error(`[App Error] The task with id: ${taskId} was not found!`);
  }
  return task;
};

// CREATE TASK
const create = (
  boardId: string,
  title: string,
  order: string,
  description: string,
  userId: string,
  columnId: string
): Promise<ITask> => {
  const newTask = new Task({
    id: undefined,
    boardId,
    title,
    order,
    description,
    userId,
    columnId,
  });

  return DBTasks.createTask(newTask);
};

// UPDATE TASK
const update = (
  boardId: string,
  taskId: string,
  title: string,
  order: string,
  description: string,
  userId: string,
  columnId: string
): Promise<ITask> => {
  const updateTask = new Task({
    id: taskId,
    boardId,
    title,
    order,
    description,
    userId,
    columnId,
  });

  DBTasks.updateTask(updateTask);
  return DBTasks.getTask(updateTask.boardId, updateTask.id);
};

// REMOVE TASK
const remove = (id: string): Promise<ITask> => DBTasks.removeTask(id);

export const tasksRepo = {
  getAll,
  get,
  create,
  update,
  remove,
};
