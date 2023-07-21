import { Link } from "react-router-dom";

// Función
import ImgFunction from "./ImgFunction";

// Icons
import { TbCameraPlus, TbCameraCancel, TbCameraCheck } from "react-icons/tb";

export default function ProfilePfp() {
    return (
        <>
            {/* Botón para activar modal */}
            <div id="edit-bttn" onClick={()=>window.my_modal_1.showModal()} className="fu-custom animate-fade-left absolute top-8 right-[28%] xsm:right-[32%] lsm:right-[35%] md:right-[3%] lg:right-[10%] cursor-pointer">
                <div className="flex bg-prim rounded-full p-2 md:px-5">
                    <span className="mr-2 profile-bttn-text">
                        Cambiar foto
                    </span>
                    <span> <TbCameraPlus size={"25"} color={"white"} /> </span>
                </div>
            </div>

            {/* Contenedor del modal */}
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box !bg-neutral">
                    <h3 className="font-bold font-title text-xl text-center text-white">Actualiza tu foto de perfil</h3>

                    <ImgFunction />

                    <div className="modal-action justify-between">
                        <button className="flex rounded-full bg-terc text-white p-2 md:px-5">
                            <span className="mr-2"> 
                                <TbCameraCheck size={"25"} color={"white"} /> 
                            </span>
                            Aceptar
                        </button>

                        <button className="flex rounded-full bg-prim text-white p-2 md:px-5">
                            Cancelar
                            <span className="ml-2"> 
                                <TbCameraCancel size={"25"} color={"white"} /> 
                            </span>
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    )
}
