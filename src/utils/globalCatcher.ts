import express from 'express';

export default (func: Function) => (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  func(req, res, next).catch(next);
};
