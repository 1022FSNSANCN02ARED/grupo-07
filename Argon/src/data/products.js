// const fs = require("fs");
// const path = require("path");

// const productsFilePath = path.join(__dirname, "productsBaseDatos.json");
// // Funcion de listar productos

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
//     return this.findAll().find((p) => p.id == id);
//   },
//   saveProductEdited(product) {
//     let products = this.findAll();
//     const productid = product.id;
//     for (let i = 0; i < products.length; i++) {
//       const producto = products[i];

//       if (producto.id == productid) {
//         products[i] = product;
//       }
//     }
//     const productsFileContent = JSON.stringify(products, null, 4);
//     fs.writeFileSync(productsFilePath, productsFileContent, "utf-8");
//   },
//   deleteProduct(id) {
//     let products = this.findAll();
//     products = products.filter((p) => p.id != id);
//     const productsFileContent = JSON.stringify(products, null, 4);
//     fs.writeFileSync(productsFilePath, productsFileContent, "utf-8");
//   },
// };
