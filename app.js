const express = require('express');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv/config');

const bodyParser = require('body-parser');

const propertiesRoute = require('./routes/properties');

app.get('/', (req, res, next) => {
  res.send('Hello world!');
});



// Route Middlewares
app.use('/properties', propertiesRoute);

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTIONS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to DB!');
  }
);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`My app is running on port ${PORT}`);
});
