import Carrousel from "../components/Carrousel";
import "../css/IndexPage.css";
import "../components/NavMobileIndex";

//Imagenes
import PolloAsado from "../../src/assets/cafetinview/PolloAsado.jpg";
import PolloAsadoPNG from "../../src/assets/cafetinview/PolloAsadoPNG.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ComidaCard from "../components/ComidaCard";
import NavMobileIndex from "../components/NavMobileIndex";

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
        <h2 className="text-3xl md:text-4xl font-semibold text-white py-8 px-8">
          Lo más vendido
        </h2>

        <div className="flex items-center justify-center mx-1 h-[10rem] w-full">
          <div className="flex items-center justify-start space-x-4 mt-4">
            <div className="w-20 h-20 rounded overflow-hidden">
              <img className="w-full h-full object-cover" src={PolloAsado} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-neutral-100">
                Pollo Asado
              </h2>
              <h3 className="text-md text-neutral-200">Miguel Magone</h3>
              <p className="text-sm text-neutral-200">$2.50</p>
            </div>
          </div>
          <button className="border-primary border-2 text-primary text-xs px-2 py-1 rounded-full ml-10">
              Ver más
          </button>
        </div>

        <div className="flex items-center justify-center mx-1 h-[10rem] w-full">
          <div className="flex items-center justify-start space-x-4 mt-4">
            <div className="w-20 h-20 rounded overflow-hidden">
              <img className="w-full h-full object-cover" src={PolloAsado} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-neutral-100">
                Pollo Asado
              </h2>
              <h3 className="text-md text-neutral-200">Maria Auxiliadora</h3>
              <p className="text-sm text-neutral-200">$2.50</p>
            </div>
          </div>
          <button className="border-primary border-2 text-primary text-xs px-2 py-1 rounded-full ml-10">
              Ver más
          </button>
        </div>

      </section>

      <h2 className="text-5xl title-text from-blue-600 to-cyan-500 py-2 text-center">
        Disfruta con D'lish
      </h2>
      <section className="text-center rounded-box m-2 color-animation">
        <label className="swap swap-flip text-9xl p-4">
          <input type="checkbox" />
          <div className="swap-off">🍱</div>
          <div className="swap-on">😋</div>
        </label>
      </section>
    </main>
  );
}
