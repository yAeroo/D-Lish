import Carrousel from "../components/Carrousel";
import '../css/IndexPage.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ComidaCard from "../components/ComidaCard";

export default function Index() {

    return (
        <main>
            {/* Slider de cafeterias */}
            <Carrousel />

            <section className="p-6 bg-neutral w-full space-y-6">
                {/* ----Espacio para diferentes tipos de comidas----  */}
                <div className="space-y-6 px-8">

                    <h2 className="text-5xl md:text-6xl font-extrabold text-center title-text from-primary to-blue-500 py-2">
                        Categorías
                    </h2>

                    <div className="flex gap-4 flex-wrap place-content-between p-0 xl:px-[22rem] lg:px-24">
                        <div className="card w-full bg-base-100 shadow-xl bg-[url('/src/assets/img/food.jpeg')] bg-cover bg-center min-w-min h-auto lg:h-48">
                            <div className="card-body bg-black/50">
                                <h2 className="card-title text-white text-3xl">Almuerzos</h2>
                            </div>
                        </div>
                        {/*  */}
                        <div className="card  w-full md:w-[48%] bg-base-100 shadow-xl bg-[url('/src/assets/img/food.jpeg')] bg-cover bg-center h-auto lg:h-48">
                            <div className="card-body bg-black/50 ">
                                <h2 className="card-title text-white text-3xl">Desayunos</h2>
                            </div>
                        </div>
                        <div className="card w-full md:w-[48%] bg-base-100 shadow-xl bg-[url('/src/assets/img/food.jpeg')] bg-cover bg-center h-auto lg:h-48">
                            <div className="card-body bg-black/50 ">
                                <h2 className="card-title text-white text-3xl">Otros</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </section >

            <section className="rounded-box">
                <h2 className="text-5xl title-text from-secondary to-yellow-100 py-2 text-center">
                    Lo más vendido
                </h2>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    className="w-full text-white"
                >
                    <SwiperSlide>
                        <ComidaCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ComidaCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ComidaCard />
                    </SwiperSlide>

                </Swiper>

            </section>

            <h2 className="text-5xl title-text from-blue-600 to-cyan-500 py-2 text-center">Disfruta con D'lish</h2>
            <section className="text-center rounded-box m-2 color-animation">
                <label className="swap swap-flip text-9xl p-4">
                    <input type="checkbox" />
                    <div className="swap-off">🍱</div>
                    <div className="swap-on">😋</div>
                </label>
            </section>
        </main >

    );
}
