import React from 'react';
import { Link } from 'react-router-dom';
import JackelineRojas from '../../src/assets/logo/404/PNG-RGB-404-2.png';

const Page404 = () => {
  // Aquí puedes agregar tu contenido personalizado para la página 404
  return (
    // h-screen 
    <div className=' text-center flex h-[inherit] w-full justify-center items-center flex-col bg-[#252525]'>

        <div className='p-3 pb-10 sm:text-2xl  '>

        <h1 className='p-3 pb-8 font-extrabold text-5xl sm:text-7xl xl:text-6xl animate-fade-up text-terc'> Error404</h1> 
            <img className="animate-fade-up w-[70%] sm:w-[60%] xl:w-[50%] mx-auto" src={JackelineRojas} alt="Error 404" />
            <h1 className='p-3 pt-8 font-extrabold sm:text-4xl xl:text-2xl animate-fade-up'>Ups, la página no fue encontrada</h1> 
            <p className='animate-fade-up xl:text-sm'>Parece que lo que estás buscando no existe.</p>

        </div>

      {/* Botón para volver a la página anterior */}
      <Link to="#" className=' w-full max-w-[80%] sm:max-w-[30%] sm:text-xl animate-fade-up btn btn-primary ' onClick={() => window.history.back()}>
        <p className='font-extrabold '>Volver</p>
      </Link>
    </div>
  );
};

export default Page404;