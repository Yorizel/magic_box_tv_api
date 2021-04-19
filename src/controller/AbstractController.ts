import express, { Response, NextFunction } from 'express';
import { Prisma, PrismaClient } from '../../prisma/client';
import Bucket from '../services/bucket';
interface Avatar {
  id: number;
  key: string;
  url: string;
}
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  avatar?: Avatar;
  profile: Array<any>;
}
interface genericRequest {
  user: User;
  files: Array<any>;
  userId: string | object;
}

export type Req = express.Request & genericRequest;

export class AbstractController {
  public prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    'log' extends keyof Prisma.PrismaClientOptions
      ? Prisma.PrismaClientOptions['log'] extends Array<
          Prisma.LogLevel | Prisma.LogDefinition
        >
        ? Prisma.GetEvents<Prisma.PrismaClientOptions['log']>
        : never
      : never,
    'rejectOnNotFound' extends keyof Prisma.PrismaClientOptions
      ? Prisma.PrismaClientOptions['rejectOnNotFound']
      : false
  >;

  public bucket;

  constructor(prismaService = new PrismaClient(), bucketService = Bucket) {
    this.prisma = prismaService;
    this.bucket = bucketService;
  }

  async index(req: Req, res: Response, next: NextFunction): Promise<any> {}

  async find(req: Req, res: Response, next: NextFunction): Promise<any> {}

  async create(req: Req, res: Response, next: NextFunction): Promise<any> {}

  async delete(
    req: Req,
    res: express.Response,
    next: NextFunction
  ): Promise<any> {}

  async update(req: Req, res: Response, next: NextFunction): Promise<any> {}
}
