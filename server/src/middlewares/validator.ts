import { NextFunction, Response, Request } from "express";
import { AnyZodObject } from "zod";
import { __dev__ } from "../constants";

export const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: object = {
        query: req.query,
        body: req.body,
        params: req.params,
        headers: req.headers,
      };

      __dev__ && logger.log(data);

      const res = await schema.parseAsync(data);
      req.query = res.query;
      req.body = res.body;
      req.params = res.params;
      req.headers = res.headers;
      return next();
    } catch (err: any) {
      err.status = 422;
      next(err);
    }
  };
