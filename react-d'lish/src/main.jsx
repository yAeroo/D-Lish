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
import { OwnerProvider } from './context/OwnerProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CafeteriasProvider>
            <OwnerProvider>
                <OrdersProvider>
                    <RouterProvider router={router} />
                    <ToastContainer className="z-40" />
                </OrdersProvider>
            </OwnerProvider>
        </CafeteriasProvider>
    </React.StrictMode>
)