'use strict';

const { start } = require('./lib/server.js');

// import db from model/index.js
const { db } = require('./lib/model');
const PORT = process.env.PORT || 3000;

// have to initialize to perform operations on db
db.sync()
  .then(() => start(PORT))
  .catch(err => console.log(err)); // creates and initializes tables before we start the server