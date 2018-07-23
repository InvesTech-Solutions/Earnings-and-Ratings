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

app.get('/createExample', (req, res) => {
  // some constants
  let output;
  const quarters = ['Q42016', 'Q12017', 'Q22017', 'Q32017', 'Q42017', 'Q12018', 'Q22018'];
  const ratingState = ['Buy', 'Hold', 'Sell'];
  const callbackQuery = (err, results) => {
    if (err) {
      console.log ('error');
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
    let val;
    let quartersEst = [];
    let quartersAct = [];
    param.push(faker.company.companyName());
    // estimated estimated array to be stored as [date, amount, ...] and turned JSON
    quarters.forEach((element) => {   
      if (val === undefined) {
        val = faker.commerce.price(100000000, 10000000000, 2, '');
      } else {
        val = faker.commerce.price(val * 0.85, val * 1.15, 2, '');
      }
      quartersEst.push(element);
      quartersEst.push(val);
    });
    param.push(JSON.stringify(quartersEst));

    // likewise for actual array
    quarters.forEach((element, index) => {
      val = faker.commerce.price(Number(quartersEst[index * 2 + 1]) * 0.85, Number(quartersEst[index * 2 + 1]) * 1.15, 2, '');
      quartersAct.push(element);
      quartersAct.push(val);
    });
    param.push(JSON.stringify(quartersAct));
    param.push(faker.lorem.paragraph());
    param.push(faker.lorem.paragraph());
    // console.log(param);
    let query = 'INSERT INTO company (name, estimated, actual, best_summary, sell_summary) VALUES (?, ?, ?, ?, ?)';
    db.query(query, param, callbackQuery);
  };
  // get list of all companies in the database
  // and upon acquring, create rating table within the callback
  let companyList;
  let companyLength;
  let raterList;
  let raterLength;
  let selectedCompany;
  let selectedCompIndex;
  let selectedRater;
  let selectedRaterIndex;
  const companyQuery = 'SELECT name from company';
  const raterQuery = 'SELECT name from rater';

  // nested db.queries to get list of companies and raters, which will be used to create ratings table
  db.query(companyQuery, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      companyList = data.map((element) => {
        return element.name;
      });
      companyLength = companyList.length - 1;

      db.query(raterQuery, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          raterList = data.map((element) => {
            return element.name;
          });
          raterLength = raterList.length - 1;

          // populate rating table
          // need raterId from rater, companyId from company, and rating
          for (let i = 0; i < 3000; i ++) {
            let param = [];
            let rating = ratingState[Math.floor(2.99 * Math.random())];
            let query = 'INSERT INTO rating (raterId, companyId, rating) VALUE ((SELECT id FROM rater WHERE name = ? limit 1), (SELECT id FROM company WHERE name = ? limit 1), ?)';
            selectedCompIndex = Math.round(companyLength * Math.random());
            selectedCompany = companyList[selectedCompIndex];
            selectedRaterIndex = Math.round(raterLength * Math.random());
            selectedRater = raterList[selectedRaterIndex];
            param = [selectedRater, selectedCompany, rating];
            db.query(query, param, callbackQuery);
          }
        };
      });
    };
  });
  res.json('dfdf');
});

app.get('/getExample', (req, res) => {
  // now organize data from database and send it back to the client;
  // need to provide
  // Id :  ….. , Name : ……. , Raters : [{ id: …. , rating state: ….. }, {....}, ..] , Estimated : [{ date : .… , value : …. }, {....}, ..] , Actual : [{date : …. , value : …. }, {....}, ..] , Best Summary : …. , Sell Summary : ….
  let object = {};
  let companyList;
  let selected;
  let index;

  db.query('SELECT * from company', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      index = Math.round(data.length * Math.random() - 1);
      // companyList = data.map((element) => {
      //   return element.name;
      // });
      // selectedCompany = companyList[Math.round(companyList.length * Math.random()) - 1];
      selected = data[index];
      object.id = selected.id;
      object.name = selected.name;
      object.esimated = selected.estimated;
      object.actual = selected.actual;
      object.bestsummary = selected.best_summary;
      object.sellsummary = selected.sell_summary;

      // now get raters array [rating state, rating state]
      db.query('select rating from rating where companyId = ?', [object.id], (err, data) => {
        if (err) {
          console.log(err);
        } else {
          object.raters = data.map((element) => {
            return element.rating;
          });
          res.json(object);
        }
      });
    }
  });

  // for (let i = 0; i < companyList.length; i++) {
  //   object = {};
  //   object.name = companyList[i];
  //   db.query('select id from company where name = ?', [object.name], (err, data) => {
  //     if(err) { console.log(err) } else {
  //       object.id = data;
  //       response.push(object);
  //     }
  //   });
  // };
});

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});