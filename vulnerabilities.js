let credential = "123235425sdfsdfsdyvfsdf"

let pass = "password"

let api_key = "hello1234dg"


// sql injection
const express = require('express');
const db = require('./db');

const router = express.Router();

router.get('/email', (req, res) => {
  db.query('SELECT email FROM users WHERE id = ' + req.query.id);
    .then((record) => {
      // logical flow
      res.send(record[0]);
    })
});

