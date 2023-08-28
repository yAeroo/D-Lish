import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Router
import router from './router'
//Translate
import "./lang/i18n"
// Context
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { CafeteriasProvider } from './context/CafeteriasProvider';
import { OrdersProvider } from './context/OrdersProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CafeteriasProvider>
            <OrdersProvider>
                <RouterProvider router={router} />
                <ToastContainer className="z-40" />
            </OrdersProvider>
        </CafeteriasProvider>
    </React.StrictMode>
)