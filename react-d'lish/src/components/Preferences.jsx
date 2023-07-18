import React from "react";

// Icons
import { MdOutlineAlternateEmail, MdLockOutline } from "react-icons/md";
import { HiOutlineWallet } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

export default function Preferences() {
    return (
        <div className="mb-10 fa-custom animate-fade">
            <ul className="w-9/12 m-auto ">
                <li className="li-elem">
                    <MdOutlineAlternateEmail size={"25"} />
                    <div className="flex justify-between w-full">
                        <span className="px-2 overflow-ellipsis w-[13.5rem] sm:w-full overflow-hidden">
                            estudiante20100020@cdb.edu.sv
                        </span>
                        <IoIosArrowForward size={"25"} className="fu-custom animate-fade-right" />
                    </div>
                </li>
                <li className="li-elem">
                    <MdLockOutline size={"25"}/>
                    <div className="flex justify-between w-full">
                        <span className="px-2">Cambiar contraseña</span>
                        <IoIosArrowForward size={"25"} className="fu-custom animate-fade-right" />
                    </div>
                </li>
                <li className="li-elem">
                    <HiOutlineWallet size={"25"} />
                    <div className="flex justify-between w-full">
                        <span className="px-2">Registros</span>
                        <IoIosArrowForward size={"25"} className="fu-custom animate-fade-right" />
                    </div>
                </li>
            </ul>

            {/* Boton cerrar sesión */}
        </div>
    );
}
