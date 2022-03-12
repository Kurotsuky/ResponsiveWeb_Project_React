import { Helmet } from 'react-helmet';
import Navigator from '../components/Navigator';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ArticlesList from '../components/ArticlesList';

function Ejercicios() {
    let categories = ["Pecho", "Espalda", "Hombros", "Tríceps", "Bíceps", "Abdominal", "Cuádriceps", "Glúteos", "Isquiotibiales", "Gemelos"];

    return (
        <>
            <Helmet>
                <title>Ejercicios - Ejercítate</title>
            </Helmet>

            <Navigator />

            <header className='ejercicios-header'>
                <Header
                    title={"Ejercicios"}
                    description={"Todo lo que necesitaras para completar tu rutina, y tener una buena salud"}
                    categories={categories}
                />
            </header>

            <main className='ejercicios-main'>
                <ArticlesList
                    title={"Últimos ejercicios"}
                    type={'ejercicio'}
                />
            </main>

            <footer className='ejercicios-footer'>
                <Footer />
            </footer>
        </>
    );
}

export default Ejercicios;
