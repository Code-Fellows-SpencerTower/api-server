'use strict';

// connected instance of sequelize
// cant bring in Sequelize and create a new instance here b/c it is a singleton - we are passing this instance in from models/index.js
const Book = (sequelize, DataTypes) => sequelize.define('Book', {
  // columns that go in the table
  title: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
  pages: {
    // .INTEGER works for both sqlite and potgres dialects - two diff dialects for SQL
    type: DataTypes.INTEGER,
  },
});

// ID and timestamp columns will be put in SQL 'automagically'

module.exports = Book;