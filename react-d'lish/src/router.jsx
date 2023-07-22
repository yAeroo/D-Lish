// Librería para el manejo de rutas y autentificación
import { createBrowserRouter } from 'react-router-dom';
// Layouts
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';
import ProfileLayout from './layouts/ProfileLayout';
import IndexAdminLayout from './layouts/IndexAdminLayout';
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
import Page404 from './views/Page404';
import VentasAdmin from './views/VentasAdmin';
import IndexAdmin from './views/IndexAdmin';



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
        path: "*",
       element: <Page404/>
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
            },
        ]
    },
    {
        //Base de vistas del Admin
        path: '/indexadmin',
        element: <IndexAdminLayout/>,
        children: [
            {
                index: true,
                element: <IndexAdmin />
            },
            {
                path: '/indexadmin/ventasadmin',
                element: <VentasAdmin />
            },
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
