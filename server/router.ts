import { calculateData, getMaxN, getValueAtN, postValues } from './controller';

const router = require('express').Router();

router.get('/fibonacci/maxn', getMaxN);
router.get('/fibonacci', calculateData);
router.get('/fibonacci/n', getValueAtN);
router.post('/fibonacci', postValues);

export default router;
