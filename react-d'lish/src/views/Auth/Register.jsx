import { useTranslation } from "react-i18next";

// Icon
import "../../css/spinner.css";
import { ImSpinner } from "react-icons/im";

import { createRef, useState } from 'react';
// Habilitando archivo para router link
import { Link } from "react-router-dom";
// Componente 
import Alert from '../../components/Alert';
// Auth
import { useAuth } from '../../hooks/useAuth';
// Images
import LogoImg from '../../assets/logo/wide_orange.png'
// Helper - Toastify
import Notify from '../../helper/Notify';


export default function Registro() {

    const { t } = useTranslation();

    // Acceden al elemento input del DOM y su valor
    const nameRef = createRef();
    const emailRef = createRef();
    const genderRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const [registrar, setRegistrar] = useState(t("actions.to-register"));
    const [errores, setErrores] = useState([]);
    const { registro } = useAuth({ middleware: 'guest', url: '/profile' })

    const handleSubmit = async e => {
        e.preventDefault();

        // Propiedades del objeto, según como los espera Laravel
        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            gender: genderRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }

        registro(datos, setErrores, NotiError, load);
    }

    // Toastify
    const toastErrorId = "error-noti";
    const NotiError = Notify(
        "error",
        toastErrorId,
        '¡Oops! Visualiza los errores arriba 👆🏻',
        "!bg-[#191E2B] !font-body !py-2"
    );

    const load = () => {
        setRegistrar(<ImSpinner className="loading-icon" />)
    }

    // HTML
    return (
        <>
            <div className="content-form-center">
                {/* Imagen de Logo */}
                <a href="#" className="flex items-center mb-8  ">
                    <img className="w-auto h-2/5 sm:max-h-[12rem]" src={LogoImg} alt="logo" />
                </a>

                {/* Formulario e Inputs */}
                <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-neutral">

                    <div className="p-6 space-y-4 sm:space-y-6 sm:p-8">

                        <h1 className="text-4xl text-center text-white font-title font-semibold py-4">
                            {t("actions.register")}
                        </h1>


                        {/* Form Register */}
                        <form className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                            noValidate
                        >

                            {/* Impresión de errores */}
                            {errores ? errores.map((error, i) => <Alert key={i}>{error}</Alert>) : ''}

                            {/* Input nombre*/}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">{t("credentials.complete-name")}</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder={t("credentials.name-placeholder")}
                                    className="input input-bordered w-full bg-base-100"
                                    name="name"
                                    ref={nameRef}
                                />
                            </div>

                            {/* Input correo */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">{t("credentials.student-email")}</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder={t("credentials.student-email-placeholder")}
                                    className="input input-bordered w-full bg-base-100"
                                    name="email"
                                    ref={emailRef}
                                />
                            </div>

                            {/* Input Genero */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">{t("credentials.gender")}</span>
                                </label>
                                <select className="select select-bordered w-full text-gray-300"
                                    defaultValue=""
                                    name="gender"
                                    ref={genderRef}
                                >
                                    <option disabled value="">{t("credentials.select-gender")}</option>
                                    <option className='text-white' value="M" >{t("credentials.gender-M")}</option>
                                    <option className='text-white' value="F">{t("credentials.gender-F")}</option>
                                </select>
                            </div>


                            {/* Input contraseña */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">{t("credentials.password")}</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••"
                                    className="input input-bordered w-full bg-base-100"
                                    name="password"
                                    ref={passwordRef}
                                />
                            </div>

                            {/* Repetir contraseña */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">{t("credentials.repeat-pw")}</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••"
                                    className="input input-bordered w-full bg-base-100"
                                    name="password_confirmation"
                                    ref={passwordConfirmationRef}
                                />
                            </div>


                            <div className="pt-4">
                                <button
                                    className="btn no-animation w-full btn-info text-white font-plane"
                                    type="submit">
                                    {registrar}
                                </button>
                            </div>

                        </form>

                        <p className="text-white"> {t("auth.exist-acc-msg")}
                            <span className="font-extrabold">
                                <Link to="/auth/login"> {t("auth.login-acc")}</Link>
                            </span>
                        </p>

                    </div>
                </div>

            </div>

        </>
    );
}
