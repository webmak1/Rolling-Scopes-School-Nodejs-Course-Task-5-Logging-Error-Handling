"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv");
const path = require("path");
const path_1 = require("path");
const url_1 = require("url");
const __dirname = path_1.dirname(url_1.fileURLToPath(import.meta.url));
dotenv.config({
    path: path.join(__dirname, '../../.env'),
});
exports.config = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    AUTH_MODE: process.env.AUTH_MODE === 'true',
};
