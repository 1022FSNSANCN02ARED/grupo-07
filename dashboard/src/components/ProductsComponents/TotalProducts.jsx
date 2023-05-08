import React, { useEffect, useState } from "react";

function TotalProducts() {
  // [variable a consultar, dar valor]= vacio
  const [productsCant, setUsersCant] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products/api/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((infoProductsCant) => {
      infoProductsCant.json().then((totalProducts) => {
        console.log(totalProducts);
        setUsersCant(totalProducts.data);
      });
    });
  }, []);
  console.log(productsCant.length);
  return (<div>
    <span>Total de productos</span>
    <br />
    <span>{productsCant.length}</span>
  </div>);
}
export default TotalProducts;