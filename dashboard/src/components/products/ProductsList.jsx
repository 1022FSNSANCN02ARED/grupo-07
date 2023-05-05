import React from "react";

function ProductList() {
  return (
    <div className="ProductsContainer">
    <div className="ProductList">
      <ul>
        <li>Id</li> <input type="submit">Modificar</input><input type="submit">Eliminar</input>
        <li>Nombre</li> <input type="submit">Modificar</input><input type="submit">Eliminar</input>
        <li>Precio</li> <input type="submit">Modificar</input><input type="submit">Eliminar</input>
        <li>Descripcion</li> <input type="submit">Modificar</input><input type="submit">Eliminar</input>
        <li>MarcaId</li> <input type="submit">Modificar</input><input type="submit">Eliminar</input>
        <li>GamaId</li> <input type="submit">Modificar</input><input type="submit">Eliminar</input>
        <li>img</li> <input type="submit">Modificar</input><input type="submit">Eliminar</input>
        <li>Sockets</li> <input type="submit">Modificar</input><input type="submit">Eliminar</input>
        <li>Slots</li> <input type="submit">Modificar</input><input type="submit">Eliminar</input>
        <li>RAM</li> <input type="submit">Modificar</input><input type="submit">Eliminar</input>
      </ul>
    </div>

    <div>
      <p>Total de productos</p>
    </div>
    </div>
  );
}
export default ProductList;
