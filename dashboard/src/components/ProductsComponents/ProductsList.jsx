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
    <table className="productsTable">
      <caption>Lista de productos</caption>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th className="desc">Descripcion</th>
          <th>Marca</th>
          <th>Gama</th>
          <th>Sockets</th>
          <th>Slots</th>
          <th>Ram</th>
          <th>Imagen</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((producto) => {
          return (
            <tr key={`producto-${producto.id}`}>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td className="desc">{producto.descripcion}</td>
              <td>{producto.marca}</td>
              <td>{producto.gama}</td>
              <td>{producto.sockets}</td>
              <td>{producto.slots}</td>
              <td>{producto.ram}</td>
              <td>
                <img
                  src={"http://localhost:3001" + producto.imagen}
                  alt=""
                  width="50px"
                  height="50px"
                />
              </td>
              <td>
                <a href={`http://localhost:3001/products/edit/${producto.id}/`} target="about_blank"><button>Editar</button></a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default ProductsList;
