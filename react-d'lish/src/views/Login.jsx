// Habilitando archivo para router link
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                    <div className="flex flex-col justify-center p-8 md:p-14">
                        <span className="mb-3 text-4xl font-bold">Dlish</span>
                        <span className=" font-tittle hover:font-tittleserif flex items-center  font-tittlelight text-black ">Saltate esas filas aburridas</span>
                        <span className=" font-tittle hover:font-tittleserif flex items-center  font-tittlelight  text-black ">con Dlish no las harás más.</span>
                        <div className="py-4">
                            <span className="mb-2 text-md">Correo</span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                name="email"
                                id="email"
                            />
                        </div>

                        <div className="py-4">
                            <span className="mb-2 text-md">Contraseña</span>
                            <input type="password" name="pass" id="pass" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                        </div>

                        <button className="w-full bg-blue-800 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black  hover:border-gray-300">
                            Ingresa
                        </button>
                        <div className="text-center text-gray-400">
                            
                            ¿No tienes cuenta?
                            <span className="font-bold text-black">
                            <Link to="/auth/register"> Registráte</Link>
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="/img/logo.jpg"
                            alt="img"
                            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
