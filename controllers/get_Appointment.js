const appointmentModel= require("../models/appointments");
const ejs = require("ejs");
const path = require("path");



 module.exports=async(req,res)=>{

    const appointmentTimes= [{time: "9:00", disabled: false}, {time: "9:30", disabled: false},{time: "10:00", disabled: false},{time: "10:30", disabled: false},{time: "11:00", disabled: false},{time: "11:30", disabled: false},{time: "12:00", disabled: false},{time: "12:30", disabled: false},{time: "1:00", disabled: false},{time: "1:30", disabled: false},{time: "2:00", disabled: false}]
   res.render("appointment",{appointmentTimes:appointmentTimes});
   
   
}