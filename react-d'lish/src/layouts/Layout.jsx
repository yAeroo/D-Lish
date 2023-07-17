import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Carrousel from "../components/Carrousel";

export default function Layout() {
    return (
        <div className="text-slate-800 bg-gradient-to-r h-full ">
            {/* NavBar Flotante */}
            <div className='absolute w-full z-10'>
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
}
