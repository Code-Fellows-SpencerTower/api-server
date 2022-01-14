'use strict';

// connected instance of sequelize
// cant bring in Sequelize and create a new instance here b/c it is a singleton - we are passing this instance in from models/index.js
const Food = (sequelize, DataTypes) => sequelize.define('Food', {
  // columns that go in the table
  name: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  amount: {
    // .INTEGER works for both sqlite and potgres dialects - two diff dialects for SQL
    type: DataTypes.INTEGER,
  },
});

// ID and timestamp columns will be put in SQL 'automagically'

module.exports = Food;