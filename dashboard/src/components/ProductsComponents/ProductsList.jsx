import React from "react";

function ProductsList() {
  return (
    <div className="ProductsContainer">
      <div className="ProductList">
        <ul>
          <li>Id</li> <button type="submit">Modificar</button>
          <button type="submit">Eliminar</button>
          <li>Nombre</li> <button type="submit">Modificar</button>
          <button type="submit">Eliminar</button>
          <li>Precio</li> <button type="submit">Modificar</button>
          <button type="submit">Eliminar</button>
          <li>Descripcion</li> <button type="submit">Modificar</button>
          <button type="submit">Eliminar</button>
          <li>MarcaId</li> <button type="submit">Modificar</button>
          <button type="submit">Eliminar</button>
          <li>GamaId</li> <button type="submit">Modificar</button>
          <button type="submit">Eliminar</button>
          <li>img</li> <button type="submit">Modificar</button>
          <button type="submit">Eliminar</button>
          <li>Sockets</li> <button type="submit">Modificar</button>
          <button type="submit">Eliminar</button>
          <li>Slots</li> <button type="submit">Modificar</button>
          <button type="submit">Eliminar</button>
          <li>RAM</li> <button type="submit">Modificar</button>
          <button type="submit">Eliminar</button>
        </ul>
      </div>

      <div>
        <p>Total de productos</p>
      </div>
    </div>
  );
}
export default ProductsList;
