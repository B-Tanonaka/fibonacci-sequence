import { RequestHandler } from 'express';
import { getMaxValue, getValueRange, saveValue } from './model';

// Calculate Fibonacci sequence helper function
const calculateFibonacci = (
  input: number,
  dataExists: boolean,
  prev: number = 0,
  curr: number = 1,
) => {
  const arr = [];
  while (input >= 0) {
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
    // Find the highest current value and checking existing data
    const n = req.query.n as string;
    const data = await getMaxValue();
    const highestVal = data[0][0] || { n: 0, current: 1, previous: 0 };
    const existingData = await getValueRange('0', highestVal.n);
    // Declaring variables for the writeToDatabase function
    let newData: number[] = [];
    let startingN = 0;

    // Writing new data to database function, converted for loop to map with help from ChatGPT
    const writeToDatabase = () => {
      if (highestVal.n > 0) { startingN = Number(highestVal.n) + 1; }
      const newDatabaseEntries = newData.map((currVal, i) => {
        const currN = startingN + i;
        let prevVal = newData[i - 1];
        if (i === 0) { prevVal = existingData[existingData.length - 1]; }
        return [currN, currVal, prevVal];
      });
      saveValue(newDatabaseEntries);
    };
    // If there are no entries in the database, calculate new values
    if (highestVal.n === 0) {
      newData = calculateFibonacci(Number(n), false, 0, 1);
      writeToDatabase();
      res.status(200).send(newData);
    // If values up to the input are already in the database, return up to that number
    } else if (Number(n) <= highestVal.n) {
      const response = await getValueRange('0', n);
      res.status(200).send(response);
    // If there are current entries in the database find the highest n and calculate up to the input
    } else {
      newData = calculateFibonacci(
        Number(n) - highestVal.n - 1,
        true,
        highestVal.previous,
        highestVal.current,
      );
      const mergedData = existingData.concat(newData);
      res.status(200).send(mergedData);
      writeToDatabase();
    }
  } catch (err) {
    res.status(502).send(err);
  }
};

export default calculateData;
