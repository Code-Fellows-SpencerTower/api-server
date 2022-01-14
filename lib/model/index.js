'use strict';

// Sequelize is a Constructor from the Sequelize library
// DataType = object that lets you define data types to be stored in SQL - SQL has its own specific data types
const { Sequelize, DataTypes } = require('sequelize');
// Heroku will do this automatically:
const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory';

// foodSchema is a function
const foodSchema = require('./food.schema.js');

// create connection instance singleton - initialize db
let db = new Sequelize(POSTGRES_URI); // takes string, connects us to a running db
// string will change in production - 'squlite' only for testing/development environments
// like a URL - points to something running
// protuction: postgresql://localhost:5432@username:password/dbname

// can perform any CRUD we want on our Food table
const FoodModel = foodSchema(db, DataTypes);

// can use 'sqlite:' if just using in testing / development environment

module.exports = {
  db,
  FoodModel,
};