import { Link } from "react-router-dom";
// Icons
import { PiNotePencilBold } from "react-icons/pi";
import { TbPigMoney } from "react-icons/tb";

export default function ProfileButtons() {
    return (
        <>
            <div id="pf-bttns" className="relative">

                <div id="funds-show" className="fu-custom animate-fade-right absolute top-5 left-[5%] md:left-[3%] lg:left-[10%]">
                    <Link to="" className="flex bg-secondary p-2 md:px-4 rounded-full">
                        <span> <TbPigMoney size={"25"} color={"white"} /> </span>
                        <span className="ml-3 profile-bttn-text">
                            Fondos: $500.00 
                        </span>
                    </Link>
                </div>

                <div id="edit-bttn" className="fu-custom animate-fade-left absolute top-5 right-[5%] md:right-[3%] lg:right-[10%]">
                    <Link to="/profile/settings" className="flex bg-secondary rounded-full p-2 md:px-5 ">
                        <span className="mr-2 profile-bttn-text">
                            Editar perfil
                        </span>
                        <span> <PiNotePencilBold size={"25"} color={"white"} /> </span>
                    </Link>
                </div>

            </div>
        </>
    )
}
