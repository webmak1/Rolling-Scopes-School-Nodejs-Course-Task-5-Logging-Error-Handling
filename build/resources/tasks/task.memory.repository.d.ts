export declare const tasksRepo: {
    getAll: () => Promise<any[]>;
    get: (boardId: any, taskId: any) => Promise<any>;
    create: (task: any) => Promise<any>;
    update: (boardId: any, taskId: any, newTask: any) => Promise<any>;
    remove: (id: any) => Promise<any>;
};
