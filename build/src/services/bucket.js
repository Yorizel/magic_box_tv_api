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
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const errorHandler_1 = require("src/utils/errorHandler");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Bucket {
    constructor({ bucketService = new aws_sdk_1.default.S3({
        accessKeyId: process.env.AWS_ACESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }) }) {
        this.bucket = bucketService;
    }
    paramsFactory({ file }) {
        return {
            Bucket: process.env.BUCKET_NAME,
            Key: this.generateKey(),
            Body: file.buffer,
            ACL: 'public-read',
            ContentType: file.mimetype
        };
    }
    createImage({ file = { buffer: Buffer, mimetype: String } }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = this.paramsFactory({ file });
                return yield this.bucket.upload(params).promise();
            }
            catch (e) {
                console.log(e);
                throw new errorHandler_1.ErrorHandler(500, 'Erro ao adicionar imagem');
            }
        });
    }
    deleteImage({ key = String }) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bucket.deleteObject({
                Bucket: process.env.BUCKET_NAME,
                Key: key
            });
        });
    }
    generateKey() {
        return Date.now().toString();
    }
}
exports.default = new Bucket({});
