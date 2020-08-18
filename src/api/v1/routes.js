const express = require('express');
const router = express.Router();

const place = require('./place/main');

router.use('/place', place);

module.exports = router;
