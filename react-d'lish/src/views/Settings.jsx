import { Link } from "react-router-dom";
// Componentes
import ProfileInfo from "../components/ProfileInfo"
// Icon
import { AiOutlineCamera } from "react-icons/ai";

export default function Settings() {
    return (
        <>
            <div id="pf-bttns" className="relative">
                <div id="edit-bttn" className="fu-custom animate-fade-left absolute top-8 right-[28%] xsm:right-[32%] lsm:right-[35%] md:right-[3%] lg:right-[10%]">
                    <Link to="/profile/settings" className="flex bg-prim rounded-full p-2 md:px-5 ">
                        <span className="mr-2 profile-bttn-text">
                            Cambiar foto
                        </span>
                        <span> <AiOutlineCamera size={"25"} color={"white"} /> </span>
                    </Link>
                </div>
            </div>

            {/* Foto y nombre */}
            <ProfileInfo />
        </>
    )
}
