const path = require ('path');
const { body } = require ('express-validator');

module.exports = [
	body("nombre").notEmpty().withMessage("Tienes que escribir tu nombre"),
  	body("apellido").notEmpty().withMessage("Tienes que escribir tu apellido"),
	body("email")
		.notEmpty().withMessage("Tienes que escribir un correo electrónico").bail()
		.isEmail().withMessage("Debes escribir un formato de correo válido"),
   	body("contacto").notEmpty().withMessage("Tienes que escribir tu número de contacto"),
  	body("categoria").notEmpty().withMessage("Tienes que elegir una categoria"),
	body("contraseña").notEmpty().withMessage("Tienes que escribir una contraseña"),
	body("pais").notEmpty().withMessage("Tienes que elegir un país"),
	body("avatar").custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = [".jpg", ".png"];
		
		if (!file) {
			throw new Error("Tienes que subir una imagen");
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`);
			}
		}

		return true;
	})
];