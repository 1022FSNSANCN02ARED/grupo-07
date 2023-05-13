const { body } = require("express-validator");

module.exports = [
  body("nombre").notEmpty().withMessage("Tienes que escribir un nombre"),
  body("precio").notEmpty().withMessage("Tienes que escribir un precio"),
  body("imagen").custom((value, { req }) => {
  console.log(value);
  console.log(req.body);
  console.log(req.file); 
  const file = req.file;
    const acceptedExtensions = [".jpg", ".png"];

    if (file) {
      const fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),
];
