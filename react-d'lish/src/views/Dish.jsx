import React, { useState } from 'react'
// Habilitando archivo para router link
import { Link } from "react-router-dom";
import NavCafetin from '../components/Nav/NavCafetin';
import Footer from '../components/Footer';
import FoodCardDish from '../components/FoodCardDish';
import Burrito from "../../src/assets/index/burrito.jpg";
import JugosNaturales from "../../src/assets/index/jugosNaturales.jpg";
import Pupusas from "../../src/assets/index/pupusas.jpg";

import { useParams } from 'react-router-dom';

const Dish = () => {

  // Extraer parametros
  const { cafeteriaId, dishId } = useParams();
  console.log(cafeteriaId, dishId);

  return (
    <>
      {/* Apartado de NavBar */}
      <section className='px-4 md:px-24 py-4 bg-gradient-to-r'>
        <div className='animate-fade-up animate-once animate-delay-[1300ms]'><NavCafetin></NavCafetin></div>
      </section>

      <div className='flex items-center justify-center w-full min-h-screen animate-fade-up animate-once animate-delay-[1300ms]'>
        <div
          className="px-8 py-12 max-w-md mx-auto sm:max-w-xl"
        >
          <div className="xl:max-w-xl">
            <img className="h-25 rounded-lg" src="../src/assets/img/Almuerzos.png" alt="ComidaPIC" />
            <h1
              className="mt-6 text-2xl font-bold sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl lg:"
            >
              Cafetín "Maria Auxiliadora"
              <br className="hidden lg:inline" />
              <span className="text-primary"> Almuerzo</span>
            </h1>
            <p className="mt-2 sm:mt-4 sm:text-xl text-white-900">
              Agrega lo que desees para el almuerzo:
            </p>
            <p className="mt-2 sm:mt-4 sm:text-xl text-gray">
              Los campos con * son obligatorios
            </p>
            <div className="flex flex-col w-full border-opacity-50">

              <br />

              <form className=''>

                <div className=" text-white font-bold mb-1">Opciones principales * (solo puedes escoger 1)</div>
                <hr className='bg-white  ' />
                <br />

                <div className="w-full max-w-md  md:w-53 md:mx-auto lg:w-11/12 ">
                  <div className="flow-root">

                    <FoodCardDish name="Pollo a la plancha" photo={Pupusas} cafetin="Miguel Magone" />

                    <FoodCardDish name="Carne a la plancha" photo={Pupusas} cafetin="Miguel Magone" />

                    <FoodCardDish name="Lasagna" photo={Pupusas} cafetin="Miguel Magone" />

                    <FoodCardDish name="Burritos" photo={Pupusas} cafetin="Miguel Magone" />
                  </div>
                </div>

                <br />
                <div className=" text-white font-bold mb-1">Complementos *  (escoge 2)</div>
                <hr className='bg-white' />
                <br />

                <div className="w-full max-w-md  md:w-53 md:mx-auto lg:w-11/12 ">
                  <div className="flow-root">


                    <FoodCardDish name="Arroz" photo={Burrito} cafetin="Miguel Magone" />

                    <FoodCardDish name="Casamiento" photo={Burrito} cafetin="Miguel Magone" />

                    <FoodCardDish name="Chimol" photo={Burrito} cafetin="Miguel Magone" />
                  </div>
                </div>

                <br />

                <div className=" text-white font-bold mb-1">Bebidas | +$0.25</div>
                <hr className='bg-white' />
                <br />
                <div className="w-full max-w-md  md:w-53 md:mx-auto lg:w-11/12 ">
                  <div className="flow-root">
                    <FoodCardDish name="Agua en bolsa" photo={JugosNaturales} cafetin="Miguel Magone" />

                    <FoodCardDish name="Agua en botella" photo={JugosNaturales} cafetin="Miguel Magone" />

                    <FoodCardDish name="Jugos Naturales" photo={JugosNaturales} cafetin="Miguel Magone" />
                  </div>
                </div>

              </form>

            </div>

          </div>
          <Link to="/order">
            <button className="btn no-animation w-full   disabled font-plane bg-accent text-white mt-4">Ordenar</button>
          </Link>
        </div>

      </div>
      <Footer></Footer>
    </>
  )
}

export default Dish
                            // <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-52">
                            //             <h1 className='text-white  md:px-40  md:text-50px  sm:items-center justify-center '>Escoge tu Bebida</h1>
                            //             <li className='dark:text-white mt-6'><h1>Tamarindo
                            //             <input type="checkbox"  className="checkbox checkbox-success" /></h1></li>
                            //             <li className='dark:text-white'><h1>Té
                            //             <input type="checkbox"  className="checkbox checkbox-success" /></h1></li>
                            //             <li className='dark:text-white' ><h1>Limonada
                            //             <input type="checkbox"  className="checkbox checkbox-success" /></h1></li>
                            //             <li className='dark:text-white'><h1>Jamaica
                            //             <input type="checkbox"  className="checkbox checkbox-success" /></h1></li>
                            //           </ul> 