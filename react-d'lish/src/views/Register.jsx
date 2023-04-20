// Habilitando archivo para router link
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function Registro() {
    return (
        <>

    
    

        <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                    <div className="flex flex-col justify-center p-8 md:p-14">
                        <span className="mb-3 text-4xl font-bold">Dlish</span>
                        <span className=" font-tittle hover:font-tittleserif flex items-center  font-tittlelight text-black ">¡Saltate esas filas aburridas con Dlish no las harás más!</span>
                        
                        <div id="fullname" className="flex flex-row py-4">
                            <div id="firstname" className="w-1/2 mr-1">
                                <span className="mb-2 text-md">Nombre</span>
                                <input  type="text" name="" id="fname" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                            </div>
                            <div id="lastname" className="w-1/2 mr-1">
                                <span className="mb-2 text-md">Apellido</span>
                                <input type="text" name="" id="lname" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                            </div>
                        </div>
                        
                        <div className="py-4">
                            <span className="mb-2 text-md">Correo</span>
                            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"></input>
                        </div>

                        <div className="py-4">
                            <span className="mb-2 text-md">Contraseña</span>
                            <input type="password" name="pass" id="pass" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                        </div>
                        <div className="py-4">
                            <span className="mb-2 text-md">Confirmar Contraseña</span>
                            <input type="password" name="pass" id="pass" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                        </div>

                    <div id="gender" class="mb-2 text-md">
                    <p class="mb-3 text-md">Género</p>
                    <input type="radio" name="gender" id="male" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked></input>
                    <label htmlFor="male">Masculino</label>
                    <input type="radio" name="gender" id="female" class="text-sm mx-1 mb-2 text-md"></input><label htmlFor="female">Femenino</label>
                    </div>

                        <button className="w-full bg-blue-800 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black  hover:border-gray-300">
                            Enviar
                        </button>

                        <div className="text-center text-gray-400">
                            ¿Ya tienes cuenta?
                            <span className="font-bold text-black">
                            <Link to="/auth/login"> Inicia sesión</Link>
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="/img/logo.jpg"
                            alt="img"
                            className="w-[450px] h-full hidden rounded-r-2xl md:block object-cover mx-10"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
