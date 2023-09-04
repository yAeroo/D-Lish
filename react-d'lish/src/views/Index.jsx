import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Spinner
import Spinner from '../components/Spinner';

//Componentes
import Carrousel from "../components/Carrousel";
import NavIndex from "../components/Nav/NavIndex";
import NavMobileIndex from "../components/Nav/NavMobileIndex";
import FoodCard from "../components/FoodCard";

//Estilos CSS
import "../css/IndexPage.css";

//Imagenes
import Burrito from "/src/assets/index/burrito.jpg";
import JugosNaturales from "/src/assets/index/jugosNaturales.jpg";
import Pupusas from "/src/assets/index/pupusas.jpg";
import Tortas from "/src/assets/index/Tortas.jpg";
import PolloAsado from "/src/assets/index/polloAsado.jpg";
import DesayunoBanner from "/src/assets/Dishes/desayunoBanner.png";
import OtrosBanner from "/src/assets/Dishes/otrosBanner.png";
import AlmuerzoBanner from "/src/assets/Dishes/almuerzoBanner.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



export default function Index() {


  return (
    <div>

      <main>
        {/* Navbar Flotante */}
        <div className="absolute w-full z-10">
          <NavIndex />
        </div>

        <NavMobileIndex />

        {/* Slider de cafeterias */}
        <Carrousel />

        <section className="p-0 bg-base-100 w-full space-y-6">
          {/* ----Espacio para diferentes tipos de comidas----  */}
          <div className="space-y-6 px-0">
            <h2 className="text-3xl md:text-5xl p-6 my-8 md:text-center font-semibold text-neutral-100 py-2">
              Categorías
            </h2>

            <div className="grid grid-cols-2 relative gap-4 mx-10 2xl:mx-[30rem] xl:mx-[20rem] lg:mx-[17rem] md:mx-[8rem] xxsm:mx-[1rem]">
              {/* Contenedor de Desayunos */}
              <Link to={`/CategoryView`} >
                <div
                  className="bg-cover bg-center h-32 md:h-48 relative rounded-md animate-fade-left animate-once animate-delay-[400ms]"
                  style={{ backgroundImage: `url(${DesayunoBanner})` }}
                >
                  <div className="absolute top-0 left-0 p-2 md:pl-4 md:pt-3 text-white font-bold 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl text-[1.7rem] leading-[2.25rem]">
                  Desayunos
                  </div>
                </div>
              </Link>
              

              {/* Contenedor de Otros */}
              <div
                className="bg-cover bg-center h-32 md:h-48 relative rounded-md animate-fade-left animate-once animate-delay-[400ms]"
                style={{ backgroundImage: `url(${OtrosBanner})` }}
              >
                <div className="absolute top-0 left-0 p-2 md:pl-4 md:pt-3 text-white font-bold 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl text-[1.7rem] leading-[2.25rem]">
                  Otros
                </div>
              </div>

              {/* Contenedor de Almuerzos */}
              <div
                className="bg-cover bg-center h-40 xl:h-52 relative col-span-2 rounded-md animate-fade-left animate-once animate-delay-[400ms]"
                style={{ backgroundImage: `url(${AlmuerzoBanner})` }}
              >
                <div className="absolute top-0 left-0 p-2 md:pl-4 md:pt-3 text-white font-bold 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl text-[1.7rem] leading-[2.25rem]">
                  Almuerzos
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:rounded-2xl 2xl:px-[12rem] bg-base-200 pb-10 my-[4rem]">
          <h2 className="text-3xl md:text-5xl font-bold drop-shadow-2xl py-8 px-8 md:text-center">
            Lo más vendido
          </h2>

          {/* Props del apartado de comidas  */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:mx-[6rem] gap-4 md:gap-8 xl:gap-12 px-8 mb-12">
            <FoodCard
              name="Pupusas"
              photo={Pupusas}
              cafetin="Don Bosco"
              precio="1.00"
              categoria="Desayunos"
            />

            <FoodCard
              name="Burrito"
              photo={Burrito}
              cafetin="Maria Auxiliadora"
              precio="2.50"
              categoria="Almuerzos"
            />

            <FoodCard
              name="Jugos Naturales"
              photo={JugosNaturales}
              cafetin="Don Bosco"
              precio="0.25"
              categoria="Otros"
            />

            <FoodCard
              name="Pupusas"
              photo={Pupusas}
              cafetin="Miguel Magone"
              precio="1.00"
              categoria="Desayunos"
            />

            <FoodCard
              name="Pollo Asado"
              photo={PolloAsado}
              cafetin="Maria Auxiliadora"
              precio="2.50"
              categoria="Almuerzos"
            />

            <FoodCard
              name="Tortas"
              photo={Tortas}
              cafetin="Don Bosco"
              precio="2.50"
              categoria="Almuerzos"
            />
          </div>
        </section>
      </main>
      )
    </div>
  );
}
