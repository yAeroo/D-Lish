// Librería para autentificación y rutas
import { createBrowserRouter } from 'react-router-dom';
// Layouts
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';
import Profile from './layouts/Profile';
// Componentes importados
import Index from './views/Index';
import Login from './views/Login.jsx';
import Register from './views/Register';
import Settings from './views/Settings';
import Homepage from './views/Homepage';
import Logs from './views/Logs';
import CafetinView from './views/CafetinView';
import testModel from './views/testModel';



const router = createBrowserRouter([
    {
        // Base homepage
        path: '/homepage',
        element: <Homepage />
    },
    
    {
        // IGNOREN ESTO
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/profile/settings',
                element: <Settings />
            },
            {
                path: '/logs',
                element: <Logs />
            },
            {
                path: '/cafetinView',
                element: <CafetinView />
            },
            {
                path: '/testModel',
                element: <testModel />
            }
        ]
    },
    {
        // Base Padre
        path: '/auth',
        element: <AuthLayout />,
        children: [
            // Definición de sus hijos
            {
                path: '/auth/login',
                // Coponente llamado
                element: <Login />,
            },
            {
                path: '/auth/register',
                // Coponente llamado
                element: <Register />,
            }
        ]
    }
]);

export default router;
