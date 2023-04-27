
function userLoggedMiddleware(req, res, next) {
  if(req.session.userLogged){
    next();
  } else{
    res.render("users/login");
  }

  //res.locals.isLogged = false;

//   let emailInCookie = "luvolta99@gmail.com"; //req.cookies.userEmail;
//   console.log(req.cookies.userEmail);
//  let userFromCookie = User.findByField("email", emailInCookie);
//   let userFromCookie = db.Usuario.findAll({where:{email: emailInCookie}});
//   console.log(userFromCookie);
//   if (userFromCookie) {
//     req.session.userLogged = userFromCookie;
//   }

//   if (req.session.userLogged) {
//     res.locals.isLogged = true;
//     res.locals.userLogged = req.session.userLogged;
//  }

//   next();
}

module.exports = userLoggedMiddleware;
