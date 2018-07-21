const faker = require('faker');
// const db = require('./db');

// need to put in
// [name] -> rater
// [raterId, companyId, rating] -> rating
// [name, estimated, actual, best_summary, sell_summary] -> company

let ratingState = ['Buy', 'Hold', 'Sell'];
let quarters = ['Q42016', 'Q12017', 'Q22017', 'Q32017', 'Q42017', 'Q12018', 'Q22018'];
let data = [];

CREATE TABLE company (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  estimated VARCHAR(255) NOT NULL,
  actual VARCHAR(255) NOT NULL,
  best_summary VARCHAR(10000) NOT NULL,
  sell_summary VARCHAR(10000) NOT NULL,
  PRIMARY KEY (id)
);


// for (var i = 0; i < 100; i++) {
// 	var raterArray = [];
// 	var estimatedArray = [];
// 	var actualArray = [];
// 	var est = {};
// 	var act = {};

// 	quarters.forEach(function(element, index) {
// 		est.date = element;
// 		act.date = element;
// 		est.value = faker.commerce.price(100000000, 10000000000,  dec[2], symbol['']);
// 		act.value = est.value * (0.15 * Math.random() + 1)
// 		estimatedArray.push(est.slice());
// 		actualArray.push(est.slice());
// 	})

// 	for (var i = 0; i < (50 + Math.floor(150 * Math.random())); i++) {
// 		var rater = {};
// 		rater.id = faker.random.number(1000000);
// 		rater.ratingState = ratingState[Math.floor(2.99 * Math.random())];
// 		raterArray.push(rater);
// 	}

// 	var oneData = {};
// 	oneData.id = faker.random.number(1000000);
// 	oneData.name = faker.company.companyName();
// 	oneData.raters = raterArray.slice();
// 	oneData.estimated = estimatedArray.slice();
// 	oneData.actual = actualArray.slice();
// 	oneData.bestSummary = faker.lorem.paragraph();
// 	oneData.sellSummary = faker.lorem.paragraph();

// 	data.push(oneData);
// };



exports.data = data;