const router = require('express').Router();
const Place = require('../../../../models/Place');

const getWithin = async (req, res, next) => {
  try {
    //get geomentry from request body
    const geomentry = req.body.geomentry;

    // TODO
    // Remove console log on prod
    console.log(JSON.stringify(geomentry));

    const places = await Place.find({
      location: {
        $geoWithin: {
          $geometry: geomentry,
        },
      },
    });
    console.log(places.length);
    res.json({ result: { places } });
  } catch (error) {
    next(error);
  }
};

router.post('/', getWithin);
module.exports = router;

/*
const sampleGeomentryJson = {
  "type": "Polygon",
  "coordinates": [
    [
      [80.285555, 13.09582],
      [80.28916, 13.09559],
      [80.288388, 13.088087],
      [80.284246, 13.087951],
      [80.285555, 13.09582]
    ]
  ]
}

const sampleQuery = {
  location: {
    $geoWithin: {
      $geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [80.285555, 13.09582],
            [80.28916, 13.09559],
            [80.288388, 13.088087],
            [80.284246, 13.087951],
            [80.285555, 13.09582],
          ],
        ],
      },
    },
  },
  placeCategory: 'school',
};

var samplePolygon01 = [
  [80.284946, 13.105408],
  [80.284367, 13.098825],
  [80.294195, 13.097299],
  [80.296276, 13.103903],
  [80.284946, 13.105408]
]

var samplePolygon02 = [
  [80.285555, 13.09582],
  [80.28916, 13.09559],
  [80.288388, 13.088087],
  [80.284246, 13.087951],
  [80.285555, 13.09582]
]
*/
