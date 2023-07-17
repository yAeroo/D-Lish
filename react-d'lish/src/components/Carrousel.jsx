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
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                // autoplay={{
                //   delay: 4000,
                //   disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-full h-450 text-primary"
            >
                <SwiperSlide className="text-center text-xl bg-white flex justify-center items-center"><img src="..\img\Dlish_design.png" className="block w-full h-full object-cover"></img></SwiperSlide>
                <SwiperSlide className="text-center text-xl bg-white flex justify-center items-center">
                    <div className="hero min-h-screen bg-[url('../img/Dlish_design.png')]"  >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="text-center text-xl  flex justify-center items-center">

                    <div className="flex w-full">
                        <div className="text-center flex flex-1 items-center w-full max-h-full justify-center bg-base-100">
                            <div className=" max-w-full h-auto text-50 sm:text-xl">
                                <h1 className="mb-5 text-5xl font-bold">Cafetin Maria Auxiliadora</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary"><p className="font-extrabold">COMPRAR</p></button>
                            </div>
                        </div>
                        <img
                            src="\public\img\food.jpeg"
                            alt="Cafetin Don Bosco"
                            class="max-w-full h-auto w-50 object-cover object-center"
                        />
                    </div>

                </SwiperSlide>
                <SwiperSlide className="text-center text-xl bg-white flex justify-center items-center">Slide 4</SwiperSlide>

            </Swiper>
        </>
    )
}
