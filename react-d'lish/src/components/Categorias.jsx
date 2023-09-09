import { Link } from "react-router-dom";
//Imagenes
import Burrito from "/src/assets/index/burrito.jpg";
import Pupusas from "/src/assets/index/pupusas.jpg";
import DesayunoBanner from "/src/assets/Dishes/desayunoBanner.png";
import OtrosBanner from "/src/assets/Dishes/otrosBanner.png";
import AlmuerzoBanner from "/src/assets/Dishes/almuerzoBanner.png";

export default function Categorias() {
    return (
        <>
            {/* Contenedor de Desayunos */}
            {/* <Link to={`/desayunos`}>
                <div
                    className="bg-cover bg-center h-32 md:h-48 relative rounded-md animate-fade-left animate-once animate-delay-[400ms]"
                    style={{ backgroundImage: `url(${DesayunoBanner})` }}
                >
                    <div className="absolute top-0 left-0 p-2 text-white font-bold text-[1.7rem] leading-[2.25rem]">
                        Desayunos
                    </div>
                </div>
            </Link> */}

            {/* Contenedor de Otros */}
            {/* <Link to={`/otros`}>
                <div
                    className="bg-cover bg-center h-32 md:h-48 relative rounded-md animate-fade-left animate-once animate-delay-[400ms]"
                    style={{ backgroundImage: `url(${OtrosBanner})` }}
                >
                    <div className="absolute top-0 left-0 p-2 text-white font-bold text-3xl">
                        Otros
                    </div>
                </div>
            </Link> */}

            {/* Contenedor de Almuerzos */}
            <Link to={`/almuerzos`} className="col-span-2">
                <div
                    className="bg-cover bg-center h-32 relative col-span-2 rounded-md animate-fade-left animate-once animate-delay-[400ms]"
                    style={{ backgroundImage: `url(${AlmuerzoBanner})` }}
                >
                    <div className="absolute top-0 left-0 p-2 text-white font-bold text-3xl">
                        Almuerzos
                    </div>
                </div>
            </Link>
        </>
    )
}
