export default function Slider() {
    return (
        <div className='slider-container'>
            <ul className='slider'>
                <li>
                    <a href="#">
                        <img src={require('../images/ejercicios/pectoral.jpg')} alt="Ejercicios de pectoral" />
                        <div className='slider-description'>
                            <h2 className='slider-description-text'>Pectoral</h2>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={require('../images/ejercicios/espalda.jpg')} alt="Ejercicios de espalda" />
                        <div className='slider-description'>
                            <h2 className='slider-description-text'>Espalda</h2>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={require('../images/ejercicios/hombros.jpg')} alt="Ejercicios de hombros" />
                        <div className='slider-description'>
                            <h2 className='slider-description-text'>Hombros</h2>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={require('../images/ejercicios/abdominal.jpg')} alt="Ejercicios de abdominal" />
                        <div className='slider-description'>
                            <h2 className='slider-description-text'>Abdominales</h2>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={require('../images/ejercicios/piernas.jpg')} alt="Ejercicios de pierna" />
                        <div className='slider-description'>
                            <h2 className='slider-description-text'>Piernas</h2>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}