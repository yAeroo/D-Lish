import Carrousel from "../components/Carrousel";
import "../css/IndexPage.css";
import "../components/Nav/NavMobileIndex";

//Imagenes
import PolloAsado from "../../src/assets/cafetinview/PolloAsado.jpg";
import PolloAsadoPNG from "../../src/assets/cafetinview/PolloAsadoPNG.png";
import Burrito from "../../src/assets/index/burrito.jpg";
import JugosNaturales from "../../src/assets/index/jugosNaturales.jpg";
import Pupusas from "../../src/assets/index/pupusas.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ComidaCard from "../components/ComidaCard";
import NavMobileIndex from "../components/Nav/NavMobileIndex";
import FoodCard from "../components/FoodCard";

export default function Index() {
  return (
    <main>
      <></>

      <NavMobileIndex />

      {/* Slider de cafeterias */}
      <Carrousel />

      <section className="p-6 bg-base-100 w-full space-y-6">
        {/* ----Espacio para diferentes tipos de comidas----  */}
        <div className="space-y-6 px-1">
          <h2 className="text-3xl md:text-4xl md:text-center font-semibold text-neutral-100 py-2">
            Categorías
          </h2>

          <div className="flex gap-4 flex-wrap place-content-between p-0 xl:px-[22rem] lg:px-24">
            <div className="card w-full bg-base-100 shadow-xl bg-[url('/src/assets/img/food.jpeg')] bg-cover bg-center min-w-min h-auto lg:h-48">
              <div className="card-body bg-black/80">
                <h2 className="card-title text-neutral-200 text-3xl">
                  Platos Completos | Almuerzos
                </h2>
              </div>
            </div>
            {/*  */}
            <div className="card  w-full md:w-[48%] bg-base-100 shadow-xl bg-[url('/src/assets/img/food.jpeg')] bg-cover bg-center h-auto lg:h-48">
              <div className="card-body bg-black/80 ">
                <h2 className="card-title text-neutral-200 text-3xl">
                  Desayunos
                </h2>
              </div>
            </div>
            <div className="card w-full md:w-[48%] bg-base-100 shadow-xl bg-[url('/src/assets/img/food.jpeg')] bg-cover bg-center h-auto lg:h-48">
              <div className="card-body bg-black/80 ">
                <h2 className="card-title text-neutral-200 text-3xl">Otros</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:mx-[7rem] px-1 bg-base-200 pb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-2xl py-8 px-8">
          Lo más vendido
        </h2>

        {/* Props del apartado de comidas  */}

        <FoodCard name="Pupusas 3 x $1" photo={Pupusas} cafetin="Miguel Magone" />

        <FoodCard name="Burrito de Carne" photo={Burrito} cafetin="Miguel Magone" />

        <FoodCard name="Jugos Naturales" photo={JugosNaturales} cafetin="Miguel Magone" />

      </section>

    </main>
  );
}
