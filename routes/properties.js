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

module.exports = router;
