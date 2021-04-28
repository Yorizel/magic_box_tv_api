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
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractController_1 = require("./AbstractController");
const errorHandler_1 = require("@src/utils/errorHandler");
class UserController extends AbstractController_1.AbstractController {
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, email, password } = req.body;
            try {
                const user = yield this.prisma.users.create({
                    data: {
                        email,
                        password,
                        firstName,
                        lastName
                    }
                });
                res.json({ response: user, message: 'Conta criada com sucesso' });
            }
            catch (e) {
                switch (e.code) {
                    case 'P2002':
                        throw new errorHandler_1.ErrorHandler(500, `${e.meta.target[0]} já cadastrado`);
                    default:
                        throw new errorHandler_1.ErrorHandler(500, `Erro ao efetuar cadastro`);
                }
            }
        });
    }
    find(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const user = yield this.prisma.users.findFirst({
                    where: {
                        email,
                        password
                    },
                    include: {
                        profile: true,
                        avatar: true
                    }
                });
                if (user != null) {
                    req.user = user;
                    return next();
                }
                return new errorHandler_1.ErrorHandler(500, 'Valores invalidos no campo');
            }
            catch (e) {
                throw new errorHandler_1.ErrorHandler(500, 'Erro ao efetuar login');
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { files } = req;
            const { email, password, role } = req.body;
            const { id } = req.params;
            try {
                const image = yield this.bucket.createImage({
                    file: files[0]
                });
                const { id: imageId } = yield this.prisma.userAvatar.create({
                    data: { key: image.key, url: image.Location }
                });
                const user = yield this.prisma.users.update({
                    where: { id },
                    data: {
                        email,
                        password,
                        role,
                        avatarId: imageId
                    }
                });
                res.json({ response: user }).status(200);
            }
            catch (e) {
                throw new errorHandler_1.ErrorHandler(500, `${e}`);
            }
        });
    }
}
exports.default = new UserController();
