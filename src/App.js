import './css/main.css';
import './css/index.css';
import './css/ejercicios.css';
import './css/dietas.css';
import './css/contactar.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Ejercicios from './pages/Ejercicios';
import Dietas from './pages/Dietas';
import Contactar from './pages/Contactar';

function App() {
  return (
    <HashRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/ejercicios" element={<Ejercicios />} />

        <Route path="/dietas" element={<Dietas />} />

        <Route path="/contactar" element={<Contactar />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
