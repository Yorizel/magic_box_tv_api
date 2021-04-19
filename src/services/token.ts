import jwt from 'jsonwebtoken';
import { ErrorHandler } from '../utils/errorHandler';
import dotenv from 'dotenv';
import { Req } from '../controller/AbstractController';
import { Response } from 'express';
dotenv.config();
class Token {
  async create(req: Req, res: Response) {
    try {
      const { id, firstName, lastName, role, avatar, profile } = req.user;

      const token = await jwt.sign(
        { id, firstName, lastName },
        `${process.env.JWT_SECRET}`
      );

      res.status(200).json({
        token,
        id,
        firstName: firstName,
        lastName: lastName,
        role,
        avatar,
        profile
      });
    } catch (e) {
      throw new ErrorHandler(500, `erro ao criar token, error:${e}`);
    }
  }
}

export default new Token();
