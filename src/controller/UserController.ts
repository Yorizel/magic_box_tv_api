import { AbstractController, genericRequest } from './AbstractController';
import e from 'express';
import { ErrorHandler } from '@src/utils/errorHandler';

class UserController extends AbstractController {
  async create(req: genericRequest, res: e.Response, next: e.NextFunction) {
    const { firstName, lastName, email, password } = req.body;
    try {
      const user = await this.prisma.users.create({
        data: {
          email,
          password,
          firstName,
          lastName
        }
      });
      res.json({ response: user, message: 'Conta criada com sucesso' });
    } catch (e) {
      switch (e.code) {
        case 'P2002':
          throw new ErrorHandler(500, `${e.meta.target[0]} já cadastrado`);
        default:
          throw new ErrorHandler(500, `Erro ao efetuar cadastro`);
      }
    }
  }

  async find(req: genericRequest, res: e.Response, next: e.NextFunction) {
    const { email, password } = req.body;
    try {
      const user = await this.prisma.users.findFirst({
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
      return new ErrorHandler(500, 'Valores invalidos no campo');
    } catch (e) {
      throw new ErrorHandler(500, 'Erro ao efetuar login');
    }
  }

  async update(req: genericRequest, res: e.Response, next: e.NextFunction) {
    const { files } = req;
    const { email, password, role } = req.body;
    const { id } = req.params;

    try {
      const image = await this.bucket.createImage({
        file: files[0]
      });
      const { id: imageId } = await this.prisma.userAvatar.create({
        data: { key: image.key, url: image.Location }
      });
      const user = await this.prisma.users.update({
        where: { id },
        data: {
          email,
          password,
          role,
          avatarId: imageId
        }
      });
      res.json({ response: user }).status(200);
    } catch (e) {
      throw new ErrorHandler(500, `${e}`);
    }
  }
}
export default new UserController();
