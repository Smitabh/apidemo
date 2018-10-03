
var express = require('express');
var app = express();

//Sequelize is a promise-based Node.js ORM(object relationship manager) for Postgres, MySQL, SQLite and Microsoft SQL Server. 
var Sequelize = require('sequelize');
var Observation = require('../observation/modelObservation'); // //('../../modelObservation'); //("/modelObservation");

app.engine('html' , require('ejs').renderFile);

app.get('/getTeacher', function(req , res){
    var obsModel = new Observation(); //create object
    obsModel.findAll().then(teachers  => {
        res.render("observe.html" , {teachers:teachers})
    })
    // if(typeof req.query.idTeacher != 'undefined' && req.query.idTeacher != null){
    //     obsModel.findAll().then(AllTecahersDtls =>{
    //         res.render("observe.html" ,
    //         {   Teachers:AllTeachhersDtls,
    //            // AllTeachersDtls:TeacherName
    //         });
    //     })
    // }
    // else{
        
  //  }
