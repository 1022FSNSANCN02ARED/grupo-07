const express = require("express");
const router = express.Router();
const path = require("path");

const usersController = require("../controllers/users-controller");

const multer = require("multer");

const { body } = require ("express-validator");

const { mostrarRegister } = require("../controllers/users-controller");
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/img/users"),
  filename: (req, file, cb) => {
    cb(null, "imagen" + Date.now() + path.extname(file.originalname));
  },
});

const validations = [
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
				throw new Error("Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}");
			}
		}

		return true;
	})
];

// Middleware Multer

const upload = multer({
  storage,
});

//login
router.get("/login", usersController.mostrarLogin);
// Register
router.get("/register", usersController.mostrarRegister);
router.post("/register", upload.single("image"), validations, usersController.register);
//carrito
router.get("/carrito", usersController.carrito);
//carga
router.get("/carga", usersController.carga);

module.exports = router;
