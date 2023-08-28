import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

// Image
import LogoImg from "../../assets/logo/wide_orange.png";
import "../../css/authSelection.css";

// Icons
import { AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";

export default function AuthSelection() {
    const { t } = useTranslation();

    return (
        <>
            <div id="authSelector" className="min-h-[80vh] mb-4 px-8 sm:px-20 grid transition-all">

                <div id="authSelectCont" className="w-full flex flex-col place-self-center">
                    <img src={LogoImg} alt="LogoImg" className="w-auto h-32 self-center" />
                    <p className="text-white text-2xl font-title text-center font-bold my-5">{t("auth.header-title")}</p> {/* Título principal */}
                    
                    <div className="flex-col md:flex-row w-full flex justify-center items-center mt-5 text-white">

                        {/* Card de Inicio de sesión */}
                        <div id="LoginCard">
                            <div className="card lg:card-side authCardClasses">
                                <figure><AiOutlineUser size={50} className="mt-7" /></figure>
                                <div className="card-body !py-5">
                                    <h2 className="card-title font-title self-center text-2xl">{t("actions.login")}</h2> {/* Iniciar sesión - Title */}
                                    <p className="text-center self-center inline-block py-3">{t("auth.login-card-desc")}</p>
                                    <div className="card-actions justify-center">
                                        <Link to="/auth/login" className="bg-secondary hover:bg-base-100 transition-all rounded-full p-2 text-white mt-2 px-8 font-bold">
                                            {t("actions.to-login")} {/* Iniciar sesión - Bttn */}
                                        </Link> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="divider md:divider-horizontal before:bg-primary after:bg-primary text-white">O</div>

                        {/* Card de Registro */}
                        <div id="SignUpCard">
                            <div className="card lg:card-side authCardClasses">
                                <figure><AiOutlineUserAdd size={50} className="mt-7" /></figure>
                                <div className="card-body !py-5">
                                    <h2 className="card-title font-title self-center text-2xl">{t("actions.register")}</h2> {/* Registrarse - Title */}
                                    <p className="text-center self-center inline-block py-3">{t("auth.register-card-desc")}</p> {/* Registrarse - Desc. */}
                                    <div className="card-actions justify-center">
                                        <Link to="/auth/register" className="bg-info hover:bg-base-100 transition-all rounded-full p-2 text-white mt-2 px-8 font-bold">
                                            {t("actions.to-register")} {/* Registrarse - Bttn */}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
