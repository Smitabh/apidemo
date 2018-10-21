var Sequelize = require('sequelize');

module.exports = function (){

var sequelize = require("../db/connection")();
	
 var period = sequelize.define('dimremarks', { 
      idRemark:  { type: Sequelize.INTEGER, primaryKey: true},
       	RemarkName: Sequelize.TEXT
  },{ timestamps: false,validate:true});

return period; 
};
