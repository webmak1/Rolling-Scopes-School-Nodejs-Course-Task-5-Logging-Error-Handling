// @ts-check

import { v4 as uuidv4 } from 'uuid';

interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
}

/**
 *  ### Class to create a User object
 */
export class User implements IUser {
  public id: string;
  public name: string;
  public login: string;
  public password: string;

  /**
   *
   * @param {Object} User - User
   */
  constructor({ id = uuidv4(), name, login, password }) {
    /**
     * @property {uuid()} id - id
     */
    this.id = id;

    /**
     * @property {string} name - name
     */
    this.name = name;

    /**
     * @property {string} login - login
     */
    this.login = login;

    /**
     * @property {string} password - password
     */
    this.password = password;
  }

  /**
   * ### Return User public data
   * @param {User} user - User
   * @returns { {id, name, login }} - Returns User public data
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
