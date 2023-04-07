const db = require("../database/models");
function middlewareAdmin(req, res, next) {
  if (
    req.session.userLogged &&
    req.session.userLogged.dataValues.rolId == "1"
  ) {
    res.redirect("/products/adm");
  }
  next();
}
module.exports = middlewareAdmin;
