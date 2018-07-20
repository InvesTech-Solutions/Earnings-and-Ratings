const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/db');

let port = 3036;
let app = express();

app.use(express.static(__dirname + '/../client/dist/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/fakeData', (req, res) => {
  console.log('dfdfdfffdff');
  res.json();
})

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});