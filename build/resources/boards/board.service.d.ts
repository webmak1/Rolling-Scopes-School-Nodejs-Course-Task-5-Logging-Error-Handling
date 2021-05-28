export declare const boardsService: {
    getAll: () => Promise<{
        id: any;
        title: any;
        columns: any;
    }[]>;
    get: (req: any) => Promise<{
        id: any;
        title: any;
        columns: any;
    }>;
    create: (req: any) => Promise<{
        id: any;
        title: any;
        columns: any;
    }>;
    remove: (req: any) => Promise<{
        id: any;
        title: any;
        columns: any;
    }>;
    update: (req: any) => Promise<{
        id: any;
        title: any;
        columns: any;
    }>;
};
