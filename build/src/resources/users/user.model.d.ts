interface IUser {
    id: string;
    name: string;
    login: string;
    password: string;
}
/**
 *  ### Class to create a User object
 */
export declare class User implements IUser {
    id: string;
    name: string;
    login: string;
    password: string;
    /**
     *
     * @param {Object} User - User
     */
    constructor({ name, login, password }: {
        name: any;
        login: any;
        password: any;
    });
    /**
     * ### Return User public data
     * @param {User} user - User
     * @returns { {id, name, login }} - Returns User public data
     */
    static toResponse(user: any): {
        id: any;
        name: any;
        login: any;
    };
}
export {};
