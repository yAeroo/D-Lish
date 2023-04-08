// Librería para autentificación y rutas
import { createBrowserRouter } from 'react-router-dom';
// Layouts
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';
// Componentes importados
import Index from './views/Index';
import Login from './views/Login.jsx';
import Register from './views/Register';

const router = createBrowserRouter([
    {
        // IGNOREN ESTO
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />
            },
        ],
    },
    {
        // Plantilla Padre
        path: '/auth',
        element: <AuthLayout />,
        children: [
            // Definición de sus hijos
            {
                path: '/auth/login',
                // Coponente llamado
                element: <Login />
            },
            {
                path: '/auth/register',
                // Coponente llamado
                element: <Register />
            },
        ],
    },
]);

export default router;
