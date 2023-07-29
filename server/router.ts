import calculateData from './controller';

const router = require('express').Router();

router.get('/fibonacci', calculateData);

export default router;
