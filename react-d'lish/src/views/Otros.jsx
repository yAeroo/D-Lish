import React, { useEffect } from "react";

//Componentes
import NavCafetin from "../components/Nav/NavCafetin";
import NavMobileIndex from "../components/Nav/NavMobileIndex";
import WiggleAlert from "../components/WiggleAlert";
import FoodCard from "../components/FoodCard";

//Banners
import DesayunoPng from "/src/assets/Dishes/desayunosPng.png";
import OtrosPng from "/src/assets/Dishes/otrosPng.png";
import AlmuerzoPng from "/src/assets/Dishes/almuerzosPng.png";

//Imagenes
import Burrito from "/src/assets/index/burrito.jpg";
import JugosNaturales from "/src/assets/index/jugosNaturales.jpg";
import Pupusas from "/src/assets/index/pupusas.jpg";
import Tortas from "/src/assets/index/Tortas.jpg";
import PolloAsado from "/src/assets/index/polloAsado.jpg";
import Licuado from "/src/assets/index/licuado.jpg";

export default function Desayunos() {
  useEffect(() => {
    // Cuando el componente se monta, ajusta el scroll al principio de la página
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavCafetin />
      <NavMobileIndex />

      <div>
        <main>
          <section className="mb-[0em] md:mb-[0rem] animate-fade animate-ease-in-out animate-once animate-duration-[1000ms]">
            <div className="fflex w-full h-[4rem] z-0 md:mb-[4rem]"></div>
            <div className="flex justify-between lg:items-center bg-orange-500 xxsm:h-[11rem] md:h-[13rem] lg:h-[17rem] mt-[-1rem] md:px-7 md:pt-1 rounded-t-2xl drop-shadow-md animate-fade-up animate-ease-in-out animate-once animate-duration-[500ms] relative">
              <h1 className="text-4xl md:text-6xl font-bold xxsm:mt-[2rem] md:mt-[3rem] lg:mt-[0rem] pb-[1rem] xxsm:ml-7 md:ml-6 md:px-1 text-white">
                Otros
              </h1>
              <div className="flex flex-col items-end absolute right-0 xxsm:top-[3.5rem] md:top-[1rem] lg:bottom-auto lg:top-[0rem] lg:right-[0rem]">
                <img
                  src={OtrosPng}
                  className="xxsm:h-[10rem] md:h-[16rem] lg:h-[23rem]"
                />
              </div>
            </div>
          </section>
          <section className="bg-base-100 text-white mt-[-1rem] rounded-t-2xl items-center justify-between mx-0 xl:mx-[0rem] animate-fade-up animate-ease-in-out animate-once animate-duration-[500ms]">
            <h2 className="text-3xl md:text-5xl font-bold drop-shadow-2xl pt-12 px-8 text-center">
              Popular entre Estudiantes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:mx-[6rem] gap-4 md:gap-8 xl:gap-12 px-8 pt-8 pb-[10rem]">
              <FoodCard
                name="Jugos Naturales"
                photo={JugosNaturales}
                cafetin="Don Bosco"
                precio="0.25"
                categoria="Otros"
              />
              <FoodCard
                name="Licuados"
                photo={Licuado}
                cafetin="Maria Auxiliadora"
                precio="1.00"
                categoria="Otros"
              />
              <FoodCard
                name="Licuados"
                photo={Licuado}
                cafetin="Maria Auxiliadora"
                precio="1.00"
                categoria="Otros"
              />
              <FoodCard
                name="Jugos Naturales"
                photo={JugosNaturales}
                cafetin="Don Bosco"
                precio="0.25"
                categoria="Otros"
              />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
