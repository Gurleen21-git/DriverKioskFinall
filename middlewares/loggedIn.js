module.exports = (req, res, next)=> {
    loggedIn = req.session.userId ? true : false;
  
    next();
  };