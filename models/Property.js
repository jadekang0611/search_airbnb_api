const mongoose = require('mongoose');

// Creat a schema
const PropertySchema = mongoose.Schema({
  name: {
    type: String,
  },
  listing_url: {
    type: String,
  },
  summary: {
    type: String,
  },
  property_type: {
    type: String,
  },
  room_type: {
    type: String,
  },
  bedrooms: {
    type: Number,
  },
  beds: {
    type: Number,
  },
  amenities: [
    {
      type: String,
    },
  ],
  price: {
    type: Number,
  },
  images: [{ type: String }],
});

module.exports = mongoose.model('Property', PropertySchema);
