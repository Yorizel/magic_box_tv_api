import express, { NextFunction, Response } from 'express';
import userRoutes from '@src/routes/user/login';
import Authentication from '@src/middlewares/authentication';
import globalCatch from '@src/utils/globalCatcher';
import { genericRequest } from '@controller/AbstractController';

const router = express.Router();
const verify = globalCatch(
  async (req: genericRequest, res: Response, next: NextFunction) =>
    await Authentication.verify(req, res, next)
);
router.use(userRoutes).use(verify);

export default router;
