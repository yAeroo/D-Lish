import React, { useState } from 'react'
// Habilitando archivo para router link
import { Link } from "react-router-dom";


const Dish = () => {
return (
    <div className='margin: 0 auto justify-items-center'>    
      <div
        className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2"
      >
        <div className="xl:max-w-xl">
          <img className="h-25 rounded-lg" src="\public\img\Almuerzos.png" alt="ComidaPIC" />
          <h1
            className="mt-6 text-2xl font-bold sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
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

<form action="">

<div className=" text-white font-bold mb-1">Opciones Principales * (solo puedes escoger 1)</div>
<hr className='bg-white' />
<br />
 <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Filete de Carne
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox"   className="checkbox checkbox-success" />
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Filete de Pechuga
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input 
                    type="checkbox"  className="checkbox checkbox-success" />
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Alitas Fritas
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox" className="checkbox checkbox-success" />
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Torta 
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox" className="checkbox checkbox-success" />
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Burritos
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox"  className="checkbox checkbox-success" />
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
 <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Arroz
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox"  className="checkbox checkbox-success" />
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Casamiento
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox"  className="checkbox checkbox-success" />
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Papas Fritas
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox"  className="checkbox checkbox-success" />
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Ensalada
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
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
 <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Agua en Botella
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox"  required="required" className="checkbox checkbox-success" />
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {/* Open the modal using ID.showModal() method */}
<button className=" text-sm font-medium text-gray-900 truncate dark:text-white" onClick={()=>window.my_modal_1.showModal()}>Fresco*</button>
<dialog id="my_modal_1" className="modal">
  <form method="dialog" className="modal-box">
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-52">
    <li className='dark:text-white'><a>Tamarindo
    <input type="checkbox"  className="checkbox checkbox-success" /></a></li>
    <li className='dark:text-white'><a>Té
    <input type="checkbox"  className="checkbox checkbox-success" /></a></li>
    <li className='dark:text-white' ><a>Limonada
    <input type="checkbox"  className="checkbox checkbox-success" /></a></li>
    <li className='dark:text-white'><a>Jamaica
    <input type="checkbox"  className="checkbox checkbox-success" /></a></li>
  </ul> 
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn">Close</button>
    </div>
  </form>
</dialog>
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
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
        <button className="btn no-animation w-full  font-plane bg-accent text-white mt-4">Ordenar</button>
      </div>
      
    </div>
    )
}

export default Dish
    