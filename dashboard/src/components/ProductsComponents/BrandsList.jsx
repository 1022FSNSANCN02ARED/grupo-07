import React, { useEffect, useState } from "react";

function BrandsList() {
  const [brandsList, setBrandsList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products/api/marca", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((infobrandsList) => {
      infobrandsList.json().then((brands) => {
        setBrandsList(brands.data);
      });
    });
  }, []);
  return (
    <div>
      <table className="BrandsList">
        <caption>Marcas</caption>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {brandsList.map((producto) => {
            return (
              <tr key={`marca-${producto.id}`}>
                <td>{producto.marca}</td>
                <td>{producto.cantidad}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default BrandsList;
