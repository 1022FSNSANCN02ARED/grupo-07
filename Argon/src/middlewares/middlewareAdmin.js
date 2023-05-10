const db = require("../database/models");
function middlewareAdmin(req, res, next) {
  if (req.session.userLogged && req.session.user.rolId == "1") {
    return next();
  }
  return res.redirect("/");
}
module.exports = middlewareAdmin;
//http://localhost:3001/products/admin