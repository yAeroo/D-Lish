import { Outlet } from "react-router-dom";
// Componentes
import PostAuthNavbar from "../components/Post-AuthNavbar";

export default function ProfileLayout() {
    return (
        <>
            <PostAuthNavbar />

            <section id="profile" className="min-h-screen bg-profile bg-cover flex items-end justify-center pt-40">
                <article id="profile-info" className="bg-neutral min-h-[70vh] sm:w-10/12 w-full sm:rounded-t-3xl p-5 shadow-black shadow-lg transition-all flex flex-col">

                    {/* Impresión del componente correspondiente */}
                    <Outlet />

                    {/* Botón para cerrar sesión que no cierra sesión jaja */}
                    <form className="flex justify-center h-full pb-12">
                        <button type="submit" className="btn bg-prim text-white w-6/12 self-end">
                            Cerrar Sesión
                        </button>
                    </form>
                </article>
            </section>
        </>
    );
}
