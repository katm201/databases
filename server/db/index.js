var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('connected to chat as student');
});

exports.connection = connection;