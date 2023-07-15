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

      <div className="hero min-h-screen bg-gradient-to-r from-slate-900 to-base-100">
        <div className="hero-content flex-col md:flex-row-reverse px-10">
          <img
            src={HeroImg}
            className="w-[34rem] md:-mt-[8rem] md:-mr-[8rem] rounded-lg animate-fade-left animate-duration-600 animate-ease-in-out"
          />
          <div className="md:-mt-[16rem] md:-ml-[12rem] animate-fade-up animate-once animate-delay-[600ms] drop-shadow-md">
            <h1 className="md:text-7xl text-5xl font-bold text-primary drop-shadow-lg">
              Ordena tu comida de manera rapida y sencilla
            </h1>
            <p className="md:text-2xl py-6">
              Cansado de filas de espera? Ingresa y ordena tu comida con
              nosotros.
            </p>

            <button className="btn btn-error mr-4 drop-shadow-lg text-zinc-50">
              Registrate
            </button>
            <button className="btn btn-outline btn-error drop-shadow-lg ">
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[10rem] mx-[2rem] md:mx-[1rem] lg:mx-[15rem]">
        <h1 className="md:text-7xl text-6xl font-bold text-primary drop-shadow-lg text-center">
          Descubre la nueva forma de hacer pedidos en línea
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen mt-[6rem] md:mx-[22rem]">

        <div className="flex flex-col items-center justify-center w-full md:flex-col lg:flex-row md:mt-[6rem]">
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
