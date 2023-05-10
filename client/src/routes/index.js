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
import AgresivaEPage from '../pages/AgresivaEPage';
import PasivaEPage from '../pages/PasivaEPage';
import VictoriaEPage from '../pages/VictoriaEPage';
import FracasoEPage from '../pages/FracasoEPage';
import EquipoPage from '../pages/EquipoPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedRoute component={<LoginPage />} />,
    },
    {
        path: '/main',
        element: <MainPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/partida',
        element: <PartidaPage />,
    },
    {
        path: '/fracaso',
        element: <FracasoPage />,
    },
    {
        path: '/victoria',
        element: <VictoriaPage />,
    }
    ,
    {
        path: '/prePartida',
        element: <PrePartida />,
    },
    {
        path: '/agresiva',
        element: <AgresivaPage />,
    },
    {
        path: '/pasiva',
        element: <PasivaPage />,
    },
    {
        path: '/crear-partida',
        element: <CreacionPage />,
    }
    ,
    {
        path: '/pasivaE',
        element: <PasivaEPage />,
    },
    {
        path: '/agresivaE',
        element: <AgresivaEPage />,
    },
    {
        path: '/victoriaE',
        element: <VictoriaEPage />,
    },
    {
        path: '/fracasoE',
        element: <FracasoEPage />,
    },
    {
        path: '/equipo',
        element: <EquipoPage />,
    }
])