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
  console.log(brandsList);
}
export default BrandsList;
