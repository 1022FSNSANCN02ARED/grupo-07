const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "usuarios.json");

// module.exports = {
//   findAll() {
//     const productsFileContent = fs.readFileSync(productsFilePath, "utf-8");
//     const products = JSON.parse(productsFileContent);
//     return products;
//   },
//   saveProduct(product) {
//     const products = this.findAll();
//     products.push(product);
//     const productsFileContent = JSON.stringify(products, null, 4);
//     fs.writeFileSync(productsFilePath, productsFileContent, "utf-8");
//   },
//   findById(id) {
//     return this.findAll().find((producto) => producto.id == id);
//   },
// };

module.exports= productsFilePath;
