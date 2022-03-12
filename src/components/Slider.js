export default function Slider() {
    return (
        <div class="slider-container">
            <ul class="slider">
                <li>
                    <a href="#">
                        <img src={require('../images/pressbanca.jpeg')} alt="Ejercicios de pectoral" />
                        <div class="slider-description">
                            <h2 class="slider-description-text">Pectoral</h2>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={require('../images/dominadas.jpg')} alt="Ejercicios de espalda" />
                        <div class="slider-description">
                            <h2 class="slider-description-text">Espalda</h2>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={require('../images/pressmilitar.jpg')} alt="Ejercicios de hombros" />
                        <div class="slider-description">
                            <h2 class="slider-description-text">Hombros</h2>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={require('../images/abdominales.jpg')} alt="Ejercicios de abdominal" />
                        <div class="slider-description">
                            <h2 class="slider-description-text">Abdominales</h2>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={require('../images/sentadillas.jpg')} alt="Ejercicios de pierna" />
                        <div class="slider-description">
                            <h2 class="slider-description-text">Piernas</h2>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}