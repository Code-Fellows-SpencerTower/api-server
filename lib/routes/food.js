'use strict';

const express = require('express');
const cors = require('cors');

const router = express.Router();

const app = express();
app.use(express.json());
app.use(cors());

// node.js - will pull from index.js file automatically if in directory
const { FoodModel } = require('../model');
// const Food = require('../model/food.schema');

router.get('/food', read);
router.get('/food/:id', read);
router.post('/food', create);
router.put('/food/:id', update);
router.delete('/food/:id', remove);

async function read(req, res, next) {
  console.log('Reading from food route');

  let { id } = req.params;
  let foods;
  if (id) {
    foods = await FoodModel.findOne({ where: { id } });
  } else {
    foods = await FoodModel.findAll();
  }

  let resObj = {
    count: foods ? foods.length : 1,
    results: foods,
  };
  res.status(200).json(resObj);
}

async function create(req, res, next) {
  console.log('food create hit', req.query);
  const { name, category, amount } = req.query;
  const parsedAmount = parseInt(amount);
  console.log(parsedAmount);
  try {
    const newFood = await FoodModel.create({ name, category, amount: parsedAmount });
    console.log('newFood: ', newFood);
    res.send(newFood);
  } catch (err) {
    console.log(err);
  }
}

async function update(req, res, next) {
  let { id } = req.params;
  let newFood = req.body;
  let foodToUpdate = await FoodModel.findByPk(id);

  foodToUpdate.set(newFood);
  await foodToUpdate.save();
  res.status(200).send(foodToUpdate);
}

async function remove(req, res, next) {
  try {
    console.log('Remove function hit');
    let { id } = req.params;
    if (id) {

      const destroyedId = await FoodModel.destroy({ where: { id } });
      res.sendStatus(200).send(destroyedId);
    } else {
      res.sendStatus(400).send('No ID found');
    }
  }
  catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
}

module.exports = router;