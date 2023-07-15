import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroImg from "../../public/img/dlishMockup3.png";
import Coffee from "../../public/img/coffee.jpg";
import Almuerzos from "../../public/img/Almuerzos.png";
import Food from "../../public/img/food.jpeg";
import ButtonFill from "./ButtonFill";
import ButtonOutline from "./ButtonOutline";
import { IoFastFoodOutline } from "react-icons/io5";
import { CgCoffee } from "react-icons/cg";
import { MdOutlineScreenshot } from "react-icons/md";

const Header = () => {
  return (
    <>
      <section className="px-4 md:px-24 py-4 bg-gradient-to-r from-slate-900 to-base-100">
        <div className="animate-fade-up animate-once animate-delay-[1300ms]">
          <Navbar></Navbar>
        </div>
      </section>

      <div class="hero min-h-screen bg-gradient-to-r from-slate-900 to-base-100">
  <div class="hero-content flex flex-col md:flex-row-reverse px-10 md:px-10 md:mt-[-6rem]">
    <div class="md:w-2/5 rounded-lg mt-1 md:ml-1 animate-fade-left animate-duration-600 animate-ease-in-out order-1 md:order-1">
      <img src={HeroImg} class="w-full 2xl:ml-[15rem]" />
    </div>
    
    <div class="md:w-3/5 order-1 md:order-2 animate-fade-up animate-once animate-delay-[600ms] 2xl:ml-[-20rem]">
      <h1 class="md:text-6xl text-4xl font-bold text-primary drop-shadow-lg md:mt-[-4rem] ">
        Ordena tu comida de manera rápida y sencilla
      </h1>
      <p class="md:text-2xl py-4 md:py-6">
        ¿Cansado de filas de espera? Ingresa y ordena tu comida con nosotros.
      </p>

      <div class="flex space-x-4">
        <button class="btn btn-error drop-shadow-lg text-zinc-50">
          Regístrate
        </button>
        <button class="btn btn-outline btn-error drop-shadow-lg">
          Iniciar Sesión
        </button>
      </div>
    </div>
  </div>
</div>





      <div className="flex items-center justify-center mt-[10rem] mx-[2rem] md:mx-[1rem] lg:mx-[15rem]">
        <h1 className="md:text-7xl text-6xl font-bold text-primary drop-shadow-lg text-center">
          Descubre la nueva forma de hacer pedidos en línea
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen mt-[6rem] md:mx-[22rem]">

        <div className="flex flex-col 2xl:flex-row items-center justify-center w-full md:mt-[6rem]">
          <div className="w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 bg-base-100 flex items-center justify-center ">
              <IoFastFoodOutline className="text-6xl" />
            </figure>
            <div className="card-body items-center text-center bg-base-100">
              <h2 className="card-title">Facil de usar</h2>
              <p>
                Interfaz amigable e intuitiva que se adapta a todas tus
                necesidades.
              </p>
            </div>
          </div>

          <div className="divider lg:divider-horizontal"></div>

          <div className="w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 bg-base-100 flex items-center justify-center ">
              <CgCoffee className="text-6xl" />
            </figure>
            <div className="card-body items-center text-center bg-base-100">
              <h2 className="card-title">Para todos</h2>
              <p>
                Plataforma adaptada para estudiantes, maestros, y propietarios
                de cafeterías.
              </p>
            </div>
          </div>

          <div className="divider lg:divider-horizontal"></div>

          <div className="w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 bg-base-100 flex items-center justify-center ">
              <MdOutlineScreenshot className="text-6xl" />
            </figure>
            <div className="card-body items-center text-center bg-base-100">
              <h2 className="card-title">Adaptable</h2>
              <p>
                Interfaz responsiva y visualizacion adaptada a todos los
                dispositivos.
              </p>
            </div>
          </div>
        </div>

        <div className="divider md:mt-[10rem]"></div>

        <div class="w-full h-80 transform mt-[6rem]"></div>
      </div>

        

      <Footer></Footer>
    </>
  );
};

export default Header;
