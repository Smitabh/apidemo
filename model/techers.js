

var Sequelize = require('sequelize');

module.exports = function (){

var sequelize = require("../db/connection")();
	
 var teacher = sequelize.define('dimteacher', { 
      idTeacher:  { type: Sequelize.INTEGER, primaryKey: true},
      TeacheName: Sequelize.TEXT
  },{ timestamps: false,validate:true});

return teacher; 
}; 
