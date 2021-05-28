export declare const DBBoards: {
    getAllBoards: () => Promise<any[]>;
    getBoard: (id: any) => Promise<any>;
    createBoard: (board: any) => Promise<any>;
    updateBoard: (id: any, newBoard: any) => Promise<any>;
    removeBoard: (boardId: any) => Promise<any>;
};
