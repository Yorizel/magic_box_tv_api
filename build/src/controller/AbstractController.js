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
exports.AbstractController = void 0;
const prisma_1 = require("prisma");
const bucket_1 = __importDefault(require("src/services/bucket"));
class AbstractController {
    constructor(prismaService = new prisma_1.PrismaClient(), bucketService = bucket_1.default) {
        this.prisma = prismaService;
        this.bucket = bucketService;
    }
    index(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    find(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.AbstractController = AbstractController;
