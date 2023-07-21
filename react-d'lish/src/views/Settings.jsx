import { Link } from "react-router-dom";
// Componentes
import ProfileInfo from "../components/ProfileInfo"
import ProfileSetttings from "../components/ProfileSetttings";
// Icon
import { TbCameraPlus } from "react-icons/tb";
import { BiSave } from "react-icons/bi";
import { IoChevronBackSharp } from "react-icons/io5";

export default function Settings() {
    return (
        <>
            <div id="pf-bttns" className="relative">
                <div id="edit-bttn" className="fu-custom animate-fade-left absolute top-8 right-[28%] xsm:right-[32%] lsm:right-[35%] md:right-[3%] lg:right-[10%]">
                    <Link to="/profile/settings" className="flex bg-prim rounded-full p-2 md:px-5 ">
                        <span className="mr-2 profile-bttn-text">
                            Cambiar foto
                        </span>
                        <span> <TbCameraPlus size={"25"} color={"white"} /> </span>
                    </Link>
                </div>

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
            <form className="flex justify-center h-full pb-12">
                <button>
                    <Link to="" className="flex bg-prim rounded-full p-2 md:px-5 ">
                        <span> <BiSave size={"25"} color={"white"} /> </span>
                        <span className="mx-2 profile-bttn-text !block">
                            Guardar cambios
                        </span>
                    </Link>
                </button>
            </form>
        </>
    )
}
