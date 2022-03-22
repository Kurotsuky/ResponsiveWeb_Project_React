import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-help'>
                <ul>
                    <li>Ayuda</li>
                    <li><Link to="#">FAQ</Link></li>
                    <li><Link to="#">Centro de Soporte</Link></li>
                    <li><Link to="/contactar">Contacto</Link></li>
                </ul>
            </div>
            <div className='footer-help'>
                <ul>
                    <li>Legal</li>
                    <li><Link to="#">Nota legal</Link></li>
                    <li><Link to="#">Condiciones de uso</Link></li>
                    <li><Link to="#">Política de privacidad y cookies</Link></li>
                </ul>
            </div>
            <div className='footer-help'>
                <ul>
                    <li>Social</li>
                    <li><Link to="#">Facebook</Link></li>
                    <li><Link to="#">Instagram</Link></li>
                    <li><Link to="#">Youtube</Link></li>
                </ul>
            </div>
        </div>
    );
}