
function userLoggedMiddleware(req, res, next) {
  if(req.session.userLogged){
    next();
  } else{
    res.render("users/login");
  }
}

module.exports = userLoggedMiddleware;
