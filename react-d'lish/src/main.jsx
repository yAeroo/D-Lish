import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Router
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import router from './router'
import { CafeteriasProvider } from './context/CafeteriasProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CafeteriasProvider>
            <RouterProvider router={router} />
            <ToastContainer className="z-40" />
        </CafeteriasProvider>
    </React.StrictMode>
)