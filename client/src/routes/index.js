import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import PartidaPage from '../pages/PartidaPage';
import RedencionPage from '../pages/RedencionPage';
import VictoriaPage from '../pages/VictoriaPage';
import FracasoPage from '../pages/FracasoPage';
import PasivaPage from '../pages/PasivaPage';
import AgresivaPage from '../pages/AgresivaPage';
import PrePartidaPage from '../pages/PrePartida';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedRoute component={<MainPage />} />,
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
        path: '/redencion',
        element: <RedencionPage />,
    },
    {
        path: '/fracaso',
        element: <FracasoPage />,
    },
    {
        path: '/victoria',
        element: <VictoriaPage />,
    },
    {
        path: '/pasiva',
        element: <PasivaPage />,
    },
    {
        path: '/agresiva',
        element: <AgresivaPage />,
    },
    {
        path: '/prePartida',
        element: <PrePartidaPage />,
    }

    

])