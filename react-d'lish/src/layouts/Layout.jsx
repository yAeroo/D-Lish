import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Nav/Navbar";
import NavIndex from "../components/Nav/NavIndex";
import Carrousel from "../components/Carrousel";

export default function Layout() {
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
