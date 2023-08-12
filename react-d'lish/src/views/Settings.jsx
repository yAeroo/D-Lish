import { Link } from "react-router-dom";

// Componentes
import ProfileInfo from "../components/ProfileInfo"
import ProfileSetttings from "../components/ProfileSetttings";
import ProfilePfp from "../components/ProfilePfp";

import "react-toastify/dist/ReactToastify.css";

// Icon
import { BiSave } from "react-icons/bi";
import { IoChevronBackSharp } from "react-icons/io5";

// Helper
import Notificacion from "../helper/Notify";

export default function Settings() {

    // Se define el Toast
    const toastSuccesId = "success-noti";
    // Se instancia con referencia al ID Definido
    const NotiExito = Notificacion(
        "success",
        toastSuccesId,
        '¡Cambios guardados con exito!',
        "!bg-[#191E2B] !font-body !py-2"
    );

    const toastErrorId = "error-noti";
    const NotiError = Notificacion(
        "error",
        toastErrorId,
        '¡Oops! Ha ocurrido un error...',
        "!bg-[#191E2B] !font-body !py-2"
    );

    return (
        <>
            <div id="pf-bttns" className="relative">

                {/* Botón cambio foto de perfil */}
                <ProfilePfp />

                <div id="edit-bttn" className="fu-custom animate-fade-right absolute top-8 left-[5%] md:left-[3%] lg:left-[10%]">
                    <Link to="/profile" className="flex rounded-full p-2 md:px-5 ">
                        <span> <IoChevronBackSharp size={"25"} color={"white"} /> </span>
                        <span className="ml-2 profile-bttn-text">
                            Regresar
                        </span>
                    </Link>
                </div>
            </div>

            {/* Foto y nombre */}
            <ProfileInfo />

            {/* Contenedor para centrar info */}
            <div className="flex flex-col flex-grow justify-center">
                {/* Campos de configuración */}
                <ProfileSetttings />

                {/* Guardar cambios */}
                <div className="flex justify-center h-full pb-12 fa-custom animate-fade">
                    <button onClick={NotiExito}>
                        <div className="flex bg-secondary rounded-full p-2 md:px-5 ">
                            <span> <BiSave size={"25"} color={"white"} /> </span>
                            <span className="mx-2 profile-bttn-text !block">
                                Guardar cambios
                            </span>
                        </div>
                    </button>

                    <button onClick={NotiError}>
                        <div className="flex bg-red-500 rounded-full p-2 md:px-5 ">
                            <span> <BiSave size={"25"} color={"white"} /> </span>
                            <span className="mx-2 profile-bttn-text !block">
                                ERROR
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}
