var Sequelize = require('sequelize');

var db = new Sequelize('chatter', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

var Users = db.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING
}, {timestamps: false});

var Messages = db.define('Messages', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  'message_text': Sequelize.STRING,
  room: Sequelize.STRING,
}, {timestamps: true});

Messages.belongsTo(Users);
Users.hasMany(Messages);

Users.sync()
  .then(function() {
    Messages.sync();
  })
  .then(function() {
    Users.findOrCreate({where: {name: 'default user'}});
  })
  .then(function() {
    Messages.findOrCreate({
      where: {id: 1}, 
      defaults: {
        room: 'lobby', 
        'message_text': 'default starting message',
        UserId: 1
      }
    });
  })
  .catch(function(err) {
    console.log('ERROR: ', err);
  });



exports.db = db;
exports.Users = Users;
exports.Messages = Messages;
