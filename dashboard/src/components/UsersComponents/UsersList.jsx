import React, { useEffect,useState } from "react";

function UsersList() {
  const [users,setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/users/api/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((infoProduct)=>{
      infoProduct.json().then((usersList)=>{
        console.log(usersList);
        setUsers(usersList.data);
      });

    });
  }, []);
  console.log(users);
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
