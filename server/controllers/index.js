var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
      // calls models.messages.get(callback)
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    
    get: function (req, res) {
      // this function handles a request for all posts from a particular user
    },
    
    post: function (req, res) {
      // this function handles a request to...add a new user?
    }
  }
};

