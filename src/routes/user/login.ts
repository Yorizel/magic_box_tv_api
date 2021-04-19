import express, { NextFunction, Response } from 'express';
import UserController from '../../controller/UserController';
import globalCatch from '../../utils/globalCatcher';
import Token from '../../services/token';
import multer from 'multer';
import { Req } from '../../controller/AbstractController';

const upload = multer();

const router = express.Router();

const create = globalCatch(
  async (req: Req, res: Response, next: NextFunction) =>
    await UserController.create(req, res, next)
);
const createToken = globalCatch(
  async (req: Req, res: Response) => await Token.create(req, res)
);
const find = globalCatch(
  async (req: Req, res: Response, next: NextFunction) =>
    await UserController.find(req, res, next)
);
const update = globalCatch(
  async (req: Req, res: Response, next: NextFunction) =>
    await UserController.update(req, res, next)
);

router
  .post('/public/users/signUp', create)
  .post('/public/users/signIn', find, createToken)
  .put('/public/users/:id', upload.any(), update);
export default router;
