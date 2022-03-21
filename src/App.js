import './css/main.css';
import './css/index.css';
import './css/ejercicios.css';
import './css/dietas.css';
import './css/contactar.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Ejercicios from './pages/Ejercicios';
import Dietas from './pages/Dietas';
import Contactar from './pages/Contactar';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route path="ejercicios" element={<Ejercicios />} />

        <Route path="dietas" element={<Dietas />} />

        <Route path="contactar" element={<Contactar />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
