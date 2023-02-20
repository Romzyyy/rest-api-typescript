import express, { Application, Request, Response, NextFunction, request } from 'express';

const app: Application = express();
const port: Number = 4000;

app.use('/health', (reg: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ status: '200', data: 'hello world' });
});

app.listen(port, () => console.log(`server is running on ${port}`));
