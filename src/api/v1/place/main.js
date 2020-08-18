const router = require('express').Router();
const getLonLat = require('./controller/getLonLat');
const getNear = require('./controller/getNear');
const getWithin = require('./controller/getWithin');

router.use('/getLonLat', getLonLat);
router.use('/near', getNear);
router.use('/within', getWithin);

module.exports = router;
