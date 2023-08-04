import { Outlet } from "react-router-dom";
// Componentes
import PostAuthNavbar from "../components/Post-AuthNavbar";
import NavIndex from "../components/NavIndex";
import Footer from "../components/Footer"
// Validación de Auth
import { useAuth } from "../hooks/useAuth";

export default function ProfileLayout() {
    const { user, error } = useAuth({ middleware: 'auth' });

    console.log(user);
    console.log(error);

    return (
        <>
            {/* NavBar Flotante */}
            <div className='absolute w-full z-10'>
                <NavIndex />
            </div>

            <section id="profile" className="min-h-screen profile-banner bg-cover flex items-end justify-center pt-60">
                <article id="profile-info" className="bg-[#202949] min-h-[70vh] sm:w-10/12 w-full sm:rounded-t-3xl p-5 transition-all flex flex-col shadow-profile ">

                    {/* Impresión del componente correspondiente */}
                    <Outlet />
                </article>
            </section>

            <Footer />
        </>
    );
}
