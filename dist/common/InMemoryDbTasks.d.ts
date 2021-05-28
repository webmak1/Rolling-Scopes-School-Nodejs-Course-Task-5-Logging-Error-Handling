export declare const DBTasks: {
    getAllTasks: () => Promise<any[]>;
    getTask: (boardId: any, taskId: any) => Promise<any>;
    createTask: (task: any) => Promise<any>;
    updateTask: (_boardId: any, taskId: any, newTask: any) => Promise<any>;
    removeTask: (id: any) => Promise<any>;
    deleteUserFromTasks: (userId: any) => Promise<void>;
    removeTaskByBoardId: (boardId: any) => Promise<void>;
};
