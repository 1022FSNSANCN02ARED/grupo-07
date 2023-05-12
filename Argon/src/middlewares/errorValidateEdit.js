const { validationResult } = require("express-validator");

function errorValideteMiddlewareEdit(req, res, next) {
  const resultvalidations = validationResult(req);
  const oldValues = req.body;
  const oldValuesFiles = req.files;

  if (resultvalidations.errors.length > 0) {
    return res.render("products/edit", {
      errors: resultvalidations.mapped(),
      oldValues: oldValues,
      Productos: oldValues,
      oldValuesFiles,
    });
  } else {
    next();
  }
}
module.exports = errorValideteMiddlewareEdit;
