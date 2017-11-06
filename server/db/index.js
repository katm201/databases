var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect();

module.exports = connection;

var connection = mysql.createConnection({
  user: 'root',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('connected to chat');
});

exports.connection = connection;