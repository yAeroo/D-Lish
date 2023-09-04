import { useState, createRef } from "react";
import { useTranslation } from "react-i18next";

// Icons
import { MdLockOutline } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";
import { BiSave, BiErrorAlt } from "react-icons/bi";

// Componente 
import Alert from '../../components/Alert';

// Helper
import Notificacion from "../../helper/Notify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../hooks/useAuth";
import clienteAxios from "../../config/axios";

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
        t('info.notis.success-save'),
        "!bg-[#191E2B] !font-body !py-2"
    );

    const toastErrorId = "error-noti";
    const NotiError = Notificacion(
        "error",
        toastErrorId,
        t("info.errors.general-error"),
        "!bg-[#191E2B] !font-body !py-2"
    );

    // Obtener token de usuario y Id
    const { user } = useAuth({ middleware: 'auth' }); const id = user?.id; const token = localStorage.getItem('AUTH_TOKEN');

    // Creando referencias
    const oldPasswordRef = createRef(); const newPasswordRef = createRef(); const newPasswordConfirmationRef = createRef();
    const [error, setError] = useState(''); // <- Error 
    const [aErrors, setAErrors] = useState([])

    const handleSubmit = async e => {
        e.preventDefault();

        const dataPass = {
            oldPassword: oldPasswordRef.current.value,
            newPassword: newPasswordRef.current.value,
            newPassword_confirmation: newPasswordConfirmationRef.current.value
        }

        await settings(dataPass);
    }

    const settings = async (dataPass) => {
        try {
            const { data } = await clienteAxios.post(`/api/user/${id}/change-password`, dataPass, {
                headers: {
                    Authorization: `Bearer ${token}` // Token obligatorio para validación de datos
                }
            });
            console.log('Exito', data);

            resetState();
            NotiExito();

        } catch (error) {
            NotiError();
            setError(""); setAErrors([]);
            if (error?.response?.data?.errors && Object.keys(error.response.data.errors).length > 0) {
                let Errores = Object.values(error?.response?.data?.errors);
                setAErrors(Errores);
            } else {
                setError(error.response.data.message);
            }
            console.error('Error', error);
        }
    }

    // Función para resetear todo
    const resetState = () => {
        setError(""); setAErrors([]);
        const pwInput = {
            oldPassword: document.getElementById('oldPassword'),
            newPassword: document.getElementById('newPassword'),
            newPassswordConfirmation: document.getElementById('newPassswordConfirmation')
        }

        // Limpiando inputs
        pwInput.oldPassword.value = ''; pwInput.newPassword.value = ''; pwInput.newPassswordConfirmation.value = '';
    }

    return (
        <>
            <div className="mb-10 fa-custom animate-fade">
                <div className="w-9/12 m-auto ">
                    <li className="li-elem !mb-4">
                        <MdLockOutline size={"25"} />
                        <div className="flex justify-between w-full">
                            <span className="px-2 overflow-ellipsis w-[13.5rem] sm:w-full overflow-hidden font-bold">
                                {t("actions.change-pw")}
                            </span>
                        </div>
                    </li>

                    {error &&
                        <div className="md:mx-16 lg:mx-32 my-6 grid gap-3">
                            <Alert>{error}</Alert>
                        </div>
                    }

                    {/* Impresión de errores */}
                    {aErrors ? aErrors.map((error, i) => <Alert key={i}>{error}</Alert>) : ''}



                    <form onSubmit={handleSubmit} noValidate>
                        <div className="flex justify-center items-center flex-col">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">{t("credentials.old-pw")}</span>
                                </label>
                                <input id="oldPassword" ref={oldPasswordRef} type="password" placeholder="●●●●●●●●●●●●" className="input input-bordered w-full max-w-xs text-ellipsis !bg-neutral" />
                            </div>

                            <div className="form-control w-full max-w-xs mt-5">
                                <label className="label">
                                    <span className="label-text">{t("credentials.new-pw")}</span>
                                </label>
                                <input id="newPassword" ref={newPasswordRef} type="password" placeholder="●●●●●●●●●●●●" className="input input-bordered w-full max-w-xs text-ellipsis !bg-neutral" />
                            </div>

                            <div className="form-control w-full max-w-xs mt-5">
                                <label className="label">
                                    <span className="label-text">{t("credentials.repeat-new-pw")}</span>
                                </label>
                                <input id="newPassswordConfirmation" ref={newPasswordConfirmationRef} type="password" placeholder="●●●●●●●●●●●●" className="input input-bordered w-full max-w-xs text-ellipsis !bg-neutral" />
                            </div>
                        </div>

                        {/* Guardar cambios */}
                        <div className="flex justify-center h-full mt-10 fa-custom animate-fade">
                            <button type="submit">
                                <div className="flex bg-secondary rounded-full p-2 md:px-5 ">
                                    <span> <BiSave size={"25"} color={"white"} /> </span>
                                    <span className="mx-2 profile-bttn-text !block">
                                        {t("actions.save-changes")}
                                    </span>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="mb-14 fa-custom animate-fade">
                <div className="w-9/12 m-auto ">
                    <div>
                        <li className="li-elem !mb-4">
                            <IoLanguageSharp size={"25"} />
                            <div className="flex justify-between w-full">
                                <span className="px-2 overflow-ellipsis w-[13.5rem] sm:w-full overflow-hidden font-bold">
                                    {t("actions.change-lang")}
                                </span>
                            </div>
                        </li>

                        <div className="md:mx-24">
                            <label className="flex justify-between my-3" htmlFor="radio-ES">
                                <span>{t("lang.es")}</span>
                                <input type="radio" id="radio-ES" className="radio radio-success" checked={radioState} onChange={() => { handleButtonClick(true); i18n.changeLanguage("es") }} />
                            </label>

                            <label className="flex justify-between my-3" htmlFor="radio-EN">
                                <span>{t("lang.en")}</span>
                                <input type="radio" id="radio-EN" className="radio radio-success" checked={!radioState} onChange={() => { handleButtonClick(false); i18n.changeLanguage("en") }} />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
