var db = require('../db');

module.exports = {
  messages: {
    get: function (query, callback) {
      
      if (Object.keys(query).length === 0) {
        query = 'SELECT messages.id, messages.room, usernames.name, messages.message_text FROM messages, usernames WHERE usernames.id = messages.user';
      }
      
      db.connection.query(query, function(err, results, fields) {
        if (err) {
          console.error(err);
        } else { 
          callback(results);
        }
      });      
    }, 
    post: function (message, callback) {
      
      // retrieve usernames
        // if username isn't present
          // insert into both usernames and the message
        // if username is present, insert message (using the user's key)
        
      module.exports.messages.get('SELECT * FROM usernames', function(results) {
        var newUser = true;
        var userId;

        for (var i = 0; i < results.length; i++) {
          if (results[i].name === message.username) {
            newUser = false;
            userId = results[i].id;
          }
        }
        
        userId = userId || results.length + 1;
        
        var messageQuery = 'INSERT INTO messages (room, user, message_text) VALUES ( \'' + message.roomname + '\' , ' + userId + ', \'' + message.text + '\')';
        
        if (newUser) {
          // add user to usernames table in database
          var userQuery = 'INSERT INTO usernames (id, name) VALUES (' + userId + ', \'' + message.username + '\') ';
          
          db.connection.query(userQuery, function(err, results, fields) {
            if (err) {
              console.error(err);
            } else { 
              
              db.connection.query(messageQuery, function(err, finalResults, finalFields) {
                if (err) {
                  console.error(err);
                } else { 
                  callback(finalResults);
                }
              }); 
            }
          });
          
          
        } else {
        
          db.connection.query(messageQuery, function(err, results, fields) {
            if (err) {
              console.error(err);
            } else { 
              callback(results);
            }
          });
          
        }
 
      });
    }
  },

  users: {
    get: function () {},
    post: function () {}
  }
};

