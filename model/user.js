

var Sequelize = require('sequelize');



var sequelize = require("../db/connection")();
	
 var user = sequelize.define('tbluser', { 
        idUser:  { type: Sequelize.INTEGER, primaryKey: true},
        usrLoginId: Sequelize.TEXT,
        usrPassword:Sequelize.TEXT,
        EmailId : Sequelize.TEXT
  },{ timestamps: false,validate:true});



module.exports = user;
