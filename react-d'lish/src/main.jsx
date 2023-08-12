import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Router
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <ToastContainer className="z-40" />
    </React.StrictMode>,
)