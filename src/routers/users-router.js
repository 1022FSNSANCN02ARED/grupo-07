const express = require("express");
const router = express.Router();
const path = require("path");
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
const guestMiddleware = require("../middlewares/guestMiddleware");
const authtMiddleware = require("../middlewares/authMiddleware");
const validationsRegister = require("../middlewares/validateRegisterMiddleware");
const registerError = require("../middlewares/errorValidateMiddleware");
const userLoggedMiddleware = require("../middlewares/userLoggedMiddlewares");
const middlewareAdmin = require("../middlewares/middlewareAdmin");

//login
router.get("/login", guestMiddleware, usersController.mostrarLogin);

//proceso de login
router.post("/login", usersController.loginProcess);

// Register
router.get("/register", guestMiddleware, usersController.mostrarRegister);
router.post(
  "/register",
  uploadFile.single("avatar"),
  [validationsRegister, registerError],
  usersController.processRegister
);

router.get("/profile", usersController.profile);

//carrito
router.get("/carrito", usersController.carrito);

//carga
router.get("/carga", usersController.carga);

module.exports = router;
