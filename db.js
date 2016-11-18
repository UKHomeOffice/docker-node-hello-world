const mysql = require('mysql');

module.exports = function(credentials) {
  var connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
  });
  connection.connect(err => (!!err) ? console.log('err: ', err) : undefined);
  return connection;
};
