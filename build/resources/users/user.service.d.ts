export declare const usersService: {
    getAll: () => Promise<{
        id: any;
        name: any;
        login: any;
    }[]>;
    get: (req: any) => Promise<{
        id: any;
        name: any;
        login: any;
    }>;
    create: (req: any) => Promise<{
        id: any;
        name: any;
        login: any;
    }>;
    update: (id: any, newUser: any) => Promise<{
        id: any;
        name: any;
        login: any;
    }>;
    remove: (id: any) => Promise<{
        id: any;
        name: any;
        login: any;
    }>;
};
