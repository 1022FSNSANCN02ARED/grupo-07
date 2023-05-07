const db = require("../database/models");
function middlewareAdmin(req, res, next) {
  if (req.session.userLogged && req.session.user.rolId == "1") {
    return res.redirect("/products/admin");
  }
  return next();
}
module.exports = middlewareAdmin;
