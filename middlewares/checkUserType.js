const User = require("../models/User");

module.exports = (req, res, next)=> {

    if(req.session.userType=="Driver"){
        res.render('g');
        res.render('g2');
        
    }
    else if(req.session.userType=="Admin"){
        res.render('appointment');
    }
    else{
        res.redirect('/login');
    }
}

