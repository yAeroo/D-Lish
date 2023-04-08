import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="text-slate-800">
            <Outlet />
        </div>
    );
}
