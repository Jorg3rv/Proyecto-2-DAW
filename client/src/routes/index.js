import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedRoute component={<MainPage />} />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    }
])