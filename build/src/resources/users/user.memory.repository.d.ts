export declare const usersRepo: {
    getAll: () => Promise<any[]>;
    get: (id: any) => Promise<any>;
    create: (user: any) => Promise<any>;
    update: (id: any, newUser: any) => Promise<any>;
    remove: (id: any) => Promise<any>;
};
