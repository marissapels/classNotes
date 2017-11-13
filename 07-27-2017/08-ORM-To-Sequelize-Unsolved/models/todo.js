// var Sequelize = require("sequelize");

// var Todo = sequelize.define("todo", {
// 	text: {
// 		type: Sequelize.STRING
// 	},
// 	complete: {
// 		type: Sequelize.BOOLEAN
// 	}
// });

// module.exports = Todo;

'use strict';
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Todo', {
    text: {
    	type: DataTypes.STRING,
    	//allowNull is set on the database, and length is set on the javascript. The length validation is done before it gets to the database. allNull is set by sql.
    	allowNull: false,
    	validate: {
    		len: [1, 140]
    	}
    },
    complete: DataTypes.BOOLEAN,
    defaultValue: false
  });
}