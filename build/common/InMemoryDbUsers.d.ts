export declare const DBUsers: {
    getAllUsers: () => Promise<any[]>;
    getUser: (id: any) => Promise<any>;
    createUser: (user: any) => Promise<any>;
    updateUser: (id: any, newUser: any) => Promise<any>;
    removeUser: (userId: any) => Promise<any>;
};
