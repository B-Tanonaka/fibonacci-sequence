import mysql from 'mysql2';
import Promise from 'bluebird';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fibonacci-sequence',
});

const db = Promise.promisifyAll(connection);

export default db;
