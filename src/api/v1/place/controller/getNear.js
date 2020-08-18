const router = require('express').Router();
const Place = require('../../../../models/Place');

const getNear = async (req, res, next) => {
  try {
    const longitude = Number(req.query.lng);
    const latitude = Number(req.query.lat);
    const radius = Number(req.query.radius);
    const category = req.query.category;

    // TODO
    // Check for missing query parameter
    // Remove console log on prod
    console.log({ longitude, latitude, radius, category });

    const places = await Place.find({
      placeCategory: category,
      location: {
        $near: {
          $geometry: { type: 'Point', coordinates: [longitude, latitude] },
          $maxDistance: radius,
        },
      },
    });

    console.log(places.length);

    res.json({ result: { places } });
  } catch (error) {
    next(error);
  }
};

router.get('/', getNear);

module.exports = router;
