import Navigator from '../components/Navigator';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contacto from '../components/Contacto';

function Contactar() {
    return (
        <>
            <Navigator />

            <header className='contactar-header'>
                <Header
                    title={"Contáctanos"}
                    description={"Si tienes alguna duda o pregunta, no dudes en ponerte en contacto con nosotros a través de nuestro formulario."}
                />
            </header>

            <main className='contactar-main'>
                <Contacto />
            </main>

            <footer className='contactar-footer'>
                <Footer />
            </footer>
        </>
    );
}

export default Contactar;
