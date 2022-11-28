const mongoose= require("mongoose");
const Schema= mongoose.Schema;
const bcrypt= require("bcrypt");
const User = require("./User");

const g2DetailsSchema= new Schema({
    firstname:{type:String, require:true},
    lastname:{type:String, require:true},
    age: {type:String, require:true},
    licensenumber:{type:String, require:true},
    DOB:{type:String, require:true},
    carmake:{type:String, require:true},
    carmodel:{type:String, require:true},
    manufacturedyear:{type:String, require:true},
    platenumber:{type:String, require:true},
    SIN:{type:String, require:true},
    username:{type:String, require:true},
    userType:{type:String, require:true},
    appointmentID: {type: mongoose.Schema.Types.ObjectId, ref: "appointments", default: null},

});

g2DetailsSchema.pre("save", function(next){
    const g2details = this;
    bcrypt.hash(g2details.SIN, 10, (error,hash)=>
    {
        g2details.SIN=hash;
        next();
    });

});

const g2Details= mongoose.model("g2Details",g2DetailsSchema);

module.exports=g2Details;