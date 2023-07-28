import { getMaxN, getValueAtN, postValues } from './controller';

const router = require('express').Router();

router.get('/fibonacci/maxn', getMaxN);
router.get('/fibonacci', getValueAtN);
router.post('/fibonacci', postValues);

export default router;
