let credential = "123235425sdfsdfsdyvfsdf"

let password = "passP9)^11912413"

let pass = "password"


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

