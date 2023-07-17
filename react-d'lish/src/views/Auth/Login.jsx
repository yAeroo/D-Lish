// Habilitando archivo para router link
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="content-form-center">

                {/* Imagen de Logo */}
                <a href="#" className="flex items-center mb-8  ">
                    <img className="w-auto h-2/5 sm:max-h-[12rem]" src="../src/assets/logo/wide_blue.png" alt="logo" />
                </a>

                {/* Formulario e Inputs */}

                <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-neutral">
                    <div className="p-6 space-y-4 sm:space-y-6 sm:p-8">

                        <h1 className="title-form">
                            Inicia Sesión
                        </h1>

                        {/* Form Login */}
                        <form className="space-y-4 md:space-y-6" action="#">
                            {/* Input */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Correo institucional</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="estudiante@cdb.edu.sv"
                                    className="input input-bordered w-full text-white bg-base-100"
                                    name="email"

                                />
                            </div>

                            {/* Input contraseña */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Contraseña</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="input input-bordered w-full text-white bg-base-100"
                                    name="password"
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    className="btn no-animation w-full btn-success text-white font-plane"
                                    type="submit">
                                    Iniciar
                                </button>
                            </div>

                        </form>

                        <p className="text-white">¿No tienes una cuenta?
                            <span className="font-extrabold">
                                <Link to="/auth/register"> Crea una</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}
