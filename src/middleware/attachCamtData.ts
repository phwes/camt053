import { NextFunction, Request, Response } from "express";
import Camt053 from "../service/Camt053";

const attachCamtData =
  (camtData: Camt053) => (req: Request, res: Response, next: NextFunction) => {
    req.camtData = camtData;
    next();
  };

export default attachCamtData;
