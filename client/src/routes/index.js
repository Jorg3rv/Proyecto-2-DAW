import { createBrowserRouter } from 'react-router-dom';
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


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        path: '/main',
        element: <ProtectedRoute component={<MainPage />} />,
    },
    {
        path: '/partida',
        element: <ProtectedRoute component={<PartidaPage />} />,
    },
    {
        path: '/fracaso',
        element: <ProtectedRoute component={<FracasoPage />} />,
    },
    {
        path: '/victoria',
        element: <ProtectedRoute component={<VictoriaPage />} />,
    }
    ,
    {
        path: '/prePartida',
        element: <ProtectedRoute component={<PrePartida />} />,
    },
    {
        path: '/agresiva',
        element: <ProtectedRoute component={<AgresivaPage />} />,
    },
    {
        path: '/pasiva',
        element: <ProtectedRoute component={<PasivaPage />} />,
    },
    {
        path: '/crear-partida',
        element: <ProtectedRoute component={<CreacionPage />} />,
    },
    {
        path: '/crear-itinerario',
        element: <ProtectedRoute component={<CreacionItinerarioPage />} />,
    },
    {
        path: '/modificar-partida',
        element: <ProtectedRoute component={<ModificarPage />} />,
    }
])