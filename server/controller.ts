import { RequestHandler } from "express";
import { getAllNumbers, getOneFromN, saveOneNumber } from './model';

export const getAll: RequestHandler = (req, res) => {
  getAllNumbers()
    .then((data) => {res.status(200).send(data);})
    .catch((err: unknown) => { res.status(502).send(err)})
}