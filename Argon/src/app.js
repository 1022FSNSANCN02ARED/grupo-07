// Dependencias requeridas
const express = require("express");
const path = require("path");
const cors = require("cors");
const mainRouter = require("./routers/main-router");
const methodOverride = require("method-override");
const session = require("express-session");
const cookies = require("cookie-parser");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddlewares");
const { Usuario } = require("./database/models");

//Ejecución de express
const app = express();

app.use(
  session({
    secret: "Shhh, it's a secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Levantar el servidor
app.listen(3001, () => {
  console.log("Funcionando en el puerto 3001");
});

// Ruta a archivos public
const publicpath = path.join(__dirname, "../public");
app.use(express.static(publicpath));

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(cookies());
app.use(userLoggedMiddleware);
//EJS  --------------------------------------------------
//Configuracón EJS
//motor EJS
app.set("view engine", "ejs");

//Ubicación
app.set("views", path.join(__dirname, "/views"));

//Ejecutar archivo mainRouter
app.use(mainRouter);

//const router = express.Router();
//cosnt productsRouter = require('/routers/products-router');
//app.use('/routers/products-router.js);
