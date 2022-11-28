const g2Details= require("../models/g2Details");
const appointmentModel= require("../models/appointments");
const ejs = require("ejs");
const path = require("path");


 module.exports=async(req,res)=>{

   const todayDate= new Date();
    const month = new Date(todayDate).getMonth()+1;
    const date = new Date(todayDate).getDate();
    const finalDate = (new Date(todayDate).getFullYear() + "-" + month + "-" +date).toString();

  appointmentModel.find({apptDate:finalDate}, (error, appt)=>{
    if(appt){
      const appointmentMatchTime=[];
    appt.forEach(element => {
      appointmentMatchTime.push(element)
    });
    
    console.log(appointmentMatchTime);
    req.session.AppointmentModel=appointmentMatchTime;
    res.render("g2",{appointmentModel:appointmentMatchTime});
 
    }
   }
 );
   
  //res.render('g2');
  
}