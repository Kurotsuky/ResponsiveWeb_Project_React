import { useEffect, useState } from "react";

export default function Navigator() {
    const [isOpen, setIsOpen] = useState(false);
    const [menuHTML, setMenuHTML] = useState();
    const [navOpenedBackground, setNavOpenedBackground] = useState();

    const outsideEvent = () => {
        window.addEventListener('click', function (e) {
            let navBarBackground = document.querySelectorAll(".nav-opened-background")[0];
            if (navBarBackground != null && navBarBackground.contains(e.target)) {
                openNav("menuButton", "nav");
            }
        })
    }

    const openNav = (buttonId, menuid) => {
        let menuButton = document.getElementById(buttonId);
        let menu = document.getElementById(menuid);

        if (window.innerWidth < 720) {
            menu.classList.toggle('nav-opened');
            menu.innerHTML = !isOpen
                ? menuHTML + navOpenedBackground
                : menuHTML;
            menuButton.innerHTML = !isOpen
                ? '<img src="images/cerrar.png" />'
                : '<img src="images/menu.png" />';
            setIsOpen(prevValue => !prevValue);
        }
    }

    useEffect(() => {
        let menu = document.getElementById('nav');
        setMenuHTML(menu.innerHTML);
        setNavOpenedBackground('<div class="nav-opened-background"><div/>');

        outsideEvent();
    }, []);

    return (
        <nav className="navbar sticky">
            <h1 className="navbar-header"><a href="/">Ejercítate</a></h1>
            <ul className="nav" id="nav">
                <li><a href="/">Inicio</a></li>
                <li><a href="/ejercicios">Ejercicios</a></li>
                <li><a href="/dietas">Dietas</a></li>
                <li><a href="/contactar">Contactar</a></li>
            </ul>
            <button
                className="menu-button"
                id="menuButton"
                onClick={() => openNav("menuButton", "nav")}
            >
                <img src='images/menu.png' />
            </button>
        </nav>
    );
}