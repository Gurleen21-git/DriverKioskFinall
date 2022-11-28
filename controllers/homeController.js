const g2Details= require("../models/g2Details");
const ejs = require("ejs");
const path = require("path");


module.exports= async(req,res)=>{
    const g2GetDetails = await g2Details.find({});
    console.log(g2GetDetails);
    res.render('index',{g2Details: g2GetDetails});

}