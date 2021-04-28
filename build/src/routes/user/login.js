"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("@src/controller/UserController"));
const globalCatcher_1 = __importDefault(require("@src/utils/globalCatcher"));
const token_1 = __importDefault(require("@src/services/token"));
const multer_1 = __importDefault(require("multer"));
const upload = multer_1.default();
const router = express_1.default.Router();
const create = globalCatcher_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield UserController_1.default.create(req, res, next); }));
const createToken = globalCatcher_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield token_1.default.create(req, res); }));
const find = globalCatcher_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield UserController_1.default.find(req, res, next); }));
const update = globalCatcher_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield UserController_1.default.update(req, res, next); }));
router
    .post('/public/users/signUp', create)
    .post('/public/users/signIn', find, createToken)
    .put('/public/users/:id', upload.any(), update);
exports.default = router;
