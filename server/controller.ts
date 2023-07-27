import { RequestHandler } from 'express';
import { getAllNumbers, getOneFromN, saveOneValue } from './model';

export const getAll: RequestHandler = (req, res) => {
  getAllNumbers()
    .then((data) => { res.status(200).send(data); })
    .catch((err: unknown) => { res.status(502).send(err); });
};

export const getValueAtN: RequestHandler = (req, res) => {
  getOneFromN(req.params.number)
    .then((data) => res.status(200).send(data))
    .catch((err: unknown) => res.status(502).send(err));
};

export const postOneValue: RequestHandler = (req, res) => {
  saveOneValue(req.body)
    .then(() => { res.status(201).send(); })
    .catch((err: unknown) => { res.status(422).send(err); });
};
