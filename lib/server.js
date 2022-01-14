'use strict';

const express = require('express');
const app = express();
const foodRoutes = require('./routes/food.js'); //import food routes
const clothesRoutes = require('./routes/book.js');

app.use(express.json());
app.use(foodRoutes); // use food routes - now part of app, can be accessed by other files that import app from server.js
app.use(clothesRoutes);







// allows us to deconstruct when requiring in other files
module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is running');
    });
  },
  app,
};