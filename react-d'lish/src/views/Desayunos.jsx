import React, { useEffect } from 'react';

//Componentes
import NavCafetin from "../components/Nav/NavCafetin";
import NavMobileIndex from "../components/Nav/NavMobileIndex";
import WiggleAlert from "../components/WiggleAlert";

//Banners
import DesayunoBanner from "/src/assets/Dishes/desayunoBanner.png";
import OtrosBanner from "/src/assets/Dishes/otrosBanner.png";
import AlmuerzoBanner from "/src/assets/Dishes/almuerzoBanner.png";

import DesayunoPng from "/src/assets/Dishes/desayunosPng.png";
import OtrosPng from "/src/assets/Dishes/otrosPng.png";
import AlmuerzoPng from "/src/assets/Dishes/almuerzosPng.png";



//Iconos
import { IoChevronBack } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function Desayunos() {

  useEffect(() => {
    // Se encarga de iniciar la pagina con 0 en eje Y
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <NavCafetin />
    <NavMobileIndex />

    <div>
          <main>
          <section className="mb-[0em] md:mb-[0rem] animate-fade animate-ease-in-out animate-once animate-duration-[1000ms]">
        <div className="flex w-full h-[5rem] z-0 md:mb-[5rem]">
        </div>
        <div className="flex justify-between lg:items-center bg-green-600 xxsm:h-[11rem] md:h-[13rem] lg:h-[17rem] mt-[-1rem] md:px-7 md:pt-1 rounded-t-2xl drop-shadow-md animate-fade-up animate-ease-in-out animate-once animate-duration-[500ms] relative">
          <h1 className="text-4xl md:text-6xl font-bold xxsm:mt-[2rem] md:mt-[3rem] lg:mt-[0rem] pb-[1rem] xxsm:ml-7 md:ml-6 md:px-1 text-white">
            Desayunos
          </h1>
          <div className="flex flex-col items-end absolute right-0 xxsm:top-[3.5rem] md:top-[1rem] lg:bottom-auto lg:top-[0rem] lg:right-[0rem]"> 
            <img
              src={DesayunoPng}
              className="xxsm:h-[10rem] md:h-[16rem] lg:h-[23rem]"
            />
          </div>
        </div>
      </section>
            <section className="bg-base-100 text-white mt-[-1rem] min-h-screen rounded-t-2xl items-center justify-between mx-0 xl:mx-[0rem] animate-fade-up animate-ease-in-out animate-once animate-duration-[500ms]">
              <div className="flex items-center justify-between mb-10 animate-fade-down animate-ease-in-out animate-once animate-duration-[1000ms] animate-delay-[300ms]">
                
              </div>


          
              <br />
            </section>
            <br /> <br />
          </main>
      </div>
    </>
    
  )
}
