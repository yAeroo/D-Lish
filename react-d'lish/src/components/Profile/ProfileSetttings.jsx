import { useState } from "react";
import { useTranslation } from "react-i18next";

// Icons
import { MdLockOutline } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";

export default function ProfileSetttings() {
    const { t, i18n } = useTranslation();

    const lngSelected = i18n.resolvedLanguage === "es" ? true : false;

    const [radioState, setRadioState] = useState(lngSelected);

    const handleButtonClick = (isChecked) => {
        setRadioState(isChecked);
    };


    return (
        <>
            <div className="mb-10 fa-custom animate-fade"> 
                <div className="w-9/12 m-auto ">
                    <div>
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
                    </div>
                </div>
            </div>

            <div className="mb-10 fa-custom animate-fade"> 
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
                            <label className="flex justify-between my-3" htmlFor="bttn-ES">
                                <button type="submit" id="bttn-ES" onClick={() => {handleButtonClick(true); i18n.changeLanguage("es") }} className="">{t("settings.lang-es")}</button>
                                <input type="radio" name="radio-ES" className="radio radio-success" checked={radioState} readOnly />
                            </label>

                            <label className="flex justify-between my-3" htmlFor="bttn-EN">
                                <button type="submit" id="bttn-EN" onClick={() => {handleButtonClick(false); i18n.changeLanguage("en") }}>{t("settings.lang-en")}</button>
                                <input type="radio" name="radio-EN" className="radio radio-success"  checked={!radioState} readOnly />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
