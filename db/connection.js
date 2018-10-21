
var Sequelize = require('sequelize');

module.exports = function()
{
	
   var sequelize = new Sequelize('college_db', 'root', 'password', {
	  host: 'localhost',
  	dialect: 'mysql'
	});
/* sequelize.authenticate()
	  .then(() => {
	    console.log('Connection has been established successfully.');
	  })
	  .catch(err => {
	    console.error('Unable to connect to the database:', err);
	  });
 
   return sequelize; 
   */
	return sequelize; 
}
