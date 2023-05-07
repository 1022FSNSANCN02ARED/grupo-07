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
        //console.log(lastUser);
        setLastUser(lastUser.data);
      });
    });
  }, []);
  //console.log(LastUser);
    return (
        <div className="LastUser">
            <img src={"http://localhost:3001"+LastUser.avatar} width="250px" height="250px"  />
            <div className='infoUsers' />
            <ul>
                <li>Id: {LastUser.id}</li>
                <li>Nombre: {LastUser.nombre}</li>
                <li>Apellido: {LastUser.apellido}</li>
                <li>Email: {LastUser.email}</li>
                <li>RolId: {LastUser.rolId}</li>
            </ul>
        </div>
    )
}
export default LastUser;