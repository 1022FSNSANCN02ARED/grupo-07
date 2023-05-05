import React from 'react';
import logo from '../assets/img/logo-DH.png'; 

function Menu(){
    return (
        <div className="Menu">
            <nav id="logo">
                <a href="#"><img src={logo} alt="Logo Argon"/></a>
            </nav>
            <nav id="opciones">
                <ul>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Usuarios</a></li>
                    <li><a href="#">Argon</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu;