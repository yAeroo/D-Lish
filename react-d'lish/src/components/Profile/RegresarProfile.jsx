import { Link } from 'react-router-dom';
import { IoChevronBackSharp } from "react-icons/io5";

export default function RegresarProfile(props) {
    return (
        <div id="edit-bttn" className="fu-custom animate-fade-right absolute top-8 left-[5%] md:left-[3%] lg:left-[10%]">
            <Link to={props.url} className="flex rounded-full p-2 md:px-5 ">
                <span> <IoChevronBackSharp size={"25"} color={"white"} /> </span>
                <span className="ml-2 profile-bttn-text">
                    Regresar
                </span>
            </Link>
        </div>
    )
}
