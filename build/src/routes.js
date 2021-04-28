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
const login_1 = __importDefault(require("@src/routes/user/login"));
const authentication_1 = __importDefault(require("@src/middlewares/authentication"));
const globalCatcher_1 = __importDefault(require("@src/utils/globalCatcher"));
const router = express_1.default.Router();
const verify = globalCatcher_1.default((req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield authentication_1.default.verify(req, res, next); }));
router.use(login_1.default).use(verify);
exports.default = router;
