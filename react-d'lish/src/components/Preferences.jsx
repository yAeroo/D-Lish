import { Link } from "react-router-dom";

// Icons
import { MdOutlineAlternateEmail, MdLockOutline } from "react-icons/md";
import { HiOutlineWallet } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

export default function Preferences() {
    return (
        <div className="mb-10 fa-custom animate-fade">
            <ul className="w-10/12 m-auto ">
                <div>
                    <li className="li-elem !mb-4">
                        <MdOutlineAlternateEmail size={"25"} />
                        <div className="flex justify-between w-full">
                            <span className="px-2 overflow-ellipsis min-w-[13.8rem] sm:w-full overflow-hidden">
                                estudiante20100020@cdb.edu.sv
                            </span>
                        </div>
                    </li>
                </div>

                <Link to="/profile/settings">
                    <li className="li-elem !mb-4">
                        <MdLockOutline size={"25"}/>
                        <div className="flex justify-between w-full">
                            <span className="px-2">Cambiar contraseña</span>
                            <IoIosArrowForward size={"25"} className="fu-custom animate-fade-right" />
                        </div>
                    </li>
                </Link>

                <Link to="/logs/">
                    <li className="li-elem">
                        <HiOutlineWallet size={"25"} />
                        <div className="flex justify-between w-full">
                            <span className="px-2">Registros</span>
                            <IoIosArrowForward size={"25"} className="fu-custom animate-fade-right" />
                        </div>
                    </li>
                </Link>

            </ul>

            {/* Boton cerrar sesión */}
        </div>
    );
}
