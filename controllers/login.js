const bcrypt = require("bcrypt");
const User = require("../models/User");
global.checkUserType=Boolean;

module.exports = (req,res)=> {
    
    const { username, password } = req.body;

    User.findOne({username:username}, (error, user)=>{
        if(user){
             bcrypt.compare(password, user.password, (error, same)=> {
                if(same){
                    //TODO:: Store User in session
                    req.session.UserModel=user;
                    req.session.userId = user._id;
                    if(user.userType==="Driver"){
                        checkUserType=true;
                    }
                    else{
                        checkUserType=false;
                    }
                    res.redirect("/dashboard");

                    
                } else {
                    res.redirect("/login");
                }
            });
        } else {
            res.redirect("/login");
        }
    });
}