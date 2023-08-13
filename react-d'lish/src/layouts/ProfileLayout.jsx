import { Outlet } from "react-router-dom";
// Componentes
import PostAuthNavbar from "../components/Nav/Post-AuthNavbar";
import NavIndex from "../components/Nav/NavIndex";
import Footer from "../components/Footer"
// Validación de Auth
import { useAuth } from "../hooks/useAuth";
// Componentes
import ProfileInfo from "../components/Profile/ProfileInfo";

export default function ProfileLayout() {
    const { user, error } = useAuth({ middleware: 'auth' });

    return (
        <>
            {/* NavBar Flotante */}
            <div className='absolute w-full'>
                <NavIndex />
            </div>

            <section id="profile" className="min-h-screen profile-banner bg-cover flex items-end justify-center pt-32 md:pt-60">

                <article id="profile-info" className="bg-[#202949] min-h-[70vh] max-w-[65rem] sm:w-10/12 w-full sm:rounded-t-3xl p-5 transition-all flex flex-col shadow-profile">
                    <div className="w-full">

                        {/* Impresión del componente correspondiente */}
                        <Outlet />
                    </div>

                </article>
            </section>

            <Footer />
        </>
    );
}
