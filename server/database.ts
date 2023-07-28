import mysql from 'mysql2/promise';
import Promise from 'bluebird';

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fibonacci-sequence',
});

const db = Promise.promisifyAll(connection);

db.query(
  `CREATE TABLE IF NOT EXISTS fibonacci (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  n BIGINT UNIQUE,
  current BIGINT,
  previous BIGINT
  )`,
);

export default db;
