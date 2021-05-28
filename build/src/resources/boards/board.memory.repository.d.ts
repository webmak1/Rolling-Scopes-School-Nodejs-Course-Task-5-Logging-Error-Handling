export declare const boardsRepo: {
    getAll: () => Promise<any[]>;
    get: (id: any) => Promise<any>;
    create: (board: any) => Promise<any>;
    update: (id: any, newBoard: any) => Promise<any>;
    remove: (boardId: any) => Promise<any>;
};
