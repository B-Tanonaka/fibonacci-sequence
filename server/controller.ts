import { RequestHandler } from 'express';
import { DataRow } from '../interfaces';
import { getMaxValue, getValueRange, saveValue } from './model';

export const getMaxN: RequestHandler = (req, res) => {
  getMaxValue()
    .then((data) => { res.status(200).send(data[0][0]); })
    .catch((err: unknown) => { res.status(502).send(err); });
};

export const getValueAtN: RequestHandler = (req, res) => {
  getValueRange(req.query.start as string, req.query.end as string)
    .then((data) => res.status(200).send(data[0]))
    .catch((err: unknown) => res.status(502).send(err));
};

export const postValues: RequestHandler = (req, res) => {
  // Inserting by mapping data idea is from ChatGPT
  const values = req.body.map((row: DataRow) => [row.n, row.current, row.previous]);
  saveValue(values)
    .then(() => { res.status(201).send('Input added sucessfully'); })
    .catch((err: unknown) => { res.status(422).send(err); });
};
