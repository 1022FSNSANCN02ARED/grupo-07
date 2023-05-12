import React from "react";
import logo from "./logo.png";
import { Products, Users } from "../../pages";

import {
  //redireccionamiento
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <nav id="#">
        <Link to="/">
          <img src={logo} alt="Logo Argon" />
        </Link>
      </nav>
      <nav className="opciones">
        <ul>
          <Link to="/Products">
            <li>Productos</li>
          </Link>
          <Link to="/Users">
            <li>Usuarios</li>
          </Link>
          <a href="http://localhost:3001/" target="about_blank">
            <li>Argon</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
export default Menu;
