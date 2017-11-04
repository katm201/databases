var db = require('../db');

module.exports = {
  messages: {
    get: function (query, callback) {
      // a function which produces all the messages
      // 1) pulls the data from our database
      
      let sqlString = 'SELECT messages.id, messages.room, usernames.name, messages.message_text FROM messages, usernames WHERE usernames.id = messages.user';
      
      db.connection.query(sqlString, function(err, results, fields) {
        if (err) {
          console.error(err);
        } else {
          console.log(results);
          // console.log('fields: ', fields);
          // console.log('results: ', results); 
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

