import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { FaMoneyBillWave } from "react-icons/fa";
// Componentes
import Preferences from "../components/Preferences";
import PostAuthNavbar from "../components/Post-AuthNavbar";

export default function Profile() {
    return (
        <>
            <PostAuthNavbar />
        
            <section id="profile" className="min-h-screen bg-[url('img/banner.jpg')] bg-cover flex items-end justify-center pt-40">
                <article id="profile-info" className="bg-neutral h-[80vh] sm:w-10/12 w-full sm:rounded-t-3xl p-5 shadow-black shadow-lg transition-all flex flex-col">
                    
                    <div id="pf-bttns" className="relative">
                        <div id="funds-show" className="fu-custom animate-fade-right absolute ">
                            <Link to="" className="flex bg-prim p-2 rounded-full">
                                <span> <FaMoneyBillWave size={"32"} color={"white"} /> </span>
                                <span className="hidden md:block ml-3 font-bold  md:text-base lg:text-lg font-plane self-center text-white transition-all">
                                    Fondos: $500.00 
                                </span>
                            </Link>
                        </div>

                        {/* <div id="edit-bttn" className="relative">
                            <Link to="/profile/settings" className="profile-bttns left-[85%] md:left-[70%] xl:left-[82%] ">
                                <span className="hidden md:block text-lg font-bold font-plane text-white transition-all">
                                    Editar perfil
                                </span>
                                <span className="sm:mx-2">
                                    <AiFillEdit size={"30"} color={"white"} />
                                </span>
                            </Link>
                        </div> */}
                    </div>
                    
                    <div id="profile-pic" className="w-full flex justify-center">
                        <img src="/img/user.png" className="-mt-28 w-48 h-48 lg:w-56 lg:h-56 rounded-full border-8 border-solid border-neutral transition-all" alt="profile-pic" />
                    </div>
                    
                    <div id="profile-name" className="my-5 fa-custom">
                        <p className="font-title text-3xl lg:text-4xl text-center font-bold tracking-wide transition-all">
                            Javier Enrique Mejía Flores
                        </p>
                    </div>

                    {/* Perefencias */}
                    {/* <Preferences /> */}

                    {/* <form className="flex justify-center h-full pb-12">
                        <button type="submit" className="btn bg-prim text-white w-6/12 self-end">
                            Cerrar Sesión
                        </button>
                    </form> */}
                </article>
            </section>
        </>
    );
}
