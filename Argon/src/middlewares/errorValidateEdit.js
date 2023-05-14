const { validationResult } = require("express-validator");
const db = require("../database/models");
console.log("errorValidate");
function errorValideteMiddlewareEdit(req, res, next) {
  const resultvalidations = validationResult(req);
  const oldValues = req.body;
  const oldValuesFiles = req.files;

  db.Producto.findOne({where: { id: req.params.id }}).then((oldInfo) => {
    if (resultvalidations.errors.length > 0) {
      console.log(resultvalidations);
      console.log("dentro del if");
      return res.render("products/edit", {
        errors: resultvalidations.mapped(),
        oldValues: oldValues,
        Productos: {...oldValues, imagen:oldInfo.imagen},
        oldValuesFiles,
      });
    } else {
      console.log("dentro del else");
      next();
    }
  });
}
module.exports = errorValideteMiddlewareEdit;
