var Sequelize = require('sequelize');
var sequelize = require("../db/connection")();
	
 var mappingDtls = sequelize.define('tblmapping', { 
      idMapping:  { type: Sequelize.INTEGER, primaryKey: true},
      tblnanme: Sequelize.TEXT,
      ShortName: Sequelize.TEXT
  },{ timestamps: false,validate:true});


module.exports = mappingDtls;



