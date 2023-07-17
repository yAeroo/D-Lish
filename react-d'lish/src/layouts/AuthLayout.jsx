import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AuthLayout() {
    return (
        <div className="text-slate-800 bg-gradient-to-r h-full ">
            {/* Navbar sujeto a cambios (sections obligatorios si se desea el navbar redondo) */}
            <Navbar />
            <Outlet />
            <br /><br />
            <Footer />
        </div>
    );
}
