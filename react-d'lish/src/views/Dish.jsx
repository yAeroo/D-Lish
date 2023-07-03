import React from 'react'
// Habilitando archivo para router link
import { Link } from "react-router-dom";


const Dish = () => {
return (
    <div className='margin: 0 auto'>    
      <div
        className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2"
      >
        <div className="xl:max-w-xl">
          <img className="h-25" src="\public\img\desayuno.png" alt="ComidaPIC" />
          <h1
            className="mt-6 text-2xl font-bold sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
          >
            Cafetín "El Chele" 
            <br className="hidden lg:inline" />
            <span className="text-primary"> Desayuno</span>
          </h1>
          <p className="mt-2 sm:mt-4 sm:text-xl text-white-900">
            Agrega Lo que Desees para el desayuno:
          </p>

<div className="flex flex-col w-full border-opacity-50">

  <div className="mt-4 grid h-20 bg-[#f5f3ff] rounded-box place-items-center  text-black font-bold">Opciones Principales</div>
          <div className="sm:mt-6">
          <div className="dropdown dropdown-bottom">
  <label tabIndex={0} className="btn m-1 hover:bg-primary">Ver Opciones</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-52">
    <li><a>Tocino
    <input type="checkbox" className="toggle toggle-success"/></a></li>
    <li><a>Huevos Picado
    <input type="checkbox" className="toggle toggle-success"/></a></li>
    <li><a>Platanos Fritos
    <input type="checkbox" className="toggle toggle-success"/></a></li>
    <li><a>Frijoles Borrachos
    <input type="checkbox" className="toggle toggle-success"/></a></li>
  </ul>
</div>
</div>

<div className="py-6 mt-4 grid h-20 bg-[#f5f3ff] rounded-box place-items-center text-black font-bold">Complementos</div>
          <div className="sm:mt-6">
          <div className="dropdown dropdown-bottom">
  <label tabIndex={0} className="btn m-1">Ver Opciones</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-52">
    <li><a>Queso Fresco
    <input type="checkbox" className="toggle toggle-success"/></a></li>
    <li><a>Queso Duro
    <input type="checkbox" className="toggle toggle-success"/></a></li>
    <li><a>Crema
    <input type="checkbox" className="toggle toggle-success"/></a></li>
  </ul>
</div>
</div>

<div className="mt-4 grid h-20 bg-[#f5f3ff] rounded-box place-items-center text-black font-bold">Bebidas</div>
          <div className="sm:mt-6">
          <div className="dropdown dropdown-bottom">
  <label tabIndex={0} className="btn m-1">Ver Opciones</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-52">
    <li><a>Café
    <input type="checkbox" className="toggle toggle-success"/></a></li>
    <li><a>Fresco
    <input type="checkbox" className="toggle toggle-success"/></a></li>
  </ul>
</div>
</div>

{/* <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Huevos Rancheros
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox" className="toggle toggle-success"/>
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Platanos Fritos
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox" className="toggle toggle-success"/>
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Frijoles Licuados
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox" className="toggle toggle-success"/>
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Frijoles Borrachos
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox" className="toggle toggle-success"/>
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Huevos Picados
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <input type="checkbox" className="toggle toggle-success"/>
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div> */}

</div>

        </div>
        <button className="btn btn-wide bg-orange-600 text-white mt-4">Pedir</button>
      </div>
      
    </div>
    )
}

export default Dish
    