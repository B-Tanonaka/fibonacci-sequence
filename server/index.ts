import express from 'express';
import path from 'path';
import cors from 'cors';
import { getAll, getN, postNum } from './controller';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/fibonacci', getAll);
app.get('/fibonacci', getN);
app.post('/fibonacci', postNum);

app.listen(PORT, () => { console.log(`Server active on port ${PORT}`); });
