
const express = require("express"); 

const app  = express(); 


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

var Sequelize = require('sequelize');
var teacher = require("./model/techerModel"); 
var tt = require("./model/teacher");
var user = require("./model/user"); 
var classroom = require("./model/classroomModel"); 
var period = require("./model/periodmodel");
var remark = require("./model/remarkmodel");
var mapping = require("./model/mappingmodel");
var mappingDtls = require("./model/mappingDtls");
var tblmappingcol = require("./model/mappingColumn"); 

var tblobserve = require("./model/tblobservationmodel");
var utils  = require("./helper/utils"); 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
});


  

app.get("/",function(req,res){
    res.send("Hello express"); 
}); 

app.get("/login",function(req,res){
   res.json({LoginId:"angelsmita",Password:"bksmita"});  
});
app.post("/saveRegister",function(req,res){
    //console.log("insaveregister");
    var model = new user(); 
    model.usrLoginId = req.body.usrLoginId
    model.usrPassword = req.body.usrPassword
   // model.conformPassword = req.body.conformPassword
    model.EmailId = req.body.EmailId
   console.log(req.body); 
    model.save().then((data) => { 
         console.log(data);
    }).catch((error)=>{
        console.log(error); 
    });
 });

 
 app.post("/saveObservation", function(req, res){
     console.log('observe save backend...............');
     
   var obsmodel = new tblobserve();
   //console.log(obsmodel);   
   obsmodel.teacherId = req.body.teacherId;
       obsmodel.remarkId = req.body.remarkId;
       obsmodel.periodId = req.body.periodId;
       obsmodel.classroomId = req.body.classroomId;
       obsmodel.obsDate = req.body.obsDate;
       obsmodel.obsTime =  req.body.obsTime;
          console.log(req.body);
          obsmodel.save().then((data) => { 
            console.log(data);
            
       }).catch((error)=>{
           console.log(error); 
       });
 });

 //To get particular table data
 app.get('/getmappingRecord', (req, res) => {
    
    const model  =  new tblmappingcol(); 
    const modelmap = new mappingDtls();
    
    if(!utils.isEmpty( req.query.pageId ) ) 
    {
        model.findAll({
            include: [{
                model :modelmap
            }],         
        where: {
            MappingId: req.query.pageId,            
          }
        }
        ).then((data)=>{
            
            res.json(data);
        }).catch((error)=>{
            console.log(error);
        });
    }else{
        res.json([]);
    }   
});

app.get("/getTeacher",function(req,res){
    var model = new tt(); 
    model.findAll().then(teacher => {
       res.json({teacher});
    });
});
app.get("/getClassroom",function(req,res){
    var model = new  classroom(); 
    model.findAll().then(classrms => {
       res.json({classrms});
    });
})

app.get("/getPeriod",function(req,res){
    var model = new period(); 
    model.findAll().then(periods => {
       res.json({ periods });
    });
});

app.get("/getRemark",function(req,res){
    var model = new remark(); 
    model.findAll().then(remarks => {
       res.json({ remarks });
    });
});

app.get("/getLoadMappingDtls",function(req,res){
   var model = new mapping();
      model.findAll().then(mappingData =>{
           console.log(mappingData);
      res.json({mappingData});
    }); 
});

app.post("/saveTeacher",function(req,res){

    //  const t = new tt();
    //  const myt = new t();  
    //  const teach = new teacher(); 

    //  console.log(t, teach); 
    //  process.exit(); 

    console.log("teacher inserted backend........");
    console.log(req.body.idTeacher);
    console.log(req.body.TeacheName);

    var modeltea = new teacher(); 
    modeltea.TeacheName = req.body.TeacheName;
  
    if( typeof req.body.idTeacher == 'undefined' || req.body.idTeacher == null || req.body.idTeacher == '' )
    {
        modeltea.save().then((data)=>{
        console.log("In SAVE")
        }).catch((error)=>{
            console.log(error);
        });
    } 
    // else if(req.body.idTeacher != '' && req.body.TeacheName != ''){
    else{ 
       modeltea.idTeacher = req.body.idTeacher;        
                
        teacher.update({TeacheName:req.body.TeacheName},{where:{idTeacher:req.body.idTeacher}}).then((data)=>{
            console.log("In Update");
       }).catch((error)=>{
           console.log(error);
       });
   }


}) ; 

app.post("/saveClassrm",function(req,res){
    const cls = new classroom(); 
    console.log(cls);
    const c  = new cls(); 
    console.log("inserted backend........",c);
    
    c.ClassName = req.body.ClassName;
    console.log(req.body.ClassName);
    console.log("id---");
    console.log(req.body.idClassroom);
    if(typeof req.body.idClassroom == 'undefined' || req.body.idClassroom == null || req.body.idClassroom == '' )
    {
        c.save().then((data)=>{
        console.log("In SAVE")  
        res.json({status:"success",message:"Successfully saved classroom"});
        }).catch((error)=>{

            console.log(error);
            res.json({status:"error",message:"failed to insert"});

        });
    } 
    else{  
       console.log(req.body.idClassroom);
        console.log(req.body.ClassName);
        cls.idClassroom = req.body.idClassroom;        
                
        cls.update({ClassName:req.body.ClassName},{where:{idClassroom:req.body.idClassroom}}).then((data)=>{

            console.log("In Update");
            res.json({status:"success",message:"Successfully updated classroom"});

       }).catch((error)=>{
           console.log(error);
           res.json({status:"error",message:"failed to update"});

        });
   }
}) ;

//search data
app.get('/getsearchRecord', (req, res) => {
    /*select o.CurrentDate,o.CurrentTime,l.LectureName,c.ClassRoomName,r.Reason,t.TeacherName
			from tblobservation o
			left outer join dimlecture l on l.idLecture = o.LectureId
			left outer join dimclassroom c on c.idClassRoom = o.ClassroomId
			left outer join dimteacher t on t.idTeacher = o.TeacherId
            left outer join dimremark r on r.idRemark = o.RemarkId 
            */
    const observemodel =  new tblobserve(); 
    var obsmodel = new tblobserve();

    //console.log(obsmodel.findAll()); process.exit; 
     
    console.log('In searchId backend page---:');
    console.log( req.query.teacherId);
    //console.log(req.query.fromDate);
    console.log(req);
    console.log('Todate:---')
    console.log(req.query.toDate);
    if(!utils.isEmpty( req.query.teacherId ) ) 
    { 
        obsmodel.findAll({
           /*include: [{
                model: teacher,
                where: {
                    teacherId: req.query.teacherId,  
                 obsDate:{
                   $between: [req.query.fromDate, req.query.toDate]
                }            
             } 
            }]*/
            where: {
                teacherId: req.query.teacherId,  
                obsDate:{
                    $between: [req.query.fromDate, req.query.toDate]
                }            
            }       
        }
    
        ).then((data)=>{
            
            res.json(data);
        }).catch((error)=>{
            console.log(error);
        });
    }else{
        res.json([]);
    }  
});

app.listen(9191,function(error,res){
    console.log("Listning on 9191");
}); 
