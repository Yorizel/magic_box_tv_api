import express, { Response, NextFunction } from 'express';
import { Prisma, PrismaClient } from '@prisma/index';
import Bucket from '@src/services/bucket';

interface Avatar {
  id: number;
  key: string;
  url: string;
}
interface User {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  userAvatar?: Avatar | null;
  profile: Array<any>;
}
export interface genericRequest extends express.Request {
  req: import('C:/Users/manoe/Documents/Projetos/MagibBox-Typescript/back-end/prisma/client/index').users;
  user: User;
  files: Array<any>;
  userId: string | object;
}

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

  async index(
    req: genericRequest,
    res: Response,
    next: NextFunction
  ): Promise<any> {}

  async find(
    req: genericRequest,
    res: Response,
    next: NextFunction
  ): Promise<any> {}

  async create(
    req: genericRequest,
    res: Response,
    next: NextFunction
  ): Promise<any> {}

  async delete(
    req: genericRequest,
    res: express.Response,
    next: NextFunction
  ): Promise<any> {}

  async update(
    req: genericRequest,
    res: Response,
    next: NextFunction
  ): Promise<any> {}
}
