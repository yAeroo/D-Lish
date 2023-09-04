
// Función imagenes
import FileUpload from "../ImgFunction";
import { useTranslation } from "react-i18next";

// Icons
import { TbCameraPlus, TbCameraCancel, TbCameraCheck } from "react-icons/tb";

export default function ProfilePfp() {
    const { t } = useTranslation();
    
    return (
        <>
            {/* Botón para activar modal */}
            <div id="edit-bttn" onClick={() => window.pfp_modal.showModal()} className="fu-custom animate-fade-left absolute top-8 right-[28%] xsm:right-[32%] lsm:right-[35%] md:right-[3%] lg:right-[10%] cursor-pointer">
                <div className="flex bg-secondary rounded-full p-2 md:px-5">
                    <span className="mr-2 profile-bttn-text">
                        {t("actions.change-img")}
                    </span>
                    <span> <TbCameraPlus size={"25"} color={"white"} /> </span>
                </div>
            </div>

            {/* Contenedor del modal */}
            <dialog id="pfp_modal" className="modal">
                <form method="dialog" className="modal-box !bg-neutral">
                    <h3 className="font-bold font-title text-xl text-center text-white">{t("info.update-pfp")}</h3>
                    
                    {/* Componente label para subida de imagenes + botones de accion */}
                    <FileUpload />
                </form> 
            </dialog>
        </>
    )
}
