import { Request, Response } from "express";

export const ApiResponse = {
  success<T, M = null>(
    res: Response,
    statusCode: number,
    message = "success",
    data?: T,
    meta?: M
  ) {
    return res.status(statusCode).json({
      status: "success",
      message,
      data,
      meta,
    });
  },
  pageNotFound(req: Request, res: Response) {
    return res.status(404).json({
      status: "error",
      message: `${req.originalUrl} not found`,
    });
  },
};
