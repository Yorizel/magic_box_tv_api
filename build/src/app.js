"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = require("@src/utils/errorHandler");
const routes_1 = __importDefault(require("@src/routes"));
const app = express_1.default();
app.use(cors_1.default({ origin: '*' }));
app.use(express_1.default.json());
app.use(routes_1.default);
app.use((err, req, res, next) => errorHandler_1.handleError(err, res));
exports.default = app;
