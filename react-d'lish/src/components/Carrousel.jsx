// Importamos datos
import useCafeterias from '../hooks/useCafeterias';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Importacion de estilos de swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// importacion de modulos requeridos
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carrousel() {
    // Extraemos datos del ccontext
    const { cafeterias } = useCafeterias();
    console.log(cafeterias);

    return (
        <>
            <Swiper
                spaceBetween={30} centeredSlides={true} loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: true, }}
                pagination={{ clickable: true, }}
                navigation={true} modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-[26rem] lg:h-[40rem] md:h-[32rem] text-white"
            >

                {cafeterias ? cafeterias.map((cafe, i) => (
                    <SwiperSlide key={i}
                        style={{ backgroundImage: `url(/assets/cafeterias/${cafe.cafe_wallp})` }}
                        className={`bg-cover bg-center img`}>

                        <div className="h-full flex md:justify-start md:items-end justify-center items-center bg-black/50 px-24 md:pb-20 pt-20 pb-0 md:pt-0">
                            <div className="max-w-md md:text-start text-center">
                                <h1 className="mb-5 text-5xl md:text-7xl font-bold">{cafe.nombre}</h1>
                                <p className="mb-5 text-xl md:text-2xl">Bachillerato & Tercer Ciclo.</p>

                                <Link to={`/cafeteria/${cafe.id}`} className="btn btn-primary" >
                                    Ver Cafetín
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                )) : ''}
            </Swiper >
        </>
    )
}
