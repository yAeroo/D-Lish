import React, { useState } from 'react'
// Habilitando archivo para router link
import { Link } from "react-router-dom";


const Dish = () => {
return (
    <div className='flex items-center justify-center w-full min-h-screen animate-fade-up'>    
      <div
        className="px-8 py-12 max-w-md mx-auto sm:max-w-xl"
      >
        <div className="xl:max-w-xl">
          <img className="h-25 rounded-lg" src="\public\img\Almuerzos.png" alt="ComidaPIC" />
          <h1
            className="mt-6 text-2xl font-bold sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl lg:"
          > 
            Cafetín "Maria Auxiliadora" 
            <br className="hidden lg:inline" />
            <span className="text-primary"> Almuerzo</span>
          </h1>
          <p className="mt-2 sm:mt-4 sm:text-xl text-white-900">
            Agrega Lo que Desees para el almuerzo:
          </p>
         <p className="mt-2 sm:mt-4 sm:text-xl text-gray">
            Los campos con * son obligatorios
          </p>
<div className="flex flex-col w-full border-opacity-50">

<br />

<form className=''>

<div className=" text-white font-bold mb-1">Opciones Principales * (solo puedes escoger 1)</div>
<hr className='bg-white  ' />
<br />

<div className="w-full max-w-md p-4 border border-gray-200 rounded-lg bg-neutral shadow sm:p-8 md:w-53 md:mx-auto md:p-6 md:border md:rounded-lg md:shadow-lg lg:w-11/12 ">
  <div className="flow-root">
    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

      <li className="py-3">
        <div className="flex items-center space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              Filete de Carne
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <input type="checkbox" className="checkbox checkbox-success" />
          </div>
        </div>
      </li>

      <li className="py-3">
        <div className="flex items-center space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              Filete de Carne
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <input type="checkbox" className="checkbox checkbox-success" />
          </div>
        </div>
      </li>
      

    </ul>
  </div>
</div>

<br />
<div className=" text-white font-bold mb-1">Complementos *  (solo puedes escoger 1 o 2)</div>
<hr className='bg-white' />
<br />

 <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg bg-neutral shadow sm:p-8 md:w-53 md:mx-auto md:p-6 md:border md:rounded-lg md:shadow-lg lg:w-11/12">
   <div className="flow-root">

        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

            <li className="py-3 ">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Arroz
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox"  className="checkbox checkbox-success" />
                    </div>
                </div>
            </li>
            <li className="py-3 ">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Casamiento
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox"  className="checkbox checkbox-success" />
                    </div>
                </div>
            </li>
            <li className="py-3 ">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Papas Fritas
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox"  className="checkbox checkbox-success" />
                    </div>
                </div>
            </li>
            <li className="py-3 ">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Ensalada
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox"  className="checkbox checkbox-success" />
                    </div>
                </div>
            </li>

        </ul>
   </div>
</div> 

<br />

<div className=" text-white font-bold mb-1">Bebidas</div>
<hr className='bg-white' />
<br />
 <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg bg-neutral shadow sm:p-8 md:w-53 md:mx-auto md:p-6 md:border md:rounded-lg md:shadow-lg lg:w-11/12">
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 ">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Agua
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox"  className="checkbox checkbox-success" />
                    </div>
                </div>
            </li>
            <li className="py-3 ">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {/* Open the modal using ID.showModal() method */}
<button className=" text-sm font-medium text-gray-900 truncate dark:text-white" onClick={()=>window.my_modal_1.showModal()}>Fresco*</button>
<dialog id="my_modal_1" className="modal">
  <form method="dialog" className="modal-box">
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-52">
    <h1 className='text-white  md:px-40  md:text-50px  sm:items-center justify-center '>Escoge tu Bebida</h1>
    <li className='dark:text-white mt-6'><h1>Tamarindo
    <input type="checkbox"  className="checkbox checkbox-success" /></h1></li>
    <li className='dark:text-white'><h1>Té
    <input type="checkbox"  className="checkbox checkbox-success" /></h1></li>
    <li className='dark:text-white' ><h1>Limonada
    <input type="checkbox"  className="checkbox checkbox-success" /></h1></li>
    <li className='dark:text-white'><h1>Jamaica
    <input type="checkbox"  className="checkbox checkbox-success" /></h1></li>
  </ul> 
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn">Close</button>
    </div>
  </form>
</dialog>
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox" required="required" className="checkbox checkbox-success" />
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div> 

</form>

</div>

        </div>
        <button className="btn no-animation w-full   disabled font-plane bg-accent text-white mt-4">Ordenar</button>
      </div>
      
    </div>
    )
}

export default Dish
    