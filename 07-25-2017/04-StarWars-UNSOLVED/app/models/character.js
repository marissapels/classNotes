var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Character = sequelize.define("character", {
  routeName: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.STRING
  },
  forcepoints: {
  	type: Sequelize.INTEGER
}, {
  timestamps: false
});

// Syncs with DB
Character.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Character;
