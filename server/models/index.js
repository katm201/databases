var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // a function which produces all the messages
      // 1) pulls the data from our database
      // 2) call the callback
      
    }, 
    post: function () {
    // a function which adds a new message to our SQL database
    // 1) collect the incoming message data into a variable
    
      // 2) call INSERT INTO (tablename) VALUES (user, room, message)
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

