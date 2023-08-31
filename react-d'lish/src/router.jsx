// Librería para el manejo de rutas y autentificación
import { createBrowserRouter } from 'react-router-dom';
// Layouts
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';
import ProfileLayout from './layouts/ProfileLayout';
import CafeteriaLayout from './layouts/CafeteriaLayout';
import AdminLayout from './layouts/AdminLayout';
// Componentes importados
import Index from './views/Index';
import Search from "./views/Search";
import AuthSelection from './views/Auth/AuthSelection';
import Login from './views/Auth/Login.jsx';
import Register from './views/Auth/Register';
import Homepage from './views/Homepage';
import Logs from './views/Profile/Logs';
import CafetinView from './views/CafetinView';
import Order from './views/Profile/Order';
import Dish from './views/Dish';
import Profile from './views/Profile/Profile';
import Settings from './views/Profile/Settings';
import Page404 from './views/Page404';
import IndexAdmin from './views/Admin/Index';
import ProfileAdmin from './views/Admin/ProfileAdmin';
import DeliveryMode from './views/DeliveryMode';
import DeliveryModeAdmin from './views/Admin/DeliveryModeAdmin';
import Menu from './views/Admin/Menu';

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
        path: '/cafeteria',
        // Componente a mostrar ó Layout
        element: <CafeteriaLayout />,
        // Subcomponentes ó "hijos"
        children: [
            {
                index: true,
                element: <Page404 />
            },
            ,
            {
                // Ruta dinamica
                path: '/cafeteria/:cafeteriaId',
                element: <CafetinView />
            },
            {
                // Página del Platillo
                path: '/cafeteria/:cafeteriaId/dish/:dishId',
                element: <Dish />
            }
        ]
    },
    {
        // Página de Ordenar
        path: '/confirmed-order',
        element: <Order />
    },
    {
        // Página Search Mobile
        path: '/search',
        element: <Search />
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <AuthSelection />
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
            },
        ]
    },
    {
        // Base homepage
        path: '/homepage',
        element: <Homepage />,
        index: true
    },
    {
        // Página del QR
        path: '/delivmode',
        element: <DeliveryMode />
    },
    {
        path: "*",
        element: <Page404 />
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
            ,
            {
                path: '/profile/logs',
                element: <Logs />
            }
        ]
    },
    {
        //Base de vistas del Admin
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <IndexAdmin />
            },
            {
                path: '/admin/profile',
                element: <ProfileAdmin />
            },
            {
                path: '/admin/delivmode',
                element: <DeliveryModeAdmin />

            },
            {
                path: '/admin/products',
                // element: <ProductAdmin />
                element: <Menu />
            }
        ]

    }
]);

export default router;
