import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navigator from '../components/Navigator';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ArticlesList from '../components/ArticlesList';

function Ejercicios() {
    const categories = ["Pecho", "Espalda", "Hombros", "Triceps", "Biceps", "Abdominal", "Cuadriceps", "Gluteos", "Isquiotibiales", "Gemelos"];
    const [activeCategories, setActiveCategories] = useState([]);

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
                    setCategories={setActiveCategories}
                />
            </header>

            <main className='ejercicios-main'>
                <ArticlesList
                    title={"Últimos ejercicios"}
                    type={'ejercicio'}
                    activeCategories={activeCategories}
                />
            </main>

            <footer className='ejercicios-footer'>
                <Footer />
            </footer>
        </>
    );
}

export default Ejercicios;
