import React from 'react'
import TarjetasAdminIndex from '../components/TarjetasAdminIndex'
import ExamplePfp from "../..//src/assets/img/example-pfp.jpg";
import { Link } from 'react-router-dom';

function IndexAdmin() {
  return (
    <>
    <div className='lg:ml-[10rem] h-[100%] animate-fade animate-duration-500'>

      <div className="flex-grow ">

{/* Mensaje de Bienvenida  */}
    <main className="p-6 sm:p-10 space-y-6">
      <div classNameName="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between ">
        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2 text-primary">Cafetín Maria Auxiliadora</h1>
          <h2 className="text-black ml-0.5">Mira las estadisticas de tu local</h2>
        </div>

        {/* Boton de Edit Local */}
        <div className="flex flex-wrap items-start justify-end -mb-3 mt-6">
          <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <Link to="/indexAdmin/profileadmin">Editar Local</Link>
          </button>
        </div>
      </div>

<TarjetasAdminIndex></TarjetasAdminIndex>

{/* Espacio para Tarjeta de comida o Grafica  + demas Tarejtas*/}
      <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
        <div className="flex flex-col md:col-span-2 md:row-span-2 bg-neutral shadow rounded-lg">
          <div className="px-6 py-5 font-semibold border-b border-gray-100 text-white">Platillo más vendido o grafica</div>
          <div className="p-4 flex-grow">
            <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
              <img className="h-25 rounded-lg" src="" alt="ComidaPIC" /></div>
          </div>
        </div>


        {/* Trajetas de Abajo */}
        <div className="flex items-center p-8 bg-neutral shadow rounded-lg">


          {/* Trajetas de Abajo 1 */}
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <div>
            <span className="block text-2xl text-yellow-50 font-bold">5</span>
            <span className="block text-white">Ventas Restantes</span>
          </div>
        </div>

         {/* Trajetas de Abajo 2 */}
        <div className="flex items-center p-8 bg-neutral shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <span className="block text-2xl  text-yellow-50 font-bold">11:50 am</span>
            <span className="block text-white">Hora de Pedididos concurrentes</span>
          </div>
        </div>


                {/* Trajetas de Usuarios */}
        <div className="row-span-3 bg-neutral text-yellow-50 shadow rounded-lg">
          <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
            <span>Usuarios Frencuentes</span>
          </div>
          {/* Tablero de usuarios */}
          <div className="overflow-y-auto max-height: 24rem" >
            <ul className="p-6 space-y-6">
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src={ExamplePfp} alt="Annette Watson profile picture"/>
                </div>
                <span className="text-yellow-50">Javier Mejia</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src={ExamplePfp} alt="Calvin Steward profile picture"/>
                </div>
                <span className="text-yellow-50">Eleazar Amaya</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src={ExamplePfp} alt="Ralph Richards profile picture"/>
                </div>
                <span className="text-yellow-50">Victor Cornejo</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src={ExamplePfp} alt="Bernard Murphy profile picture"/>
                </div>
                <span className="text-yellow-50">Mateo Elia</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src={ExamplePfp} alt="Arlene Robertson profile picture"/>
                </div>
                <span className="text-yellow-50">Oscar Arce</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src={ExamplePfp} alt="Jane Lane profile picture"/>
                </div>
                <span className="text-yellow-50">Luis Marquez</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src={ExamplePfp} alt="Pat Mckinney profile picture"/>
                </div>
                <span className="text-yellow-50">Martin Carbajal</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src={ExamplePfp} alt="Norman Walters profile picture"/>
                </div>
                <span className="text-yellow-50">Alvin 2</span>
              </li>
            </ul>
          </div>
        </div>


                {/* Trajetas de Larteral */}
        <div className="flex flex-col row-span-3 bg-neutral shadow rounded-lg">
          <div className="px-6 py-5 font-semibold border-b text-yellow-50 border-gray-100">Grafico</div>
          <div className="p-4 flex-grow">
            <div className="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Grafico</div>
          </div>
        </div>
      </section>

    </main>
  </div>


      

    </div>
    </>
  )
}

export default IndexAdmin
