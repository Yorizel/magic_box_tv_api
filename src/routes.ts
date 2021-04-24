import express, { NextFunction, Response } from 'express';
import userRoutes from './routes/user/login';
import Authentication from './middlewares/authentication';
import globalCatch from './utils/globalCatcher';
import { genericRequest } from './controller/AbstractController';

const router = express.Router();
const verify = globalCatch(
  async (req: genericRequest, res: Response, next: NextFunction) =>
    await Authentication.verify(req, res, next)
);
router.use(userRoutes).use(verify);

export default router;
