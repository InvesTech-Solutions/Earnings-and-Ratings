const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/db');
const faker = require('faker');

let port = 3036;
let app = express();

app.use(express.static(__dirname + '/../client/dist/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/fake', (req, res) => {
  let output;

  // populate rater table
  for (let i = 0; i < 100; i++) {
    let param = [];
    param.push(`${faker.name.firstName()} ${faker.name.lastName()}`);
    let query = 'INSERT INTO rater (name) VALUES (?)';

    let callbackQuery = function(err, results) {
      if (err) {
        console.log ('error');
      } else {
        console.log ('success');
      }
    };

    db.query(query, param, callbackQuery);
  }

  res.json('');
});

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});