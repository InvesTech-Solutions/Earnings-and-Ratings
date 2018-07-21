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
  const callbackQuery = (err, results) => {
    if (err) {
      console.log ('error');
    } else {
      console.log ('success');
    }
  };

  // populate rater table
  for (let i = 0; i < 100; i++) {
    let param = [];
    param.push(`${faker.name.firstName()} ${faker.name.lastName()}`);
    let query = 'INSERT INTO rater (name) VALUES (?)';
    db.query(query, param, callbackQuery);
  }

  // populate company table
  // need company name, estimated price, actual price, best summary, worst summary
  for (let i = 0; i < 100; i ++) {
    let param = [];
    param.push(faker.company.companyName());
    param.push(faker.commerce.price(100000000, 10000000000, 2, ''));
    param.push(faker.commerce.price(param[param.length - 1] * 0.85, param[param.length - 1] * 1.15, 2, ''));
    param.push(faker.lorem.paragraph());
    param.push(faker.lorem.paragraph());
    console.log(param)
    let query = 'INSERT INTO company (name, estimated, actual, best_summary, sell_summary) VALUES (?, ?, ?, ?, ?)';
    db.query(query, param, callbackQuery);
  };





  res.json('');
});

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});