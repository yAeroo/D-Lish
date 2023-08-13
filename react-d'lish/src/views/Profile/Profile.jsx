// Componentes
import Preferences from "../../components/Profile/Preferences";
// Protección de rutas
import { useAuth } from "../../hooks/useAuth";

// Icons
import { BiLogOut } from "react-icons/bi";

export default function Profile() {
    const { logout, user } = useAuth({ middleware: 'auth' })

    return (
        <>
            <div className="flex flex-col pt-4 flex-grow">
                {/* Perefencias */}
                <Preferences user={user} />

                {/* Botón para cerrar sesión que no cierra sesión jaja */}
                <div className="flex justify-center h-full pb-12 fa-custom animate-fade">
                    <button onClick={logout}>
                        <div className="flex bg-secondary rounded-full p-2 px-14">
                            <span> <BiLogOut size={"25"} color={"white"} /> </span>
                            <span className="mx-2 profile-bttn-text !block">
                                Cerrar sesión
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}
