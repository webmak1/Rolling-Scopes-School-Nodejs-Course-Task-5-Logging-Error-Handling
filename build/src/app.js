"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = require("express");
const path = require("path");
const path_1 = require("path");
const boardRouter = require("resources/boards/board.router");
const taskRouter = require("resources/tasks/task.router");
const userRouter = require("resources/users/user.router");
const swaggerUI = require("swagger-ui-express");
const url_1 = require("url");
const yamljs_1 = require("yamljs");
const __dirname = path_1.dirname(url_1.fileURLToPath(import.meta.url));
const app = express_1.default();
exports.app = app;
const swaggerDocument = yamljs_1.default.load(path.join(__dirname, '../doc/api.yaml'));
app.use(express_1.default.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/:boardId/tasks', taskRouter);
app.use('/tasks', taskRouter);
app.use((err, _req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
    next();
});
