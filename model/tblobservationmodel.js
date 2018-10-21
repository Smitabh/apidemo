var Sequelize = require('sequelize');
var sequelize = require("../db/connection")();
module.exports = function(){
/*    
var tblobserve = sequelize.define('tblobservation', { 
      idObservation: 
       { type: Sequelize.INTEGER, primaryKey: true},
      teacherId: Sequelize.INTEGER,
      classroomId: Sequelize.INTEGER,
      remarkId: Sequelize.INTEGER,
      periodId: Sequelize.INTEGER,
      obsDate:{
          type: Sequelize.DATE, 
          defaultValue: Sequelize.NOW
      },
      obsTime:Sequelize.TEXT
  },{ timestamps: false,validate:true});

 return tblobserve; 
}*/
var tblobserve = sequelize.define('tblobservation', { 
    idObservation: 
     { type: Sequelize.INTEGER, primaryKey: true},
    teacherId: Sequelize.INTEGER,
    classroomId: Sequelize.INTEGER,
    remarkId: Sequelize.INTEGER,
    periodId: Sequelize.INTEGER,
    obsDate:{
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW
    },
    obsTime:Sequelize.TEXT
},{ timestamps: false,validate:true});

var teacher = sequelize.define('dimteacher', { 
    idTeacher:  { type: Sequelize.INTEGER, primaryKey: true},
    TeacheName: Sequelize.TEXT
  },{ timestamps: false,validate:true});

  /*teacher.belongsTo(tblobserve,{targetKey:'teacherId',foreignKey: 'teacherId'});
  tblobserve.hasMany(tblobserve ,{ foreignKey: 'teacherId' });

  teacher.sync();
  tblobserve.sync();
*/
teacher.belongsTo(tblobserve, {
    foreignKey: 'teacherId'
  });

 /* module.exports ={
      teachers: teacher,
      tblobserveList:tblobserve
  };*/

  return tblobserve; 
}

