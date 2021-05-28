"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
/**
 *  ### Class to create a User object
 */
class User {
    id;
    name;
    login;
    password;
    /**
     *
     * @param {Object} User - User
     */
    constructor({ name, login, password }) {
        /**
         * @property {uuid()} id - id
         */
        this.id = uuid_1.v4();
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
exports.User = User;
