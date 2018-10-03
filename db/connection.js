
var Sequelize = require('sequelize');

module.exports = function()
{
	
   var sequelize = new Sequelize('college_db', 'root', 'password', {
	  host: 'localhost',
  	dialect: 'mysql'
	});

   return sequelize; 
}
