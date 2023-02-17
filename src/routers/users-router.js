const express = require("express");
const router = express.Router();
const path = require("path");

const usersController = require("../controllers/users-controller");

const multer = require("multer");
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
router.get("/login", usersController.login);
// Register
router.get("/register", upload.single ("image"), usersController.register);
router.post("/users");
//carrito
router.get("/carrito", usersController.carrito);
//carga
router.get("/carga", usersController.carga);

module.exports = router;
