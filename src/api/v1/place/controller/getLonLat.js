const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const longitude = req.query.lng;
    const latitude = req.query.lat;
    console.log({ longitude, latitude });
    res.send({ longitude, latitude });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
