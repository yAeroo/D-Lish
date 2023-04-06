// Librería para autentificación y rutas
import { createBrowserRouter } from "react-router-dom";
// Layouts
import AuthLayout from "./layouts/AuthLayout";
// Componentes importados
import Inicio from "./views/Inicio";
import Login from "./views/Login.jsx";
import Registro from "./views/Registro";

const router = createBrowserRouter([
    {
        // IGNOREN ESTO
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                // Coponente llamado
                element: <Inicio />,
            },
        ],
    },
    {
        // Plantilla Padre
        path: "/auth",
        element: <AuthLayout />,
        children: [
            // Definición de sus hijos
            {
                path: "/auth/login",
                // Coponente llamado
                element: <Login />,
            },
            {
                path: "/auth/registro",
                // Coponente llamado
                element: <Registro />,
            },
        ],
    },
]);

export default router;
