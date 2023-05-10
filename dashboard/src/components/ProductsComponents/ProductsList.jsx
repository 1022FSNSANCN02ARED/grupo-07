import React, { useEffect, useState } from "react";

function ProductsList() {
  // [variable a consultar, dar valor]= vacio
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products/api/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((infoProducts) => {
      infoProducts.json().then((productsList) => {
        setProducts(productsList.data);
      });
    });
  }, []);
  return (
    <div className="ProductsContainer">
      <div className="ProductsList">
      <table>
        <caption>Lista de usuarios</caption>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripcion</th>
              <th>Marca</th>
              <th>Gama</th>
              <th>Sockets</th>
              <th>Slots</th>
              <th>Ram</th>
              <th>Imagen</th>
              
            </tr>
          </thead>
          <tbody>
            {products.map((producto) => {
               return(
            <tr key={`producto-${producto.id}`}>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.marca}</td>
              <td>{producto.gama}</td>
              <td>{producto.sockets}</td>
              <td>{producto.slots}</td>
              <td>{producto.ram}</td>
              <td><img src={"http://localhost:3001"+producto.imagen} alt="" width="50px" height="50px" /></td>
              <td><button>Editar</button></td>
            </tr>)})}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductsList;
