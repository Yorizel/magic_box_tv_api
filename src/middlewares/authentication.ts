import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { genericRequest } from '../controller/AbstractController';
import { NextFunction, Response } from 'express';
import { ErrorHandler } from '../utils/errorHandler';

dotenv.config();
class Authentication {
  async verify(req: genericRequest, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (authorization != null) {
      req.userId = await jwt.verify(authorization, `${process.env.JWT_SECRET}`);
      next();
    }
    throw new ErrorHandler(500, 'Token invalido');
  }
}

export default new Authentication();
