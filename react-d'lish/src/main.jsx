import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Auth
import { AuthProvider } from './context/AuthContext'
// Router
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer className="z-40" />
    </AuthProvider>
    // </React.StrictMode>
)