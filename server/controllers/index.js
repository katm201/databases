var models = require('../models');
var req = require('request');
var express = require('express');
// var expResponse = require('express-response');

module.exports = {
  messages: {
    get: function (request, response) {
      let query = request.query;
      models.messages.get(query, function(results) {
        response.end(JSON.stringify(results));
      });
    }, // a function which handles a get request for all messages
    post: function (request, response) {
      models.messages.post(request.body, function(results) {
        response.end(JSON.stringify(results));
      });
    }, // a function which handles posting a message to the database
    
    
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

