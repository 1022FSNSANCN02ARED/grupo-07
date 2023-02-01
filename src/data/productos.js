const fs = require("fs");
const path = require("path");

const productosFilePath = path.join(
  __dirname,
  "../data/productosBaseDatos.json"
);

const productosFileContent = fs.readFileSync(productosFilePath, "utf-8");
const productos = JSON.parse(productosFileContent);

module.exports = productos;

