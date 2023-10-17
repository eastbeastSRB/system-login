import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

const appContext =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body, 'BODY IN CONTEXT')
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      console.log(true);
      next();
    } catch (error: any) {
      console.log(false, error);
      return res.status(400).send(error.errors);
    }
  };

export default appContext;
