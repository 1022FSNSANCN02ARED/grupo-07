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

//login
router.get("/login", guestMiddleware, usersController.mostrarLogin);

//proceso de login
router.post("/login", usersController.loginProcess);

//Logout
router.get("/logout", usersController.logoutProcess);

// Register
router.get("/register", guestMiddleware, usersController.mostrarRegister);
router.post(
  "/register",
  uploadFile.single("avatar"),
  [validationsRegister, registerError],
  usersController.processRegister
);

//perfil
router.get("/profile", userLoggedMiddleware, usersController.profile);

//carrito
router.get("/carrito", usersController.carrito);

////////////////////////////////////////////////////Api///////////////////////////////////////////////////////////////////////

//Api last user
router.get("/api/last", usersController.lastusersAPI);

// Api total users
router.get("/api/total", usersController.totalUsersAPI);

//Api all user
router.get("/api/all", usersController.allUsersAPI);

//Api user por id
router.get("/api/:id", usersController.Usuario);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//404
router.get("/*", (req, res) => {
  res.redirect("/error-404");
});

module.exports = router;
