import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { handleError } from './utils/errorHandler';
import routes from './routes';
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(routes);

app.use((err: any, req: Request, res: Response, next: NextFunction) =>
  handleError(err, res)
);
export default app;
