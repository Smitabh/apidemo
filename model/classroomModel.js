var Sequelize = require('sequelize');
module.exports = function (){
var sequelize = require("../db/connection")();
	
 var classroom = sequelize.define('dimclassroom', { 
      idClassroom:  { type: Sequelize.INTEGER, primaryKey: true},
      ClassName: Sequelize.TEXT
  },{ timestamps: false,validate:true});

return classroom; 
};

/*var Sequelize = require('sequelize');
var sequelize = require("../db/connection")();
	
var classroom = sequelize.define('dimclassroom', { 
  idClassroom:  { type: Sequelize.INTEGER, primaryKey: true},
  ClassName: Sequelize.TEXT
},{ timestamps: false,validate:true});

module.exports = classroom;*/