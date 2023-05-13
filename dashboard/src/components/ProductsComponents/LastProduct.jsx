import React, { useEffect, useState } from "react";

function LastProduct() {
  // [variable a consultar, dar valor]= vacio
  const [LastProduct, setLastProduct] = useState({
    id: "",
    nombre: "",
    precio: "",
    descripcion: "",
    marca: "",
    gama: "",
    imagen: "",
    sockets: "",
    slots: "",
    ram: "",
  });
  useEffect(() => {
    fetch("http://localhost:3001/products/api/last", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((infoLastProduct) => {
      infoLastProduct.json().then((lastProduct) => {
        setLastProduct(lastProduct.data);
      });
    });
  }, []);

  return (
    <div className="lastProduct">
      <img
        src={"http://localhost:3001" + LastProduct.imagen}
        width="250px"
        height="250px"
      />
      <div className="infoProducts">
        <ul>
          <li>Nombre: {LastProduct.nombre}</li>
          <li>Precio: ${LastProduct.precio}</li>
          <li>Descripción: {LastProduct.descripcion}</li>
          <li>Ram: {LastProduct.ram}</li>
          <li>Slots: {LastProduct.slots} </li>
          <li>sockets: {LastProduct.sockets} </li>
          <li>Gama: {LastProduct.gama}</li>
          <li>Marca: {LastProduct.marca}</li>
        </ul>
      </div>
    </div>
  );
}
export default LastProduct;
