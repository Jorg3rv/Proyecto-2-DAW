import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import PartidaPage from '../pages/PartidaPage';
import VictoriaPage from '../pages/VictoriaPage';
import FracasoPage from '../pages/FracasoPage';
import PrePartida from '../pages/PrePartida';
import AgresivaPage from '../pages/AgresivaPage';
import PasivaPage from '../pages/PasivaPage';
import CreacionPage from '../pages/CreacionPage';
import CreacionItinerarioPage from '../pages/CreacionItinerarioPage';
import ModificarPage from '../pages/ModificarPage';
import GestionPage from '../pages/GestionPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/main" element={<ProtectedRoute component={<MainPage />} />} />
                <Route path="/gestionar" element={<ProtectedRoute component={<GestionPage />} />} />
                <Route path="/partida" element={<ProtectedRoute component={<PartidaPage />} />} />
                <Route path="/fracaso" element={<ProtectedRoute component={<FracasoPage />} />} />
                <Route path="/victoria" element={<ProtectedRoute component={<VictoriaPage />} />} />
                <Route path="/prePartida" element={<ProtectedRoute component={<PrePartida />} />} />
                <Route path="/agresiva" element={<ProtectedRoute component={<AgresivaPage />} />} />
                <Route path="/pasiva" element={<ProtectedRoute component={<PasivaPage />} />} />
                <Route path="/crear-partida" element={<ProtectedRoute component={<CreacionPage />} />} />
                <Route path="/crear-itinerario" element={<ProtectedRoute component={<CreacionItinerarioPage />} />} />
                <Route path="/modificar-partida" element={<ProtectedRoute component={<ModificarPage />} />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
