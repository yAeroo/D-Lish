import { useState } from "react";
import { useTranslation } from "react-i18next";

// Icons
import { MdLockOutline } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";
import { BiSave } from "react-icons/bi";

// Helper
import Notificacion from "../../helper/Notify";
import "react-toastify/dist/ReactToastify.css";

export default function ProfileSetttings() {
    const { t, i18n } = useTranslation();

    const lngSelected = i18n.resolvedLanguage === "es" ? true : false;

    const [radioState, setRadioState] = useState(lngSelected);

    const handleButtonClick = (isChecked) => {
        setRadioState(isChecked);
    };

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
            <div className="mb-10 fa-custom animate-fade"> 
                <div className="w-9/12 m-auto ">
                    <li className="li-elem !mb-4">
                        <MdLockOutline size={"25"} />
                        <div className="flex justify-between w-full">
                            <span className="px-2 overflow-ellipsis w-[13.5rem] sm:w-full overflow-hidden font-bold">
                                Cambiar contraseña
                            </span>
                        </div>
                    </li>

                    <div className="flex justify-center items-center flex-col">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Coloca tu contraseña actual</span>
                            </label>
                            <input type="password" placeholder="●●●●●●●●●●●●" className="input input-bordered w-full max-w-xs text-ellipsis !bg-neutral" />
                        </div>

                        <div className="form-control w-full max-w-xs mt-5">
                            <label className="label">
                                <span className="label-text">Coloca tu nueva contraseña</span>
                            </label>
                            <input type="password" placeholder="●●●●●●●●●●●●" className="input input-bordered w-full max-w-xs text-ellipsis !bg-neutral" />
                        </div>

                        <div className="form-control w-full max-w-xs mt-5">
                            <label className="label">
                                <span className="label-text">Confirma tu nueva contraseña</span>
                            </label>
                            <input type="password" placeholder="●●●●●●●●●●●●" className="input input-bordered w-full max-w-xs text-ellipsis !bg-neutral" />
                        </div>
                    </div>

                    {/* Guardar cambios */}
                    <div className="flex justify-center h-full mt-10 fa-custom animate-fade">
                        <button onClick={NotiExito}>
                            <div className="flex bg-secondary rounded-full p-2 md:px-5 ">
                                <span> <BiSave size={"25"} color={"white"} /> </span>
                                <span className="mx-2 profile-bttn-text !block">
                                    Guardar cambios
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mb-14 fa-custom animate-fade"> 
                <div className="w-9/12 m-auto ">
                    <div>
                        <li className="li-elem !mb-4">
                            <IoLanguageSharp size={"25"} />
                            <div className="flex justify-between w-full">
                                <span className="px-2 overflow-ellipsis w-[13.5rem] sm:w-full overflow-hidden font-bold">
                                    {t("settings.lang")}
                                </span>
                            </div>
                        </li>

                        <div className="md:mx-24">
                            <label className="flex justify-between my-3" htmlFor="radio-ES">
                                <span>{t("settings.lang-es")}</span>
                                <input type="radio" id="radio-ES" className="radio radio-success" checked={radioState} onChange={() => {handleButtonClick(true); i18n.changeLanguage("es") }} />
                            </label>

                            <label className="flex justify-between my-3" htmlFor="radio-EN">
                                <span>{t("settings.lang-en")}</span>
                                <input type="radio" id="radio-EN" className="radio radio-success"  checked={!radioState} onChange={() => {handleButtonClick(false); i18n.changeLanguage("en") }}  />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
