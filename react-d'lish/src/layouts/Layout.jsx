import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Nav/Navbar";
import NavIndex from "../components/Nav/NavIndex";
import Carrousel from "../components/Carrousel";
import useUser from "../hooks/useUser";
import { useAuth } from "../hooks/useAuth";

export default function Layout() {
    const { user, error } = useAuth({ middleware: 'auth' });

    return (
        <div className="text-slate-800 bg-gradient-to-r h-full ">
            {/* NavBar Flotante */}
            <div className='absolute w-full z-10'>
                <NavIndex />
            </div>
            <Outlet />
            
            <Footer />
        </div>
    );
}
