import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="text-slate-800 bg-gray-100 bg-gradient-to-r h-full">
            <Outlet />
        </div>
    );
}
