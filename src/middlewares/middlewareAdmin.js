const db = require("../database/models");
function middlewareAdmin(req, res, next) {
  if (
    req.session.userLogged &&
    req.session.user.rolId == "1"
  ) {
    return next();
  }
  return res.redirect("users/home")
}
module.exports = middlewareAdmin;
