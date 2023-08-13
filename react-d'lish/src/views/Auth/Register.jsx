import { createRef, useState } from 'react';
// Habilitando archivo para router link
import { Link } from "react-router-dom";
// Componente 
import Alert from '../../components/Alert';
// Auth
import { useAuth } from '../../hooks/useAuth';
// Helper - Toastify
import Notify from '../../helper/Notify';


export default function Registro() {

    // Acceden al elemento input del DOM y su valor
    const nameRef = createRef();
    const emailRef = createRef();
    const genderRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

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

        registro(datos, setErrores, NotiError);
    }

    // Toastify
    const toastErrorId = "error-noti";
    const NotiError = Notify(
        "error",
        toastErrorId,
        '¡Oops! Visualiza los errores arriba 👆🏻',
        "!bg-[#191E2B] !font-body !py-2"
    );

    // HTML
    return (
        <>
            <div className="content-form-center">
                {/* Imagen de Logo */}
                <a href="#" className="flex items-center mb-8  ">
                    <img className="w-auto h-2/5 sm:max-h-[12rem]" src="../src/assets/logo/wide_orange.png" alt="logo" />
                </a>

                {/* Formulario e Inputs */}
                <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-neutral">

                    <div className="p-6 space-y-4 sm:space-y-6 sm:p-8">

                        <h1 className="text-4xl text-center text-white font-title font-semibold py-4">
                            Registrate
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
                                    <span className="label-text">Nombre Completo</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nombre & Apellido"
                                    className="input input-bordered w-full bg-base-100"
                                    name="name"
                                    ref={nameRef}
                                />
                            </div>

                            {/* Input correo */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Correo institucional</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="estudiante@cdb.edu.sv"
                                    className="input input-bordered w-full bg-base-100"
                                    name="email"
                                    ref={emailRef}
                                />
                            </div>

                            {/* Input Genero */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Género</span>
                                </label>
                                <select className="select select-bordered w-full text-gray-300"
                                    defaultValue=""
                                    name="gender"
                                    ref={genderRef}
                                >
                                    <option disabled value="">Selecciona</option>
                                    <option className='text-white' value="M" >Masculino</option>
                                    <option className='text-white' value="F">Femenino</option>
                                </select>
                            </div>


                            {/* Input contraseña */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Contraseña</span>
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
                                    <span className="label-text">Repetir ontraseña</span>
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
                                    Registrar
                                </button>
                            </div>

                        </form>

                        <p className="text-white">¿Ya tienes una cuenta?
                            <span className="font-extrabold">
                                <Link to="/auth/login"> Inicia sesión</Link>
                            </span>
                        </p>

                    </div>
                </div>

            </div>

        </>
    );
}
