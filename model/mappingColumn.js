var Sequelize = require('sequelize');
var sequelize = require("../db/connection")();

module.exports = function (){


 var Mapping = sequelize.define('tblmapping', { 
    idMapping:  { type: Sequelize.INTEGER, primaryKey: true},
    tblnanme: Sequelize.TEXT,
    ShortName: Sequelize.TEXT
},{ timestamps: false,validate:true});


    var tblmappingcol = sequelize.define('tblmappingcolumn', { 
    idMappingColumn:  { type: Sequelize.INTEGER, primaryKey: true},
    ColumnName: Sequelize.TEXT,
    ColumnTitle:Sequelize.TEXT,
    MappingId:Sequelize.INTEGER
  },{ timestamps: false,validate:true});

  tblmappingcol.belongsTo(Mapping,{foreignKey:"MappingId",as: 'mapping'});

  
  return tblmappingcol; 
}; 

