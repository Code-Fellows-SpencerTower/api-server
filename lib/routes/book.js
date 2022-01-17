'use strict';

const express = require('express');

const router = express.Router();

const BookModel = require('../model');

router.get('/book', read);
router.get('/book/:id', read);
router.post('/book', create);
router.put('/book:id', update);
router.delete('/book:id', remove);

function read(req, res, next) {
  console.log('Reading from book route');
  res.status(200).send('working on it');
}

function create(req, res, next) {
  const newBook =
    res.send('working on it');
}

function update(req, res, next) {
  res.send('working on it');
}

function remove(req, res, next) {
  res.send('working on it');
}

module.exports = router;