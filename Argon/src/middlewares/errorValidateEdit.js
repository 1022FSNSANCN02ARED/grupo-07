const { validationResult } = require("express-validator");
const db = require("../database/models");
function errorValideteMiddlewareEdit(req, res, next) {
  const resultvalidations = validationResult(req);
  const oldValues = req.body;
  const oldValuesFiles = req.files;

  db.Producto.findOne({where: { id: req.params.id }}).then((oldInfo) => {
    if (resultvalidations.errors.length > 0) {
      return res.render("products/edit", {
        errors: resultvalidations.mapped(),
        oldValues: oldValues,
        Productos: {...oldValues, imagen:oldInfo.imagen},
        oldValuesFiles,
      });
    } else {
      next();
    }
  });
}
module.exports = errorValideteMiddlewareEdit;
