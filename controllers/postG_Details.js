const g2Details= require("../models/g2Details");
const ejs = require("ejs");
const path = require("path");


 module.exports=async(req,res)=>{
    console.log(req.body);
    var username=req.session.UserModel.username;
    var id=req.session.userid;
    
      // g2Details.findOneAndUpdate({username:username},{},{new:true},(err,g2UpdatedDetails)=>{
      //    if(g2UpdatedDetails){  
      //       res.render("g",{ g2Details:g2UpdatedDetails});
      //    }
      //    else{
      //       throw err;
           
      //    }
      // });

      const result= await g2Details.findByIdAndUpdate(id,{
         firstname:g2Details.firstname,
         lastname:g2Details.lastname,
         age:g2Details.age,
         licensenumber:g2Details.licensenumber,
         DOB:g2Details.DOB,
         carmake:req.body.carmake,
         carmodel:req.body.carmodel,
         manufacturedyear:req.body.manufacturedyear,
         platenumber:req.body.platenumber,
      });


         alert("Your data has been updated");
     
 

  
}