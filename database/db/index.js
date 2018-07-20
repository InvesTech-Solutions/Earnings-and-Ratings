var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  database: 'invesTechSol_JB'
});

connection.connect();

module.exports = connection;