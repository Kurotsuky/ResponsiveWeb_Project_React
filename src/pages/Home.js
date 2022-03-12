import Navigator from '../components/Navigator';
import Slider from '../components/Slider';
import ArticlesList from '../components/ArticlesList';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Navigator />

            <header className='home-header'>
                <Slider />
            </header>

            <main className='home-main'>
                <ArticlesList title={"Últimos artículos"} />
            </main>

            <footer className='home-footer'>
                <Footer />
            </footer>
        </>
    );
}

export default Home;
