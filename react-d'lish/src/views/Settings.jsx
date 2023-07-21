import { Link } from "react-router-dom";

// Componentes
import ProfileInfo from "../components/ProfileInfo"
import ProfileSetttings from "../components/ProfileSetttings";
import ProfilePfp from "../components/ProfilePfp";

import { ToastContainer, toast, Slide } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// Icon
import { TbCameraPlus } from "react-icons/tb";
import { BiSave } from "react-icons/bi";
import { IoChevronBackSharp } from "react-icons/io5";

export default function Settings() {

    const success = "success-noti";
    const notify_success = () => toast.success("¡Cambios guardados con exito!", {
        autoClose: 2000,
        theme: "dark",
        toastId: success,
        transition: Slide,
        className: "!bg-[#191E2B] !font-body !py-2"
    });

    const error = "error-noti";
    const notify_error = () => toast.error("¡Oops! Ha ocurrido un error...", {
        autoClose: 2000,
        theme: "dark",
        toastId: error,
        transition: Slide,
        className: "!bg-[#191E2B] !font-body !py-2"
    });

    return (
        <>
            <div id="pf-bttns" className="relative">

                {/* Cambio de foto de perfil */}
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

            {/* Campos de configuración */}
            <ProfileSetttings />

            {/* Guardar cambios */}
            <div className="flex justify-center h-full pb-12">
                <button onClick={notify_success}>
                    <div className="flex bg-prim rounded-full p-2 md:px-5 ">
                        <span> <BiSave size={"25"} color={"white"} /> </span>
                        <span className="mx-2 profile-bttn-text !block">
                            Guardar cambios
                        </span>
                    </div>
                    <ToastContainer />
                </button>

                <button onClick={notify_error}>
                    <div className="flex bg-red-500 rounded-full p-2 md:px-5 ">
                        <span> <BiSave size={"25"} color={"white"} /> </span>
                        <span className="mx-2 profile-bttn-text !block">
                            ERROR
                        </span>
                    </div>
                    <ToastContainer />
                </button>
            </div>
        </>
    )
}
