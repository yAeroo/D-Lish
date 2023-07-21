// Componentes
import ProfileButtons from "../components/ProfileButtons";
import ProfileInfo from "../components/ProfileInfo";
import Preferences from "../components/Preferences";

export default function Profile() {
    return (
        <>
            {/* Botones de edición y fondos */}
            <ProfileButtons />
                        
            {/* Información de perfil */}
            <ProfileInfo />
        
            {/* Perefencias */}
            <Preferences />

            {/* Botón para cerrar sesión que no cierra sesión jaja */}
            <form className="flex justify-center h-full pb-12">
                <button type="submit" className="btn bg-prim text-white w-6/12 self-end">
                    Cerrar Sesión
                </button>
            </form>
        </>
    )
}
