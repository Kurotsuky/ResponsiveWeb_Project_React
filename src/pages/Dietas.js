import Navigator from '../components/Navigator';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ArticlesList from '../components/ArticlesList';

function Dietas() {
    let categories = ["Volumen", "Definicion", "Carnivoro", "Hervívoro", "Omnívoro"];

    return (
        <>
            <Navigator />

            <header className='dietas-header'>
                <Header
                    title={"Dietas"}
                    description={"Dietas para cuidar tu salud y cumplir tus objetivos."}
                    categories={categories}
                />
            </header>

            <main className='dietas-main'>
                <ArticlesList title={"Últimas dietas"} />
            </main>

            <footer className='dietas-footer'>
                <Footer />
            </footer>
        </>
    );
}

export default Dietas;
