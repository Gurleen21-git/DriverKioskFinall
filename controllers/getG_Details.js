const g2Details= require("../models/g2Details");
const ejs = require("ejs");
const path = require("path");
const { String } = require("mongoose/lib/error/messages");


 module.exports=async(req,res)=>{
  // res.render('g');

   var username=req.session.UserModel.username;
   g2Details.findOne({username:username}, (error, g2)=>{
     if(g2){
        req.session.userid= g2._id;
        res.render("g",{ g2Details:g2});
     } else {
         res.redirect("/g2");
     }
    }
  );
   
   
}