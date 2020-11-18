const express = require('express');
const router = express.Router();

const Property = require('../models/Property');

// Get all properties
router.get('/', async (req, res, next) => {
  try {
    const listingAndReviews = await Property.find().limit(10);
    res.status(200).json(listingAndReviews);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
});

// GET properties based on filters

router.get('/search', async (req, res, next) => {
  const filters = {...req.query};

  try {
    const listingAndReviews = await Property.find(filters).limit(5);
      if (listingAndReviews.length === 0) {
        return res.status(404).json({
        status: 'failure',
        message: `No properties are found with ${filters}`
      });
    }
    console.log(filters)
    res.status(200).json(listingAndReviews);

  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
});

// PUT update/remove property in category list 


module.exports = router;
