export declare const tasksService: {
    getAll: () => Promise<{
        id: any;
        title: any;
        order: any;
        description: any;
        userId: any;
        boardId: any;
        columnId: any;
    }[]>;
    get: (req: any) => Promise<{
        id: any;
        title: any;
        order: any;
        description: any;
        userId: any;
        boardId: any;
        columnId: any;
    }>;
    create: (req: any) => Promise<{
        id: any;
        title: any;
        order: any;
        description: any;
        userId: any;
        boardId: any;
        columnId: any;
    }>;
    update: (req: any) => Promise<{
        id: any;
        title: any;
        order: any;
        description: any;
        userId: any;
        boardId: any;
        columnId: any;
    }>;
    remove: (req: any) => Promise<{
        id: any;
        title: any;
        order: any;
        description: any;
        userId: any;
        boardId: any;
        columnId: any;
    }>;
};
