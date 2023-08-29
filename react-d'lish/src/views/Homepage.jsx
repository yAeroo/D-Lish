import { useTranslation } from "react-i18next";

// Componentes
import NavbarHomepage from "../components/Nav/NavbarHomepage";
import Footer from "../components/Footer";
import AuthSelection from "../views/Auth/AuthSelection";

//Link
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

//AOS (Animated On Scroll)
import AOS from 'aos';
import 'aos/dist/aos.css';

// Css
import '../css/homepage.css';

// Imagenes
import HeroImg from "../../src/assets/homepage/food-removebg-preview.png";
import Coffee from "../../src/assets/homepage/coffee.jpg";
import Almuerzos from "../../src/assets/homepage/Almuerzos.png";
import Desayunos from "../../src/assets/homepage/Desayuno.png";

//Iconos
import { IoFastFoodOutline } from "react-icons/io5";
import { CgCoffee } from "react-icons/cg";
import { MdOutlineScreenshot } from "react-icons/md";

export default function Homepage() {
  const { t } = useTranslation();

  AOS.init({
    duration: 800, // Duración de las animaciones en milisegundos
  });

  return (
    <>
      <section className="bg-green-600">
        <div className="md:fixed md:top-0 md:left-0 md:w-full z-10 animate-fade-up animate-once animate-delay-[800ms] ">
          <NavbarHomepage></NavbarHomepage>
        </div>
      </section>

      <div className="hero min-h-screen mt-[-5rem] md:mt-[-2rem] md:pt-[13rem] bg-gradient-to-b from-green-600 from-1%  to-emerald-950">

        <div className="md:mb-[2rem] lg:mb-[0.9rem] xl:mb-[2rem] mb-[-8.8rem] hidden md:block custom-shape-divider-bottom-1689485827">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" cla="shape-fill"></path>
          </svg>
        </div>

        <div className="hero-content flex flex-col md:flex-row-reverse px-10 md:px-10 md:mt-[-6rem] relative">
          <div className="md:w-2/5 xxsm:w-4/5 rounded-lg mt-6 md:ml-1 animate-fade-left animate-duration-600 animate-ease-in-out order-1 md:order-1">
            <img src={HeroImg} className="w-full 2xl:ml-[15rem]" />
          </div>

          <div className="md:w-3/5 order-1 md:order-2 animate-fade-up animate-once animate-delay-[600ms] 2xl:ml-[-20rem]">
            <h1 className="md:text-6xl text-4xl font-bold drop-shadow-lg md:mt-[-4rem] mb-[0] text-slate-100">
              {/* Título */}
              {t("homepage.hero-title")}
            </h1>

            <p className="md:text-2xl py-4 md:py-6 mb-[0] text-slate-200">
              {/* Descripción */}
              {t("homepage.hero-desc")}
            </p>

            <div className="flex space-x-4">
              {/* Botón de registro */}
              <Link to='/auth/register'>
                <button className="btn border-none hover:bg-orange-600 bg-orange-500 drop-shadow-lg text-zinc-50">
                  {t("actions.to-register")}
                </button>
              </Link>

              {/* Botón inicio de sesión */}
              <Link to="/auth/login">
                <button className="btn border-2 border-orange-500 hover:bg-orange-600 hover:text-zinc-50 hover:border-none bg-orange-500 bg-opacity-50 drop-shadow-lg text-zinc-50">
                  {t("actions.login")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-33 mt-[10rem] mx-[2rem] md:mx-[1rem] lg:mx-[15rem]">
        <h1 className="md:text-5xl xl:text-6xl 2xl:text-7xl text-4xl text-center text-primary font-bold" data-aos="fade-up">
          {/* Título de características */}
          {t("homepage.features-title")}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center h-25 mt-[6rem] xl:mt-2 mb-[15rem] xl:mb-[10rem] md:mx-[10rem]">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full md:mt-[6rem]">
          <div className="w-96 bg-base-100 shadow-xl" data-aos="fade-up" data-aos-delay="300">
            <figure className="px-5 pt-10 bg-base-100 flex items-center justify-center">
              <IoFastFoodOutline className="text-6xl" />
            </figure>
            <div className="card-body items-center text-center bg-base-100">
              {/* Título - Feature */}
              <h2 className="card-title">{t("homepage.feature-1-title")}</h2>
              <p>
                {/* Desc. - Feature */} {t("homepage.feature-1-desc")}
              </p>
            </div>
          </div>

          <div className="divider lg:divider-horizontal"></div>

          <div className="w-96 bg-base-100 shadow-xl" data-aos="fade-up" data-aos-delay="600">
            <figure className="px-10 pt-10 bg-base-100 flex items-center justify-center ">
              <CgCoffee className="text-6xl" />
            </figure>
            <div className="card-body items-center text-center bg-base-100">
              {/* Título - Feature */}
              <h2 className="card-title">{t("homepage.feature-2-title")}</h2>
              <p>
                {/* Desc. - Feature */} {t("homepage.feature-2-desc")}
              </p>
            </div>
          </div>

          <div className="divider lg:divider-horizontal"></div>

          <div className="w-96 bg-base-100 shadow-xl" data-aos="fade-up" data-aos-delay="900">
            <figure className="px-10 pt-10 bg-base-100 flex items-center justify-center ">
              <MdOutlineScreenshot className="text-6xl" />
            </figure>
            <div className="card-body items-center text-center bg-base-100">
              {/* Título - Feature */}
              <h2 className="card-title">{t("homepage.feature-3-title")}</h2>
              <p>
                {/* Desc. - Feature */} {t("homepage.feature-3-desc")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200 relative pb-[5rem] md:pb-[0rem]">
        <div className="hero-content flex-col lg:flex-row-reverse px-10 md:px-10 md:mt-[-6rem]">
          <div className="md:w-2/5 rounded-lg md:order-2 mt-8 md:mt-0 md:ml-8 animate-fade-left animate-duration-600 animate-ease-in-out order-2">
            <img
              src={Coffee}
              className="w-full 2xl:ml-[-13rem] mb-6 md:mb-0 rounded-xl transform brightness-80" data-aos="fade-left"
            />
          </div>

          <div className="md:w-3/6 2xl:mr-[-10rem] md:order-1 text-left lg:text-right md:mt-5">
            <h1 className="xl:text-6xl md:text-5xl text-5xl font-bold drop-shadow-lg mt-[5rem] md:mt-[4rem] text-white" data-aos="fade-left">
              {/* ¿Quiénes somos? - Title */}
              {t("homepage.who-title")}
            </h1>
            <p className="xl:text-2xl md:text-xl text-xl py-4 md:py-6" data-aos="fade-left">
              {/* ¿Quiénes somos? - Desc. */}
              {t("homepage.who-desc")}
            </p>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1689492744">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-center w-full min-h-screen relative">
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex flex-col lg:flex-row-reverse px-10 md:px-10 md:mt-[-6rem]">
            <div className="md:w-2/5 rounded-lg mt-1 md:ml-1 animate-fade-left animate-duration-600 animate-ease-in-out order-2 md:order-1">
              <img
                src={Desayunos}
                className="w-full 2xl:ml-[15rem] rounded-xl transform brightness-80" data-aos="fade-right"
              />
            </div>

            <div className="md:w-3/6 order-1 md:order-2 text-left lg:text-left animate-fade-up animate-once animate-delay-[600ms] 2xl:ml-[-20rem] md:mt-5">
              <h1 className="xl:text-6xl md:text-5xl text-5xl font-bold drop-shadow-lg mt-[1rem] md:mt-[4rem] pb-[2rem]" data-aos="fade-right">
                {/* Misión - Title */}
                {t("homepage.mission-title")}
              </h1>
              <p className="xl:text-2xl md:text-xl text-xl py-4 md:py-6" data-aos="fade-right">
                {/* Misión - Desc. */}
                {t("homepage.mission-desc")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200 relative pb-[5rem] md:pb-[0rem]">
        <div className="hero-content flex-col lg:flex-row-reverse px-10 md:px-10 md:mt-[-6rem]">
          <div className="md:w-2/5 rounded-lg md:order-2 pt-4 md:mt-0 md:ml-8 animate-fade-left animate-duration-600 animate-ease-in-out order-2">
            <img
              src={Almuerzos}
              className="w-full 2xl:ml-[-13rem] rounded-xl transform brightness-80" data-aos="fade-left"
            />
          </div>

          <div className="md:w-3/6 2xl:mr-[-10rem] md:order-1 text-left lg:text-right">
            <h1 className="xl:text-6xl md:text-5xl text-5xl font-bold drop-shadow-lg mt-[10rem] md:mt-[4rem] pb-[2rem]" data-aos="fade-left">
              {/* Visión - Title */}
              {t("homepage.vission-title")}
            </h1>
            <p className="xl:text-2xl md:text-xl text-xl pt-1 pb-0 md:py-6" data-aos="fade-left">
              {/* Visión - Desc. */}
              {t("homepage.vission-desc")}
            </p>
          </div>
        </div>
        <div className="custom-shape-divider-top-1689493240">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
      </div>

      <div className="mt-[3rem] mb-[3rem]" data-aos="fade" data-aos-duration="2000">
        <AuthSelection />
      </div>

      <Footer></Footer>
    </>
  );
};
