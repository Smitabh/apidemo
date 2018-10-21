var Sequelize = require('sequelize');

module.exports = function (){

var sequelize = require("../db/connection")();
	
 var period = sequelize.define('dimperiod', {  //remove s from here add in db 's from every table
      idPeriod:  { type: Sequelize.INTEGER, primaryKey: true},
      PeriodName: Sequelize.TEXT
  },{ timestamps: false,validate:true});

return period; 
};
