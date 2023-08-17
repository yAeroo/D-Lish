import { Link } from "react-router-dom"

// Images
import LogoImg from "../../assets/logo/wide_orange.png";
import LoginCardImg from "../../assets/Dishes/burrito_lunch.jpg";
import SignUpCardImg from "../../assets/Dishes/tortas_lunch.jpg";

export default function AuthSelection() {
    return (
        <>
            <div id="authSelector" className="min-h-[80vh] mb-4 px-8 sm:px-20 grid transition-all">
                <div id="authSelectCont" className="w-full flex flex-col place-self-center">
                    <img src={LogoImg} alt="LogoImg" className="w-auto h-32 self-center" />
                    <p className="text-white text-2xl font-title text-center font-bold my-5">Accede a D'Lish y disfruta de sabores únicos.</p>

                    <div className="flex-col md:flex-row w-full flex justify-center items-center mt-5 text-white">
                        <div id="LoginCard">
                            <div className="card lg:card-side h-full !bg-[#2c2c2c] shadow-xl min-w-[300px] max-w-[300px] lg:min-w-[425px] lg:max-w-[425px]">
                                <figure><img src={LoginCardImg} alt="LoginCardImg" className="w-full h-40 object-cover object-[100%_60%] lg:w-380 lg:h-[14.5rem]" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title font-title self-center text-2xl">Inicia sesión</h2>
                                    <p className="text-center ">No esperes para reservar, ingresa tus credenciales y comienza a pedir.</p>
                                    <div className="card-actions justify-center">
                                        <Link to="/auth/login" className="bg-secondary hover:bg-base-100 transition-all rounded-full p-2 text-white mt-2 px-8 font-bold">Ingresar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divider md:divider-horizontal before:bg-primary after:bg-primary text-white">O</div>
                        <div id="SignUpCard">
                            <div className="card lg:card-side h-full !bg-[#2c2c2c] shadow-xl min-w-[300px] max-w-[300px] lg:min-w-[425px] lg:max-w-[425px]">
                                <div className="card-body">
                                    <h2 className="card-title font-title self-center text-2xl">Regístrate</h2>
                                    <p className="text-center self-center inline-block py-3">Reserva, disfruta, repite. Únete a D'Lish hoy mismo.</p>
                                    <div className="card-actions justify-center">
                                        <Link to="auth/register" className="bg-info hover:bg-base-100 transition-all rounded-full p-2 text-white mt-2 px-8 font-bold">Ingresar</Link>
                                    </div>
                                </div>
                                <figure><img src={SignUpCardImg} alt="SignUpCardImg" className="w-full h-40 object-cover object-[100%_60%] lg:w-80 lg:h-[14.5rem]" /></figure>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
