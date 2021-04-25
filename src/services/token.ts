import jwt from 'jsonwebtoken';
import { ErrorHandler } from 'src/utils/errorHandler';
import dotenv from 'dotenv';
import { genericRequest } from 'src/controller/AbstractController';
import { Response } from 'express';

dotenv.config();
class Token {
  async create(req: genericRequest, res: Response) {
    try {
      const { id, firstName, lastName, role, userAvatar, profile } = req.user;

      const token = await jwt.sign(
        { id, firstName, lastName },
        `${process.env.JWT_SECRET}`
      );

      res.status(200).json({
        token,
        id,
        firstName,
        lastName,
        role,
        userAvatar,
        profile
      });
    } catch (e) {
      throw new ErrorHandler(500, `erro ao criar token, error:${e}`);
    }
  }
}

export default new Token();
