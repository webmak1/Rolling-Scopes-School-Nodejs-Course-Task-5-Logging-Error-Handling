// @ts-check

import { map, remove } from 'lodash';
import { ITask } from 'resources/tasks/task.model';

const TasksData: ITask[] = [];

const getAllTasks = (): ITask[] => {
  const res = TasksData.slice(0);
  if (res) {
    return res;
  }
  throw '[App] Null Pointer Exception!';
};

const getTask = (boardId: string, taskId: string): ITask => {
  const allTasks = getAllTasks();
  const res = allTasks.filter(
    (el) => el?.boardId === boardId && el?.id === taskId
  )[0];
  if (res) {
    return res;
  }
  throw '[App] Null Pointer Exception!';
};

const getTaskById = (taskId: string): ITask => {
  const allTasks = getAllTasks();
  const res = allTasks.filter((el) => el.id === taskId)[0];
  if (res) {
    return res;
  }
  throw '[App] Null Pointer Exception!';
};

const createTask = (task: ITask): ITask => {
  TasksData.push(task);
  const res = getTaskById(task.id);
  if (res) {
    return res;
  }
  throw '[App] Null Pointer Exception!';
};

const removeTask = async (taskId: string): Promise<ITask> => {
  const deletedTask = await getTaskById(taskId);
  remove(TasksData, (task) => task.id === taskId);
  const res = deletedTask;
  if (res) {
    return res;
  }
  throw '[App] Null Pointer Exception!';
};

const deleteUserFromTasks = async (userId: string): Promise<void> => {
  map(TasksData, async (task) => {
    if (task.userId === userId) {
      await removeTask(task.id);
      createTask({ ...task, userId: null });
    }
  });
};

const updateTask = async (updatedTask: ITask): Promise<ITask> => {
  await removeTask(updatedTask.id);
  createTask(updatedTask);
  const res = getTaskById(updatedTask.id);
  if (res) {
    return res;
  }
  throw '[App] Null Pointer Exception!';
};

const removeTaskByBoardId = (boardId: string): void => {
  remove(TasksData, (task) => task.boardId === boardId);
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
