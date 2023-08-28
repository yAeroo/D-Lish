import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useAuth } from "../hooks/useAuth";

export default function Layout() {
    useAuth({ middleware: 'auth' });

    return (
        <div className="text-white bg-gradient-to-r h-full ">
            <Outlet />

            <Footer />
        </div>
    );
}
