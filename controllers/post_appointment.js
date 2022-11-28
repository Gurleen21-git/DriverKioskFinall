const appointmentModel= require("../models/appointments");
const ejs = require("ejs");
const path = require("path");


 module.exports=async(req,res)=>{

  

    appointmentModel.findOne({apptTime:req.body.apptTime}, (error, appt)=>{
        if(appt){
         res.redirect("/login");
        } else {
           // req.body.apptDate=finalDate;
            appointmentModel.create(req.body);
            res.redirect("/appointments");
        }
       }
     );
    
    // await appointmentModel.create(req.body);
    // res.redirect("/appointments");
}