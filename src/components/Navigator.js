export default function Navigator() {
    return (
        <nav className="navbar sticky">
            <h1 className="navbar-header"><a href="/">Ejercítate</a></h1>
            <ul className="nav">
                <li><a href="/">Inicio</a></li>
                <li><a href="/ejercicios">Ejercicios</a></li>
                <li><a href="/dietas">Dietas</a></li>
                <li><a href="/contactar">Contactar</a></li>
            </ul>
        </nav>
    );
}