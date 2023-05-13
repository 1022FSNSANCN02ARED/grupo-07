import React, { useEffect, useState } from "react";

function TotalBrands() {
  // [variable a consultar, dar valor]= vacio
  const [brandsCant, setBrandsCant] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products/api/marca", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((infobrandsCant) => {
      infobrandsCant.json().then((totalBrands) => {
        setBrandsCant(totalBrands.data);
      });
    });
  }, []);
  return (
    <div className="totalBrands">
      <span>Total de marcas</span>
      <span className="brandNum">{brandsCant.length}</span>
    </div>
  );
}
export default TotalBrands;
