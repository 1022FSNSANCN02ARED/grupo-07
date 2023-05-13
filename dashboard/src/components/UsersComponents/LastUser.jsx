import React, { useEffect, useState } from "react";


function LastUser(){
    // [variable a consultar, dar valor]= vacio
  const [LastUser, setLastUser] = useState({
    "id": "",
    "nombre": "",
    "apellido": "",
    "email": "",
    "avatar": "",
    "password": "",
    "telefono": "",
    "rolId": ""
});
  useEffect(() => {
    fetch("http://localhost:3001/users/api/last", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((infoLastUser) => {
      infoLastUser.json().then((lastUser) => {
        setLastUser(lastUser.data);
      });
    });
  }, []);
    return (
        <div className="lastUser">
            <img src={"http://localhost:3001"+LastUser.avatar} width="250px" height="250px"  />
            <div className='infoUser'>
            <ul>
                <li>Id: {LastUser.id}</li>
                <li>Nombre: {LastUser.nombre}</li>
                <li>Apellido: {LastUser.apellido}</li>
                <li>Email: {LastUser.email}</li>
                <li>Rol id: {LastUser.rolId}</li>
            </ul>
            </div>
        </div>
    )
}
export default LastUser;