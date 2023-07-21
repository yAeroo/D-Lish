// Librería para el manejo de rutas y autentificación
import { createBrowserRouter } from 'react-router-dom';
// Layouts
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';
import ProfileLayout from './layouts/ProfileLayout';
// Componentes importados
import Index from './views/Index';
import Login from './views/Auth/Login.jsx';
import Register from './views/Auth/Register';
import Homepage from './views/Homepage';
import Logs from './views/Logs';
import CafetinView from './views/CafetinView';
import TestModel from './views/TestModel';
import Order from './views/Order';
import Dish from './views/Dish';
import Profile from './views/Profile';
import Settings from './views/Settings';



// Las rutas se manejan mediante un arreglo de objetos
const router = createBrowserRouter([
    {
        // Ruta
        path: '/',
        // Componente a mostrar ó Layout
        element: <Layout />,
        // Subcomponentes ó "hijos"
        children: [
            {
                index: true,
                element: <Index />
            }
        ]
    },
    {
        path: '/auth',
        element: < AuthLayout />,
        children: [
            {
                index: true,
                element: <p>Hola</p>
            },
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
    },
    {
        // Base homepage
        path: '/homepage',
        element: <Homepage />
    },
    {
        // Página de Ordenar
        path: '/order',
        element: <Order />
    },
    {
        // Página del Platillo
        path: '/dish',
        element: <Dish />
    },
    {
        path: '/cafetinView',
        element: <CafetinView />
    },
    {
        // Base perfil de usuario
        path: '/profile',
        element: <ProfileLayout />,
        children: [
            {
                index: true,
                element: <Profile />
            },
            {
                path: '/profile/settings',
                element: <Settings />
            }
        ]
    },
    {
        path: '/logs',
        element: <Logs />
    }
    
    // {
    //     path: '/testModel',
    //     element: <TestModel />
    // },
    // {
    //     path: '/',
    //     element: <Layout />,
    //     children: [
    //         {
    //             index: true,
    //             element: <Index />
    //         },
    //         {
    //             path: '/profile',
    //             element: <Profile />
    //         },
    //         {
    //             path: '/profile/settings',
    //             element: <Settings />
    //         },
    //         {
    //             path: '/logs',
    //             element: <Logs />
    //         },
    //         {
    //             path: '/cafetinView',
    //             element: <CafetinView />
    //         }
    //     ]
    // }
]);

export default router;
