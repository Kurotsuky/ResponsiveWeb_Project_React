import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigator() {
    const [isOpen, setIsOpen] = useState(false);
    const openNav = (buttonId, menuid) => {
        let menuButton = document.getElementById(buttonId);
        let menu = document.getElementById(menuid);

        menu.classList.toggle('nav-opened');
        menuButton.innerHTML = !isOpen
            ? '<img src="/ResponsiveWeb_Project_React/images/cerrar.png" />'
            : '<img src="/ResponsiveWeb_Project_React/images/menu.png" />';
        setIsOpen(prevValue => !prevValue);
    }

    return (
        <nav className="navbar sticky">
            <h1 className="navbar-header"><a href="/ResponsiveWeb_Project_React">Ejercítate</a></h1>
            <ul className="nav" id="nav">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/ejercicios">Ejercicios</Link></li>
                <li><Link to="/dietas">Dietas</Link></li>
                <li><Link to="/contactar">Contactar</Link></li>
                <div className="nav-opened-background" onClick={() => openNav("menuButton", "nav")}></div>
            </ul>
            <button
                className="menu-button"
                id="menuButton"
                onClick={() => openNav("menuButton", "nav")}
            >
                <img src='/ResponsiveWeb_Project_React/images/menu.png' alt="" />
            </button>
        </nav>
    );
}