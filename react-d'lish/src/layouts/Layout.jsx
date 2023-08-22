import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Nav/Navbar";
import Carrousel from "../components/Carrousel";
import { useAuth } from "../hooks/useAuth";

export default function Layout() {
    const { user, error } = useAuth({ middleware: 'auth' });

    return (
        <div className="text-white bg-gradient-to-r h-full ">

            <Outlet />

            <Footer />
        </div>
    );
}
