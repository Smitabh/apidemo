
var Sequelize = require('sequelize');

module.exports = function (){

var sequelize = require("../db/connection")();
	
 var teacher = sequelize.define('dimteacher', {
    idTeacher:Sequelize.INTEGER,
    TeacheName: Sequelize.TEXT
  },{ timestamps: false,validate:true});

return teacher; 
}; 