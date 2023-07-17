import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Layout() {
    return (
        <div className="text-slate-800 bg-gradient-to-r h-full ">
            <Outlet />
            <Footer />
        </div>
    );
}
