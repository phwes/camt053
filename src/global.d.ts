import { Request } from "express";
import Camt053 from "./service/Camt053";

declare global {
  namespace Express {
    interface Request {
      camtData: Camt053;
    }
  }
}
