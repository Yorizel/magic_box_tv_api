import express, { NextFunction, Response } from 'express';
import UserController from '@src/controller/UserController';
import globalCatch from '@src/utils/globalCatcher';
import Token from '@src/services/token';
import multer from 'multer';
import { genericRequest } from '@src/controller/AbstractController';

const upload = multer();

const router = express.Router();

const create = globalCatch(
  async (req: genericRequest, res: Response, next: NextFunction) =>
    await UserController.create(req, res, next)
);
const createToken = globalCatch(
  async (req: genericRequest, res: Response) => await Token.create(req, res)
);
const find = globalCatch(
  async (req: genericRequest, res: Response, next: NextFunction) =>
    await UserController.find(req, res, next)
);
const update = globalCatch(
  async (req: genericRequest, res: Response, next: NextFunction) =>
    await UserController.update(req, res, next)
);

router
  .post('/public/users/signUp', create)
  .post('/public/users/signIn', find, createToken)
  .put('/public/users/:id', upload.any(), update);
export default router;
