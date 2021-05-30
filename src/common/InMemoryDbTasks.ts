// @ts-check

import { map, remove } from 'lodash';
import { ITask } from 'resources/tasks/task.model';

const TasksData: ITask[] = [];

const getAllTasks = async () => TasksData.slice(0);

const getTask = async (boardId: string, taskId: string) => {
  const allTasks = await getAllTasks();
  const result = await allTasks.filter(
    (el) => el?.boardId === boardId && el?.id === taskId
  )[0];
  return result;
};

const getTaskById = async (taskId: string) => {
  const allTasks = await getAllTasks();
  const result = await allTasks.filter((el) => el.id === taskId)[0];
  return result;
};

const createTask = async (task: ITask) => {
  await TasksData.push(task);
  return await getTaskById(task.id);
};

const removeTask = async (taskId: string) => {
  const deletedTask = await getTaskById(taskId);
  await remove(TasksData, (task) => task.id === taskId);
  return deletedTask;
};

const deleteUserFromTasks = async (userId: string) => {
  await map(TasksData, async (task) => {
    if (task.userId === userId) {
      await removeTask(task.id);
      await createTask({ ...task, userId: null });
    }
  });
};

const updateTask = async (updatedTask: ITask) => {
  await removeTask(updatedTask.id);
  await createTask(updatedTask);
  return getTaskById(updatedTask.id);
};

const removeTaskByBoardId = async (boardId: string) => {
  await remove(TasksData, (task) => task.boardId === boardId);
};

export const DBTasks = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  removeTask,
  deleteUserFromTasks,
  removeTaskByBoardId,
};
