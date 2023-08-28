import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
//Componentes
import WiggleAlert from "../components/WiggleAlert";
import db_wall from "../assets/cafeterias/db_wall.jpg";

// CONTENIDO VARIABLE
import useCafeterias from "../hooks/useCafeterias";

//Iconos
import { FaRegHeart } from "react-icons/fa";
import FoodCard from "../components/Cafeteria/FoodCard";
import NavCafetin from "../components/Nav/NavCafetin";

export default function CafetinView() {
  // Extraer parametro
  const { cafeterias, obtenerContenidoCafeteria, contenidoCafeteria, limpiarCafeteria } = useCafeterias();
  const { cafeteriaId } = useParams();

  // Extraer contenido de la cafeteria actual al tener el ID 
  useEffect(() => {
    limpiarCafeteria();
    obtenerContenidoCafeteria(cafeteriaId);
  }, []);

  // Contenido de la cafeteria
  const cafeteria = cafeterias?.find(cafeteria => cafeteria?.id == cafeteriaId);
  const { platillos } = contenidoCafeteria;

  return (
    <>
      <section className="mb-[0em] md:mb-[0rem] animate-fade animate-ease-in-out animate-once animate-duration-[1000ms] animate-delay-[800ms]">
        <div className="flex w-full h-[15rem] z-0 md:mb-[9rem]">
          <img src={db_wall} className="bg-cover w-full md:min-h-screen filter brightness-50" />
        </div>
        <div className="flex justify-between items-center bg-green-600 mt-[-1rem] md:px-7 md:pt-1 rounded-t-2xl drop-shadow-md animate-fade animate-ease-in-out animate-once animate-duration-[1000ms] animate-delay-[800ms]">
          <h1 className="text-4xl md:text-6xl font-bold my-10 pb-[1rem] ml-10 md:px-1 text-white">
            {cafeteria?.nombre}
          </h1>
          <div className="stat flex flex-col items-end">
            <div className="stat-title text-xs md:text-lg text-white">Recomendado por</div>
            <div className="flex items-center">
              <div className="stat-figure text-white text-xs font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 md:w-8 md:h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-value text-sm md:text-3xl ml-1 text-white">
                {cafeteria?.likes}
              </div>
            </div>
            <div className="stat-desc text-sm md:text-lg text-white">Estudiantes</div>
          </div>
        </div>
      </section >

      <section className="bg-base-100 text-white mt-[-1rem] min-h-screen rounded-t-2xl items-center justify-between mx-0 xl:mx-[0rem] animate-fade animate-ease-in-out animate-once animate-duration-[1000ms] animate-delay-[800ms]">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold px-2 ml-6 md:ml-[3rem] mt-6 text-terc">
              ● Abierto
            </h2>
          </div>
          <div className="flex items-center">
            <h2 className="text-2xl px-1 ml-6 md:ml-[3rem] mt-6 text-red-500">
              171
            </h2>
            <FaRegHeart className="w-7 h-7 ml-2 mt-6 mr-6 md:mr-[3rem] text-red-500" />
          </div>
        </div>

        <section className="mb-10">
          <WiggleAlert />
        </section>

        <section className="flex items-center justify-center ">
          <div className="join">
            <input
              className="join-item btn bg-base-300"
              type="radio"
              name="options"
              aria-label="Desayunos"
            />
            <input
              className="join-item btn bg-base-300"
              type="radio"
              name="options"
              aria-label="Almuerzos"
            />
            <input
              className="join-item btn bg-base-300"
              type="radio"
              name="options"
              aria-label="Bebidas"
            />
          </div>
        </section>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-[3rem] px-[3rem] md:px-[8rem] lg:px-[3rem] gap-8">

          {/* CONDICIONAL - ARREGLO DE PLATILLOS */}
          {platillos?.length ?
            platillos.map(
              (platillo, id) => (
                <FoodCard
                  name={platillo.name}
                  key={id} id={platillo.id}
                  description={platillo.description}
                  cafeteriaId={cafeteriaId} />
              )) :
            'No hay nada'
          }

        </div>
        <br />
      </section>

      <br /> <br />


    </>
  );
}
