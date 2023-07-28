import { RequestHandler } from 'express';
import { DataRow } from '../interfaces';
import { getMaxValue, getOneFromN, saveOneValue } from './model';

export const getMaxN: RequestHandler = (req, res) => {
  getMaxValue()
    .then((data) => { res.status(200).send(data); })
    .catch((err: unknown) => { res.status(502).send(err); });
};

export const getValueAtN: RequestHandler = (req, res) => {
  getOneFromN(req.query.start as string, req.query.end as string)
    .then((data) => res.status(200).send(data))
    .catch((err: unknown) => res.status(502).send(err));
};

export const postValues: RequestHandler = (req, res) => {
  const values = req.body.map((row: DataRow) => [row.n, row.current, row.previous]);
  saveOneValue(values)
    .then(() => { res.status(201).send('Input added sucessfully'); })
    .catch((err: unknown) => { res.status(422).send(err); });
};
