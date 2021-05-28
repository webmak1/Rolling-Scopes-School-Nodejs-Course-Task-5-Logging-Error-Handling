interface IBoard {
    id: string;
    title: string;
    columns: string;
}
/**
 *  ### Class to create a Board object
 */
export declare class Board implements IBoard {
    id: string;
    title: string;
    columns: string;
    /**
     *
     * @param {Object} Board - Board
     */
    constructor({ title, columns }: {
        title: any;
        columns: any;
    });
    /**
     * ### Return Board public data
     * @property {Function} toResponse - Returns Board public data
     * @param {Board} board - Board
     * @returns { Board} - Board
     */
    static toResponse(board: any): {
        id: any;
        title: any;
        columns: any;
    };
}
export {};
