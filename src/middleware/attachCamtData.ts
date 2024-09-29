import { NextFunction, Request, Response } from "express";

const attachCamtData =
  (camtData: any) => (req: Request, res: Response, next: NextFunction) => {
    req.camtData = camtData;
    next();
  };

export default attachCamtData;
