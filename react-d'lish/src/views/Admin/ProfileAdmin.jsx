import React from 'react'

function ProfileAdmin() {
    return (

        <div className='lg:ml-[10rem] sm:ml-[5rem] ml-[2rem] h-[100%] animate-fade animate-duration-500'>

            {/* Form */}
            <div className='w-[90%]'>

            <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12 pt-12">
          <h2 className="text-xl font-semibold leading-7 text-terc">Ajustes de perfil</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Recuerda que cualquier cosa aqui colocada sera publica para cualquier usuario exceptuando datos privados.</p>

            {/* Ajustes generales  */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="cafeteriaName" className="block text-sm font-medium leading-6 text-gray-900">Nombre Cafeteria</label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-terc-2 focus-within:ring-inset focus-within:ring-terc sm:max-w-md">
                  
                  <input type="text" name="cafeteriaName" id="cafeteriaName" autoComplete="cafeteriaName" className="block flex-1 border-0  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Cafeteria Don Bosco" />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="Horario" className="block text-sm font-medium leading-6 text-gray-900">Horario</label>
              <div className="mt-2">
                <div className="flex sm:max-w-md">
                <input className="block flex-1  text-center border-0  py-1.5 pl-1 ring-1 ring-inset bg-white ring-gray-300 focus-within:ring-inset text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type="time" id="opentm" name="opentm" min="06:00" max="08:00" />
                <p className="mt-1 text-sm leading-6 text-gray-600 p-[18px]">hasta</p>
                <input className="block flex-1  text-center border-0  py-1.5 pl-1 ring-1 ring-inset ring-gray-300 focus-within:ring-inset bg-white text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type="time" id="closetm" name="closetm" min="16:00" max="18:00"/>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Acerca de la cafeteria</label>
              <div className="mt-2">
                <textarea id="about" name="about" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-terc sm:text-sm sm:leading-6"></textarea>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Esta informacion aparecera brevemente al ingresar al perfil del cafetin.</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Foto de portada</label>

              {/* CUADRO DE IMAGEN */}
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                  </svg>
                  <div className="mt-4 flex text-sm leading-6 text-gray-600 flex-col lg:flex-row">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-terc focus-within:outline-none focus-within:ring-2 focus-within:ring-terc focus-within:ring-offset-2 hover:text-terc">
                      <span>Sube tu imagen</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1 hidden sm:block">o arrastra o sueltala aqui</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF de alrededor de 10MB</p>
                </div>
              </div>


            </div>

          

          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-xl font-semibold leading-7 text-terc">Informacion especifica</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Datos que apareceran para dar soporte a los usuarios</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="ubicacion" className="block text-sm font-medium leading-6 text-gray-900">Ubicacion</label>
              <div className="mt-2">
                <input type="text" name="ubicacion" id="ubicacion" autoComplete="given-name" placeholder='Seccion de Cafeterias' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset px-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-terc sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="edificio" className="block text-sm font-medium leading-6 text-gray-900">Edificio</label>
              <div className="mt-2">
                <input type="text" name="edificio" id="edificio" placeholder='Colegio Don Bosco' autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  px-1 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-terc sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo para soporte</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-1 focus:ring-2 focus:ring-inset focus:ring-terc sm:text-sm sm:leading-6" />
              </div>
            </div>

         

         

      
          </div>
        </div>
      </div>

      <div className="mt-6 py-7 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancelar cambios</button>
        <button type="submit" className="rounded-md bg-secu px-3 py-2  text-sm font-semibold text-white shadow-sm hover:bg-[#1a47da] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar cambios</button>
      </div>
    </form>

            </div>
            
        </div>

        )
    }
    
    export default ProfileAdmin
    