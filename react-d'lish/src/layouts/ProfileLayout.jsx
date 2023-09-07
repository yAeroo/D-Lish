import { Outlet } from "react-router-dom";
// Componentes
import Footer from "../components/Footer"
// Validación de Auth
import { useAuth } from "../hooks/useAuth";

export default function ProfileLayout() {
    useAuth({ middleware: 'auth' });

    return (
        <>
            <section id="profile" className="min-h-screen bg-gradient-to-b from-orange-600 to-violet-900 flex items-end justify-center pt-32 md:pt-60">

                <article id="profile-info" className="bg-base-100 min-h-[70vh] max-w-full sm:w-full md:px-[1rem] lg:px-[3rem] xl:px-[8rem] 2xl:px-[11rem] w-full sm:rounded-t-3xl p-5 transition-all flex flex-col shadow-profile">
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
