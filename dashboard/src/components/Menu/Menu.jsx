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
    <div className="Menu">
        <nav id="#">
          <a href="#">
            <img src={logo} alt="Logo Argon" />
          </a>
        </nav>
        <nav id="opciones">
          <ul>
            <Link to="/Products">
              <li>Productos</li>
            </Link>
            <Link to="/Users">
              <li>Usuarios</li>
            </Link>
            <a href="#">
              <li>Argon</li>
            </a>
          </ul>
        </nav>
    </div>
  );
}
export default Menu;
