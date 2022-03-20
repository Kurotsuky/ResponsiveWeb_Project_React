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
    <BrowserRouter>
      <Routes>

        <Route path="/ResponsiveWeb_Project_React" element={<Home />} />

        <Route path="/ResponsiveWeb_Project_React/ejercicios" element={<Ejercicios />} />

        <Route path="/ResponsiveWeb_Project_React/dietas" element={<Dietas />} />

        <Route path="/ResponsiveWeb_Project_React/contactar" element={<Contactar />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
