import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div>
            {/* Espacio en donde va a imprimir a los hijos */}
            <Outlet />
        </div>
    );
}
