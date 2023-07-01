// Habilitando archivo para router link
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";


export default function Registro() {
    return (
        <>
            {/* Navbar sujeto a cambios (sections obligatorios si se desea el navbar redondo) */}
            <section className='bg-gradient-to-r py-4 md:px-24 px-4'>
                <Navbar />
            </section>

            <div className="content-form-center">
                {/* Imagen de Logo */}
                <a href="#" className="flex items-center mb-8  ">
                    <img className="w-auto h-2/5 sm:max-h-[12rem]" src="../src/assets/logo/wide_orange.png" alt="logo" />
                </a>

                {/* Formulario e Inputs */}
                <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-neutral">

                    <div className="p-6 space-y-4 sm:space-y-6 sm:p-8">

                        <h1 className="title-form">
                            Registrate
                        </h1>


                        {/* Form Register */}
                        <form className="space-y-4 md:space-y-6" action="#">´

                            {/* Input nombre*/}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Nobre Completo</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nombre & Apellido"
                                    className="input input-bordered w-full bg-base-100"
                                    name="name"
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
                                    className="input input-bordered w-full bg-base-100"
                                    name="password"
                                />
                            </div>

                            {/* Repetir contraseña */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Repetir ontraseña</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="input input-bordered w-full bg-base-100"
                                    name="password_confirmation" />
                            </div>


                            <div className="pt-4">
                                <button
                                    className="btn no-animation w-full btn-error text-white font-plane"
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
