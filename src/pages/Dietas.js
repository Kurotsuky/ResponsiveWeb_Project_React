import Navigator from '../components/Navigator';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ArticlesList from '../components/ArticlesList';

function Dietas() {

    return (
        <>
            <Navigator />

            <header className='dietas-header'>
                <Header
                    title={"Dietas"}
                    description={"Dietas para cuidar tu salud y cumplir tus objetivos."}
                />
            </header>

            <main className='dietas-main'>
                <ArticlesList
                    title={"Últimas dietas"}
                    type={'dieta'}
                />
            </main>

            <footer className='dietas-footer'>
                <Footer />
            </footer>
        </>
    );
}

export default Dietas;
