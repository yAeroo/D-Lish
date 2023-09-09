import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import clienteAxios from "../config/axios";

//Componentes
import Carrousel from "../components/Carrousel";
import NavIndex from "../components/Nav/NavIndex";
import NavMobileIndex from "../components/Nav/NavMobileIndex";
import FoodCard from "../components/FoodCard";
import { CgSpinner } from "react-icons/cg";

//Estilos CSS
import "../css/IndexPage.css";

//Imagenes
import DesayunoBanner from "/src/assets/Dishes/desayunoBanner.png";
import OtrosBanner from "/src/assets/Dishes/otrosBanner.png";
import AlmuerzoBanner from "/src/assets/Dishes/almuerzoBanner.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useCafeterias from "../hooks/useCafeterias";

export default function Index() {
  const { t } = useTranslation();
  const { obtenerCafeterias } = useCafeterias();
  const [sugerencias, setSugerencias] = useState(null);
  const [ flagSuggestions, setFlagSuggestions ] = useState();
  const [ showSuggestions, setShowSuggestions ] = useState(false);

  // Obtén cafeteriaId desde useParams()
  const { cafeteriaId, dishId } = useParams();

  useEffect(() => {
    obtenerCafeterias();
    obtenerSugerencias();
  }, []);

  const obtenerSugerencias = async () => {
    try {
      const { data } = await clienteAxios(`/api/suggestions/mainDish`);
      const contSugerencias = data?.data;
      setSugerencias(contSugerencias);
      setFlagSuggestions(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    if (flagSuggestions === true) {
        setShowSuggestions(true);
    }
  }, [flagSuggestions])

    console.log(sugerencias);
  console.log('flag', flagSuggestions);
  console.log('show', showSuggestions);

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
              {/* Título */}
              {t("index.category-title")}
            </h2>

            <div className="grid grid-cols-2 relative gap-4 mx-10 2xl:mx-[30rem] xl:mx-[20rem] lg:mx-[17rem] md:mx-[8rem] xxsm:mx-[1rem]">
              {/* Contenedor de Desayunos */}
              {/* <Link to={`/desayunos`}> */}
                <div
                  className="bg-cover bg-center h-32 md:h-48 relative rounded-md animate-fade-left animate-once animate-delay-[400ms]"
                  style={{ backgroundImage: `url(${DesayunoBanner})` }}
                >
                  <div className="absolute top-0 left-0 p-2 md:pl-4 md:pt-3 text-white font-bold 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl text-[1.7rem] leading-[2.25rem]">
                    {/* Desayunos */}
              {t("index.category-breakfast")}
                  </div>
                </div>
              {/* </Link> */}

              {/* Contenedor de Otros */}
              {/* <Link to={`/otros`}> */}
                <div
                  className="bg-cover bg-center h-32 md:h-48 relative rounded-md animate-fade-left animate-once animate-delay-[400ms]"
                  style={{ backgroundImage: `url(${OtrosBanner})` }}
                >
                  <div className="absolute top-0 left-0 p-2 md:pl-4 md:pt-3 text-white font-bold 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl text-[1.7rem] leading-[2.25rem]">
                     {/* Otros */}
              {t("index.category-other")}
                  </div>
                </div>
              {/* </Link> */}

              {/* Contenedor de Almuerzos */}
              {/* <Link to={`/almuerzos`} className="col-span-2"> */}
                <div
                  className="bg-cover bg-center h-40 xl:h-52 relative col-span-2 rounded-md animate-fade-left animate-once animate-delay-[400ms]"
                  style={{ backgroundImage: `url(${AlmuerzoBanner})` }}
                >
                  <div className="absolute top-0 left-0 p-2 md:pl-4 md:pt-3 text-white font-bold 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl text-[1.7rem] leading-[2.25rem]">
                     {/* Almuerzos */}
              {t("index.category-lunch")}
                  </div>
                </div>
              {/* </Link> */}
            </div>
          </div>
        </section>

        <section className="lg:rounded-2xl 2xl:px-[12rem] bg-base-200 pb-10 my-[4rem]">
          <h2 className="text-3xl md:text-5xl font-bold drop-shadow-2xl py-8 px-8 md:text-center">
              {/* Los mas vendidos */}
              {t("index.best-dishes-title")}          </h2>
          {/* Props del apartado de comidas  */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:mx-[6rem] gap-4 md:gap-8 xl:gap-12 px-8 mb-12">
          {showSuggestions ? sugerencias.map((sugerencia, id) => ( 
              <FoodCard
                key={id}
                name={sugerencia.name}
                photo={sugerencia.img}
                dishId={sugerencia.id}
                cafeteriaId={sugerencia.cafeteria.id}
                cafeteriaName={sugerencia.cafeteria.name}
              /> )):
                <div className="flex items-center justify-center col-span-2">
                  <CgSpinner className="loading-icon mr-2" /> Preparando sugerencias...
                </div>
              }
          </div>
        </section>
      </main>
    </div>
  );
}
