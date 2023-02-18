const express = require("express");
const router = express.Router();
const path = require("path");

const usersController = require("../controllers/users-controller");

const multer = require("multer");
const { mostrarRegister } = require("../controllers/users-controller");
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/img/users"),
  filename: (req, file, cb) => {
    cb(null, "imagen" + Date.now() + path.extname(file.originalname));
  },
});

// Middleware Multer
const upload = multer({
  storage,
});

//login
router.get("/login", usersController.mostrarLogin);
// Register
router.get("/register", usersController.mostrarRegister);
router.post("/register", upload.single("image"), usersController.register);
//carrito
router.get("/carrito", usersController.carrito);
//carga
router.get("/carga", usersController.carga);

module.exports = router;
