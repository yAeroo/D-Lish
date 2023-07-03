// Librería para el manejo de rutas y autentificación
import { createBrowserRouter } from 'react-router-dom';
// Layouts
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';
import Profile from './layouts/Profile';
// Componentes importados
import Index from './views/Index';
import Login from './views/Auth/Login.jsx';
import Register from './views/Auth/Register';
import Settings from './views/Settings';
import Homepage from './views/Homepage';
import Logs from './views/Logs';
import CafetinView from './views/CafetinView';
import TestModel from './views/TestModel';
import Order from './views/Order';
import Dish from './views/Dish';


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
        //Pagina de Ordenar
        path: '/order',
        element: <Order/>
    },
    {
        //Pagina del Platillo
        path: '/dish',
        element: <Dish />
    },
    {
        path: '/cafetinView',
        element: <CafetinView />
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
