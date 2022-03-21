import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-help'>
                <ul>
                    <li>Ayuda</li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Centro de Soporte</a></li>
                    <li><Link to="/contactar">Contacto</Link></li>
                </ul>
            </div>
            <div className='footer-help'>
                <ul>
                    <li>Legal</li>
                    <li><a href="#">Nota legal</a></li>
                    <li><a href="#">Condiciones de uso</a></li>
                    <li><a href="#">Política de privacidad y cookies</a></li>
                </ul>
            </div>
            <div className='footer-help'>
                <ul>
                    <li>Social</li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Youtube</a></li>
                </ul>
            </div>
        </div>
    );
}