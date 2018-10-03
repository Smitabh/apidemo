
const express = require("express"); 

const app  = express(); 

var Sequelize = require('sequelize');
var teacher = require("./model/techers"); 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  

app.get("/",function(req,res){
    res.send("Hello express"); 
}); 

app.get("/login",function(req,res){
   //res.json({LoginId:"angelsmita",Password:"bksmita"}); 
  var model = new login(); 
   model.findAll( where,{
          usrLoginId:'login.usrLoginId',
          usrPassword:'login.usrPassword'
       }).then(login => {
        console.log(JSON.stringify(login));
       res.json({login});
   }); 
});
app.get("/getTeacher",function(req,res){
    var model = new  teacher(); 
    model.findAll().then(teacher => {
        //var teacherAll = [];
         //teacherAll = JSON.stringify(teacher) ;
         //console.log(teacherAll);
        //console.log(JSON.stringify(teacher));
       res.json({teacher});
    });
});



/*
app.get("/getLoadMappingDtls",function(req,res){
   var model = new maintain();
      model.findAll().then(mappingData =>{
           console.log(mappingData);
      res.json({mappingData});
    }); 
});*/

app.listen(9090,function(error,res){
    console.log("Listning on 9090");
}); 