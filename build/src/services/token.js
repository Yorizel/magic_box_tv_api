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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errorHandler_1 = require("@src/utils/errorHandler");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Token {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, firstName, lastName, role, userAvatar, profile } = req.user;
                const token = yield jsonwebtoken_1.default.sign({ id, firstName, lastName }, `${process.env.JWT_SECRET}`);
                res.status(200).json({
                    token,
                    id,
                    firstName,
                    lastName,
                    role,
                    userAvatar,
                    profile
                });
            }
            catch (e) {
                throw new errorHandler_1.ErrorHandler(500, `erro ao criar token, error:${e}`);
            }
        });
    }
}
exports.default = new Token();
