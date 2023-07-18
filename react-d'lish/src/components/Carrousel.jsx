// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Importacion de estilos de swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// importacion de modulos requeridos
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carrousel() {
    return (
        <>
            <Swiper
                spaceBetween={30} centeredSlides={true} loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: true, }}
                pagination={{ clickable: true, }}
                navigation={true} modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-[26rem] lg:h-[40rem] md:h-[32rem] text-white"
            >
                <SwiperSlide className="bg-[url('src/assets/slider/food4k.webp')] bg-cover bg-center">
                    <div className="h-full flex md:justify-start md:items-end justify-center items-center bg-black/50 px-24 md:pb-20 pt-20 pb-0 md:pt-0">
                        <div className="max-w-md md:text-start text-center">
                            <h1 className="mb-5 text-5xl md:text-7xl font-bold">Domingo Savio</h1>
                            <p className="mb-5 text-xl md:text-2xl">Bachillerato & Tercer Ciclo.</p>
                            <button className="btn btn-primary">
                                Ver Cafetín
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-[url('src/assets/slider/beggiefood.webp')] bg-cover bg-center">
                    <div className="h-full flex md:justify-start md:items-end justify-center items-center bg-black/50 px-24 md:pb-20 pt-20 pb-0 md:pt-0">
                        <div className="max-w-md md:text-start text-center">
                            <h1 className="mb-5 text-5xl md:text-7xl font-bold">Don Bosco</h1>
                            <p className="mb-5 text-xl md:text-2xl">Bachillerato & Tercer Ciclo.</p>
                            <button className="btn btn-primary">
                                Ver Cafetín
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
