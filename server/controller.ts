import { RequestHandler } from 'express';
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

const calculateData: RequestHandler = async (req, res) => {
  try {
    // Find the highest current value
    const n = req.query.n as string;
    const data = await getMaxValue();
    const highestVal = data[0][0] || { n: 0, current: 1, previous: 0 };

    // If values up to the input are already in the database, return up to that number
    if (Number(n) < highestVal.n) {
      const response = await getValueRange('0', n);
      res.status(200).send(response);
    // If they are not, find the highest n and calculate up to the input
    } else {
      const existingData = await getValueRange('0', highestVal.n);
      const newData = calculateFibonacci(
        Number(n) - highestVal.n,
        true,
        highestVal.previous,
        highestVal.current,
      );
      const mergedData = existingData.concat(newData);
      // Writing new data to database
      const startingN = Number(highestVal.n) + 1;
      const newDatabaseEntries = newData.map((currVal, i) => {
        const currN = startingN + i;
        let prevVal = newData[i - 1];
        if (i === 0) { prevVal = existingData[existingData.length - 1]; }
        return [currN, currVal, prevVal];
      });
      saveValue(newDatabaseEntries);
      res.status(200).send(mergedData);
    }
  } catch (err) {
    res.status(502).send(err);
  }
};

export default calculateData;
