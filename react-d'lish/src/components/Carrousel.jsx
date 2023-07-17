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
                className="mySwiper w-full h-[30rem] text-primary "
            >
                <SwiperSlide className="text-center text-xl bg-white flex justify-center items-center">
                    <img src="src/assets/slider/food4k.webp" className="block w-full h-full object-cover"></img>
                </SwiperSlide>
                <SwiperSlide className="text-center text-xl bg-white flex justify-center items-center">
                    <div className="hero min-h-screen bg-[url('src/assets/slider/beggiefood.webp')] text-white backdrop-opacity-60">
                        <div className="hero-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
