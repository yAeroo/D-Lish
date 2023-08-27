import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useAuth } from "../hooks/useAuth";
import NavCafetin from "../components/Nav/NavCafetin";

export default function Layout() {
    const { user, error } = useAuth({ middleware: 'auth' });

    return (
        <div className="text-white bg-gradient-to-r h-full ">

            <section className="absolute top-0 md:left-0 w-full z-10 text-white">
                <NavCafetin />
            </section>

            <Outlet />

            <Footer />
        </div>
    );
}
