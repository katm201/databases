var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // a function which produces all the messages
      // 1) pulls the data from our database
      
      db.connection.query('SELECT * FROM messages', function(err, results, fields) {
        if (err) {
          console.error(err);
        } else {
          console.log('fields: ', fields);
          console.log('results: ', results); 
          callback(results);
        }
      });      
    }, 
    post: function (message, callback) {
      
      var sqlString = '';
      sqlString += 'INSERT INTO messages VALUES';
      sqlString += 'user = ?, room = ?, message_text = ?,';
      
      var sqlVals = [message.username, message.roomname, message.message];
      
      sqlString += JSON.stringify(sqlVals);
      
      // sqlString += '[' + message.username;
      // sqlString += ', ' + message.roomname;
      // sqlString += ', ' + message.message + ']';
      
      db.connection.query(sqlString, function(err, results, fields) {
        if (err) {
          console.error(err);
        } else {
          console.log('fields: ', fields);
          console.log('results: ', results); 
          callback(results);
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

