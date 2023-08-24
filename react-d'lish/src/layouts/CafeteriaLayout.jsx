import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useAuth } from "../hooks/useAuth";
import NavCafetin from "../components/Nav/NavCafetin";

export default function Layout() {
    const { user, error } = useAuth({ middleware: 'auth' });

    return (
        <div className="text-white bg-gradient-to-r h-full ">
            <section className="py-2 md:px-24">
                <div className="animate-fade-up animate-once animate-delay-[1300ms]">
                    <NavCafetin></NavCafetin>
                </div>
            </section>

            <Outlet />

            <Footer />
        </div>
    );
}
