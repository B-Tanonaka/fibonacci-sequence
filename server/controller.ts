import { RequestHandler } from 'express';
import { DataRow } from '../interfaces';
import { getMaxValue, getValueRange, saveValue } from './model';

const calculateFibonacci = (
  input: number,
  dataExists: boolean,
  prev: number = 0,
  curr: number = 1,
) => {
  const arr = [];
  if (curr === 1) { arr.push(0); }
  if (curr <= 2) { arr.push(1); }
  while (input > 0) {
    const next = prev + curr;
    if (dataExists) {
      arr.push(next);
    } else {
      arr.push(prev);
    }
    prev = curr;
    curr = next;
    input -= 1;
  }
  return arr;
};

export const calculateData: RequestHandler = (req, res) => {
  try {
    // Find the highest current value
    const n = req.query.n as string;
    const data = await getMaxValue();
    const highestVal = data[0][0] || { n: 0, current: 1, previous: 0 };
  } catch (err) {
    res.status(502).send(err);
  }
};

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
