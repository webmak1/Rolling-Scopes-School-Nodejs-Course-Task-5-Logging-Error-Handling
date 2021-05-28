interface ITask {
    id: string;
    title: string;
    order: string;
    description: string;
    userId: string;
    boardId: string;
    columnId: string;
}
/**
 *  ### Class to create a Task object
 */
export declare class Task implements ITask {
    id: string;
    title: string;
    order: string;
    description: string;
    userId: string;
    boardId: string;
    columnId: string;
    /**
     *
     * @param {Object} Task - Task
     */
    constructor({ title, order, description, userId, boardId, columnId }: {
        title: any;
        order: any;
        description: any;
        userId: any;
        boardId: any;
        columnId: any;
    });
    /**
     * ### Return Task public data
     * @param {Task} task - Task
     * @returns {Task}
     */
    static toResponse(task: any): {
        id: any;
        title: any;
        order: any;
        description: any;
        userId: any;
        boardId: any;
        columnId: any;
    };
}
export {};
