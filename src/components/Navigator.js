import { useState } from "react";

export default function Navigator() {
    const [isOpen, setIsOpen] = useState(false);
    const openNav = (buttonId, menuid) => {
        let menuButton = document.getElementById(buttonId);
        let menu = document.getElementById(menuid);

        menu.classList.toggle('nav-opened');
        menuButton.innerHTML = !isOpen
            ? '<img src="images/cerrar.png" />'
            : '<img src="images/menu.png" />';
        setIsOpen(prevValue => !prevValue);
    }

    return (
        <nav className="navbar sticky">
            <h1 className="navbar-header"><a href="/">Ejercítate</a></h1>
            <ul className="nav" id="nav">
                <li><a href="/ResponsiveWeb_Project_React">Inicio</a></li>
                <li><a href="./pages/ejercicios">Ejercicios</a></li>
                <li><a href="./pages/dietas">Dietas</a></li>
                <li><a href="./pages/contactar">Contactar</a></li>
                <div className="nav-opened-background" onClick={() => openNav("menuButton", "nav")}></div>
            </ul>
            <button
                className="menu-button"
                id="menuButton"
                onClick={() => openNav("menuButton", "nav")}
            >
                <img src='images/menu.png' alt="" />
            </button>
        </nav>
    );
}