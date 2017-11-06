var Sequelize = require('sequelize');

var db = require('../db/index.js');
var chatter = require('../db/orm_db.js');

module.exports = {
  messages: {
    get: function (query, callback) {

      chatter.Messages.findAll({
        include: chatter.Users
      }).then( messages => { 
        var formatted = messages.map( message => {
          return {
            id: message.id,
            text: message.message_text,
            room: message.room,
            createdAt: message.createdAt,
            user: message.User.name
          };
        });
        callback(formatted); 
      });
 
    }, 
    post: function (message, callback) {
      
      chatter.Users.findOrCreate({where: {name: message.user}})
        .spread(function(result, created) {
          if (result) {
            return result.id;
          }
        })
        .then(function(id) {
          var formatted = {
            message_text: message.text,
            UserId: id,
            room: message.room
          };
          chatter.Messages.create(formatted);
        });
    }
  },

  users: {
    get: function () {},
    post: function () {}
  }
};

