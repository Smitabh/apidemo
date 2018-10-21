var Sequelize = require('sequelize');

module.exports = function (){

var sequelize = require("../db/connection")();
	
 var maintainInfo = sequelize.define('tblmappings', { 
      idMapping:  { type: Sequelize.INTEGER, primaryKey: true},
      ShortName: Sequelize.TEXT
  },{ timestamps: false,validate:true});

return maintainInfo; 
};
