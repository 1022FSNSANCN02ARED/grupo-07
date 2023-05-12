import React, { useEffect, useState } from "react";

function UsersList() {
  // [variable a consultar, dar valor]= vacio
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/users/api/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((infoUsers) => {
      infoUsers.json().then((usersList) => {
        setUsers(usersList.data);
      });
    });
  }, []);

  return (
    <table className="userTable">
      <caption>Lista de usuarios</caption>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th className="email">Email</th>
          <th>RolId</th>
          <th>Avatar</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={`user-${user.id}`}>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.email}</td>
              <td>{user.rolId}</td>
              <td>
                <img
                  src={"http://localhost:3001" + user.avatar}
                  alt=""
                  width="50px"
                  height="50px"
                />
              </td>
              <td>{user.telefono}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default UsersList;
