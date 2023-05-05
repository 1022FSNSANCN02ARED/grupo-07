import React from "react";

function UsersList() {
  return (
    <div className="UserssContainer">
      <div className="UsersList">
        <ul>
          <li>Id</li>
          <li>Nombre</li>
          <li>Apellido</li>
          <li>Email</li>
          <li>RolId</li>
          <li>img</li>
        </ul>
      </div>

      <div>
        <p>Total de Usuarios</p>
      </div>
    </div>
  );
}
export default UsersList;
