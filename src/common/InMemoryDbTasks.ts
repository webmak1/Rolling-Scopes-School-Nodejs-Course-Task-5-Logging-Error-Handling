// @ts-check

import { map, remove } from 'lodash';
import { ITask } from 'resources/tasks/task.model';

/**
 * A Tasks
 * @typedef {Object} Task
 * @property {string} id - Id
 * @property {string} title - Title
 * @property {string} order - Order
 * @property {string} description - Description
 * @property {string} userId - User Id
 * @property {string} boardId - Board Id
 * @property {string} columnId - Column Id
 */

/**
 * @type{Task[]}
 */
const TasksData: ITask[] = [];

/**
 * ### Get All Tasks in DataBase file
 * @returns {Promise<Task[]>} - Promise with All Tasks in DataBase file
 */
const getAllTasks = async () => TasksData.slice(0);

/**
 * ### Get Task By Id in DataBase file
 * @param {string} boardId - board id
 * @param {string} taskId - task id
 * @returns {Promise<Task>} - Promise with a Single Task in DataBase file
 */
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

/**
 * ### Create Task in DataBase file
 * @param {Task} task - Task body
 * @returns {Promise<Task>} - Promise with Created Task in DataBase file
 */
const createTask = async (task: ITask) => {
  await TasksData.push(task);
  return await getTaskById(task.id);
};

/**
 * ### Remove Task in DataBase file
 * @param {string} id - Task Id
 * @returns {Promise<Task>} - Promise with Deleted Task in DataBase file
 */
const removeTask = async (id: string) => {
  const deletedTask = await getTaskById(id);
  await remove(TasksData, (task) => task.id === id);
  return deletedTask;
};

/**
 * ### Delete User From Tasks in DataBase file
 * @param {string} userId
 * @returns {Promise<void>} - Promise with Void in DataBase file
 */
const deleteUserFromTasks = async (userId: string) => {
  await map(TasksData, async (task) => {
    if (task.userId === userId) {
      await removeTask(task.id);
      await createTask({ ...task, userId: '' });
    }
  });
};

/**
 * ### Update Task in DataBase file
 * @param {string} boardId - Board Id
 * @param {string} taskId - Task Id
 * @param {Task} newTask - new Task
 * @returns {Promise<Task>} - Promise with Updated Task in DataBase file
 */
const updateTask = async (_boardId: string, taskId: string, newTask: ITask) => {
  await removeTask(taskId);
  await createTask(newTask);
  return getTaskById(taskId);
};

/**
 * ### Remove Task by Board Id in DataBase file
 * @param {string} boardId
 * @returns {Promise<void>} - Promise with Void in DataBase file
 */
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
