import Pagination from '../components/Pagination';


export default function ArticlesList(props) {
    return (
        <section class="articles-list">
            <h2>{props.title}</h2>
            <article>
                <div class="article-content">
                    <a href="#">
                        <img src={require('../images/ejercicios/pectoral.jpg')} alt="" />
                        <h2>Press Banca</h2>
                    </a>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dicta doloribus ea iste animi consectetur quaerat esse ipsum fuga harum tempora accusantium, aperiam molestias, velit unde perspiciatis. Qui, eveniet fugiat.</p>
                </div>
            </article>
            <article>
                <div class="article-content">
                    <a href="#">
                        <img src={require('../images/ejercicios/pectoral.jpg')} alt="" />
                        <h2>Press Banca</h2>
                    </a>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dicta doloribus ea iste animi consectetur quaerat esse ipsum fuga harum tempora accusantium, aperiam molestias, velit unde perspiciatis. Qui, eveniet fugiat.</p>
                </div>
            </article>
            <article>
                <div class="article-content">
                    <a href="#">
                        <img src={require('../images/ejercicios/pectoral.jpg')} alt="" />
                        <h2>Press Banca</h2>
                    </a>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dicta doloribus ea iste animi consectetur quaerat esse ipsum fuga harum tempora accusantium, aperiam molestias, velit unde perspiciatis. Qui, eveniet fugiat.</p>
                </div>
            </article>
            <article>
                <div class="article-content">
                    <a href="#">
                        <img src={require('../images/ejercicios/pectoral.jpg')} alt="" />
                        <h2>Press Banca</h2>
                    </a>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dicta doloribus ea iste animi consectetur quaerat esse ipsum fuga harum tempora accusantium, aperiam molestias, velit unde perspiciatis. Qui, eveniet fugiat.</p>
                </div>
            </article>
            <Pagination />
        </section>
    );
}