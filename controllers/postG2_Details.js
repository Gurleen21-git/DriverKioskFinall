const g2Details= require("../models/g2Details");
const appointmentModel= require("../models/appointments");
const ejs = require("ejs");
const path = require("path");


 module.exports=async(req,res)=>{
    console.log(req.body);
    req.body.username=req.session.UserModel.username;
    req.body.userType=req.session.UserModel.userType;
    await g2Details.create(req.body);
    
   res.redirect("/dashboard");
}