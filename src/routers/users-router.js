const express = require("express");
const router = express.Router();
const path = require("path");
const {body}= require('express-validator');

//Controller
const usersController = require("../controllers/users-controller");

const multer = require("multer");

const { mostrarRegister } = require("../controllers/users-controller");
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/img/users"),
  filename: (req, file, cb) => {
    cb(null, "imagen" + Date.now() + path.extname(file.originalname));
  },
});

//Middlewares
const uploadFile = require("../middlewares/multerMiddleware");
const validations = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authtMiddleware = require("../middlewares/authMiddleware");

// Middleware Multer

const upload = multer({
  storage,
});

//login
router.get("/login", guestMiddleware, usersController.mostrarLogin);

//proceso de login
router.post('/login', usersController.loginProcess);

// Register
router.get("/register", guestMiddleware, usersController.mostrarRegister);
router.post("/register", upload.single("image"), validations, usersController.processRegister);

//Perfile
router.get("/profile", authtMiddleware, usersController.profile);

//carrito
router.get("/carrito", usersController.carrito);

//carga
router.get("/carga", usersController.carga);

module.exports = router;
