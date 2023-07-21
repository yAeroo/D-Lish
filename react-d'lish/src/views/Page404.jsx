import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  // Aquí puedes agregar tu contenido personalizado para la página 404
  return (
    <div className=' text-center flex h-screen w-full justify-center items-center flex-col'>

        <div className='p-3 pb-10 sm:text-2xl'>
            <img className="animate-fade-up w-[70%] sm:w-[90%] mx-auto" src="..\src\assets\logo\404\PNG-RGB-404-2.png" alt="Error 404" />
            <h1 className='p-3 pt-8 font-extrabold sm:text-4xl animate-fade-up'>Ups, la página no fue encontrada</h1> 
            <p className='animate-fade-up'>Parece que lo que estás buscando no existe.</p>
        </div>

      {/* Botón para volver a la página anterior */}
      <Link to="#" className=' sm:text-xl animate-fade-up btn btn-primary ' onClick={() => window.history.back()}>
        <p className='font-extrabold '>Volver</p>
      </Link>
    </div>
  );
};

export default Page404;