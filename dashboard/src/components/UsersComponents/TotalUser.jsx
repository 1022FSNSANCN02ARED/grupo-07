import React, { useEffect, useState } from "react";

function TotalUser() {
  // [variable a consultar, dar valor]= vacio
  const [usersCant, setUsersCant] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/users/api/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((infoUsersCant) => {
      infoUsersCant.json().then((totalUser) => {

        setUsersCant(totalUser.data);
      });
    });
  }, []);

  return (<div>
    <span>Total de usuarios</span>
    <br />
    <span>{usersCant.length}</span>
  </div>);
}
export default TotalUser