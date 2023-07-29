import { RowDataPacket } from 'mysql2';
import { DataRow } from '../interfaces';
import db from './database';

export const getMaxValue = async () => {
  const q = 'SELECT n, current, previous FROM fibonacci WHERE n = (SELECT MAX(N) FROM fibonacci)';
  // RowDataPacket typing from StackOverflow
  return db.query<RowDataPacket[]>(q);
};

export const getValueRange = async (start: string, end: string) => {
  const q = `SELECT n, current, previous FROM fibonacci WHERE n BETWEEN ${start} and ${end}`;
  const [rows] = await db.query<RowDataPacket[]>(q);
  return rows.map((row) => (row.current));
};

export const saveValue = async (values: number[][]) => {
  const q = 'INSERT INTO fibonacci (n, current, previous) VALUES ?';
  return db.query(q, [values]);
};
