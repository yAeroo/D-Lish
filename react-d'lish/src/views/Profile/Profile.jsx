// Componentes
import Preferences from "../../components/Profile/Preferences";
import { Link } from "react-router-dom";
import ProfileInfo from "../../components/Profile/ProfileInfo";
// Protección de rutas
import { useAuth } from "../../hooks/useAuth";

// Icons
import { BiLogOut } from "react-icons/bi";
import { PiNotePencilBold } from "react-icons/pi";
import { IoChevronBackSharp } from "react-icons/io5";
import { useEffect } from "react";
import RegresarProfile from "../../components/Profile/RegresarProfile";

export default function Profile() {
    const { logout, user } = useAuth({ middleware: 'auth' });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            {/* Botones de edición y regresar */}
            <div id="pf-bttns" className="relative">

                <RegresarProfile url="/" />

                <div id="edit-bttn" className="fu-custom animate-fade-left absolute top-5 right-[5%] md:right-[3%] lg:right-[10%]">
                    <Link to="/profile/settings" className="flex bg-secondary hover:bg-base-100 transition-all rounded-full p-2 md:px-5 ">
                        <span className="mr-2 profile-bttn-text">
                            Editar perfil
                        </span>
                        <span> <PiNotePencilBold size={"25"} color={"white"} /> </span>
                    </Link>
                </div>
            </div>

            {/* Información de perfil */}
            <ProfileInfo user={user} />

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
