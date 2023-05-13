import { Link } from "react-router-dom";
import { useState } from 'react';
import Footer from "../components/Footer";

export default function Index() {

const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-white">
            <header className="relative inset-x-0 top-0 z-50">
                <nav
                    className="flex items-center justify-between p-6 lg:px-8 bg-white shadow-md shadow-gray-500"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <Link to="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">D'lish</span>
                            <img
                                className="h-20 w-auto"
                                src="../../public/favicon.png"
                                alt="Icono D'lish"
                            />
                        </Link>
                    </div>

                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"

                            aria-expanded={expanded}
                            onClick={() => setExpanded(!expanded)}
                        >
                            <span className="sr-only">
                                Abrir menu principal
                            </span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-12">
                       
                    {/* ----------------Ete search ------------------*/}

                    <form class="flex items-center">   
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5 " placeholder="Search" required></input>
                        </div>
                        <button  className="openModalBtn" type="submit"  class="p-2.5 ml-2 text-sm font-medium text-gray-900 bg-orange-700 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 ">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </form>

                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>


                        {/* <!-- Profile dropdown --> */}

                        <div class="relative ml-3">
                            <div>
                                <button
                                    type="button"
                                    className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button"
                                    // aria-haspopup="true"
                                    // aria-expanded="false"
                                    aria-expanded={expanded}
                                    onClick={() => setExpanded(!expanded)}

                                >
                                    <span className="sr-only">
                                        Abrir menu usuario
                                    </span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="\public\img\example-pfp.jpg"
                                        alt=""
                                    />
                                </button>
                            </div>

                            {expanded && (
                            <div
                                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu-button"
                                tabindex="-1"
                            >
                                {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                                <Link
                                    to="/profile"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-400 transition-width duration-200 ease-in-out"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-0"
                                >
                                    Mi perfil
                                </Link>

                                <Link
                                    to="/logs"
                                    className="block px-4 py-2 text-sm text-gray-700  hover:text-blue-400 transition-width duration-200 ease-in-out"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-1"
                                >
                                    Registro de pedidos
                                </Link>

                                <Link
                                    to="#"
                                    className="block px-4 py-2 text-sm text-gray-700  hover:text-blue-400 transition-width duration-200 ease-in-out"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-1"
                                >
                                    Opciones
                                </Link>

                                <Link
                                    to="/auth/register"
                                    className="block px-4 py-2 text-sm text-gray-700  hover:text-blue-400 transition-width duration-200 ease-in-out"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-2"
                                >
                                    Cerrar Sesion
                                </Link>

                                <hr></hr>

                                <p
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-3"
                                >
                                    Fondos actuales
                                </p>

                                <p
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-500"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-4"
                                >
                                    $20.00
                                </p>
                            </div>
                             )}
                                                         
                        </div>
                           

                        {/* <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
          <Link to="#" className="mx-5 text-sm font-semibold leading-6 text-gray-900">Register <span aria-hidden="true">&rarr;</span></Link> */}
                    </div>
                </nav>

                {/* ------Mobile menu ----------*/}
                
                {expanded && (

                <div className="lg:hidden" role="dialog" aria-modal="true">
                    {/* ----Background backdrop ------*/}

                    <div className="fixed inset-0 z-50"></div>
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">D'lish</span>
                                <img
                                    className="h-8 w-auto"
                                    src="../../public/favicon.png"
                                    alt=""
                                />
                            </Link>

                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"

                                aria-expanded={expanded}
                                onClick={() => setExpanded(!expanded)}
                            >
                                <span className="sr-only">Close menu</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        

                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                   
                                <form class="flex items-center">   
                                <label for="simple-search" class="sr-only">Search</label>
                                <div class="relative w-full">
                                 <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                                 <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5 " placeholder="Search" required></input>
                                </div>
                                <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-gray-900 bg-orange-700 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 ">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span class="sr-only">Search</span>
                                 </button>
                                 </form>


                                </div>
                                <div className="py-6">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src="\public\img\example-pfp.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-gray-700">
                                                Aerito
                                            </div>
                                            <div className="text-sm font-medium leading-none text-gray-400">
                                                aeritokawai@gmail.com
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 space-y-1 ">
                                        <Link
                                            to="#"
                                            className="block rounded-md  py-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white"
                                        >
                                            Mi perfil
                                        </Link>

                                        <Link
                                            to="/logs"
                                            className="block rounded-md py-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white"
                                        >
                                            Registro de pedidos
                                        </Link>

                                        <Link
                                            to="#"
                                            className="block rounded-md py-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white"
                                        >
                                            Opciones
                                        </Link>

                                        <Link
                                            to="#"
                                            className="block rounded-md  py-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white"
                                        >
                                            Cerrar sesion
                                        </Link>

                                        <hr></hr>

                                        <p
                                            href="#"
                                            className="block rounded-md py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
                                        >
                                            Fondos actuales
                                        </p>

                                        <p
                                            href="#"
                                            className="block rounded-md py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
                                        >
                                            $20.00
                                        </p>
                                    </div>

                                    {/* <Link to="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</Link>

                <Link to="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" >Registrate</Link> */}
                                </div>
                            </div>
                        </div>
                       
                    </div>
                     
                </div>
                )}
            </header>

            <div className="bg-[url('../img/Dlish_design.png')] bg-cover bg-center  h-auto text-white py-24 px-10 object-fill">
                <div className="md:w-1/2">
                    <p className="font-bold text-sm uppercase">¿Con hambre?</p>
                    <p className="text-3xl font-bold">D'Lish</p>
                    <p className="text-2xl mb-10 leading-none">
                        Ayudandote a saciar tu apetito
                    </p>
                    <Link
                        to="#"
                        className="bg-orange-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                    >
                        Contactanos
                    </Link>
                </div>
            </div>

            {/* --------------Cafeterias-------------------  */}

            <div className="bg-white">

                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Disfruta de...
                    </h2>
                    
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 bg-prim rounded-md p-5 ">

                        {/* De momento si se quiere agregar mas productos es de copiar el mismo codigo  */}
                        <div className="group relative">
                            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-mdshadow-xl lg:aspect-none  group-hover:opacity-75 transition-width duration-300 ease-in-out lg:h-80  bg-blue-500 ">
                                <img
                                    
                                    src="\public\img\desayuno.png"
                                    alt="Cafetin Don Bosco"
                                    class="h-full w-full object-cover object-center  lg:h-full lg:w-full"
                                />
                            </div>

                              {/* color degradado en las categorias */}
                              {/* <div class="absolute inset-0 "></div>
                            <div class="absolute inset-0 flex items-center justify-center"></div> */}


                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link to="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0 "
                                            ></span>
                                            <p className="text-white font-semibold text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg shadow-black">
                                                Desayunos
                                            </p>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                            
                        </div>

                        {/* Lo mismo se repite para cada producto */}

                        <div className="group relative">
                            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md shadow-xl bg-gray-500 lg:aspect-none group-hover:opacity-75 transition-width duration-300 ease-in-out lg:h-80">
                                <img
                                    src="\public\img\almuerzos.png"
                                    alt="Cafetin Don Bosco"
                                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>

                            

                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link to="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0 "
                                            ></span>
                                            <p className="drop-shadow-lg shadow-black text-white font-semibold text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                Almuerzos
                                            </p>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>


                        <div className="group relative ">
                            
                            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md shadow-xl  bg-prim lg:aspect-none group-hover:opacity-75 transition-width duration-300 ease-in-out lg:h-80">
                                <img
                                    src="\public\img\otros.png"
                                    alt="Cafetin Don Bosco"
                                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>

                           

                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link to="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0 "
                                            ></span>
                                            <p className="drop-shadow-lg shadow-black text-white font-semibold text-5xl   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                Otros
                                            </p>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        
                        {/* Fin de las categorias */}
                    </div>
                </div>
            </div>

            {/* Recomendacion segun horario */}
            <h1 className="text-5xl font-title font-bold tracking-tight text-gray-800 text-center py-14">
                ¿Se te antoja algo?
            </h1>

            {/* bg-[url('../img/banner_orange.jpg')] fue tambien otra opcion*/}
            <div className="bg-prim bg-cover bg-center">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 font-plane">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-left">
                        Lo mas <label className="text-white">comprado</label>
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                        <div className="group relative bg-zinc-900 rounded-lg" >
                            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-blue-500 shadow-xl lg:aspect-none group-hover:opacity-75 transition-width duration-300 ease-in-out lg:h-80">
                                <img
                                    src="\public\img\coffee.jpg"
                                    alt="Cafe"
                                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>

                            <div className="mt-4 flex justify-between m-4">
                                <div>
                                    <h3 className="text-sm text-gray-400">
                                        <Link to="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0 "
                                            ></span>
                                            <p className="text-lg font-semibold">
                                                Café
                                            </p>
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-sm font-semibold text-gray-500">
                                        Es posible agregar leche por $0.25
                                    </p>
                                </div>
                                <p className="text-lg font-bold text-white">
                                    $0.40
                                </p>
                            </div>
                        </div>



                        <div className="group relative bg-zinc-900 rounded-lg">
                            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-500 shadow-xl  lg:aspect-none group-hover:opacity-75 transition-width duration-300 ease-in-out lg:h-80">
                                <img
                                    src="\public\img\food.jpeg"
                                    alt="Cafetin Don Bosco"
                                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>

                            <div className="mt-4 flex justify-between m-4">
                                <div>
                                    <h3 className="text-sm text-gray-400">
                                        <Link to="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0 "
                                            ></span>
                                            <p className="text-lg font-semibold">
                                                Ensalada de huevo con pollo
                                            </p>
                                        </Link>
                                    </h3>
                                </div>
                                <p className="text-lg font-bold text-white">
                                    $2.50
                                </p>
                            </div>
                        </div>

                        <div className="group relative bg-zinc-900 rounded-lg">
                            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md shadow-xl  bg-orange-500 lg:aspect-none group-hover:opacity-75 transition-width duration-300 ease-in-out lg:h-80">
                                <img
                                    src="\public\img\pan-dulce.png"
                                    alt="Cafetin Don Bosco"
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>

                            <div className="mt-4 flex justify-between m-4">
                                <div>
                                    <h3 className="text-sm text-gray-400">
                                        <Link to="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0 "
                                            ></span>
                                            <p className="text-lg font-semibold">
                                                Pan Dulce
                                            </p>
                                        </Link>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">
                                        Cualquier pan de tamaño pequeño cuesta
                                        $0.30
                                    </p>
                                </div>
                                <p class="text-lg font-bold text-white">
                                    $0.50
                                </p>
                            </div>
                        </div>

                        <div className="group relative bg-zinc-900 rounded-lg">
                            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md shadow-xl  bg-lime-300 lg:aspect-none group-hover:opacity-75 transition-width duration-300 ease-in-out lg:h-80">
                                <img
                                    src="\public\img\comoejemplo.jpg"
                                    alt="Cafetin Don Bosco"
                                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>

                            <div className="mt-4 flex justify-between m-4">
                                <div>
                                    <h3 className="text-sm text-gray-400">
                                        <Link to="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0 "
                                            ></span>
                                            <p className="text-lg font-semibold">
                                                Combo 2 pupusas + café
                                            </p>
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Las pupusas pueden pedirse
                                        individualmente por $0.25
                                    </p>
                                </div>
                                <p className="text-lg font-bold text-white">
                                    $0.90
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative isolate px-6 pt-14 lg:px-8 ">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffac80] to-[#89fcc6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    ></div>
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 bg-gray-700 px-11 rounded-lg bg-[url('../img/money.png')] bg-no-repeat bg-contain">
                    <div>
                        <div className="text-center ">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                ¿Sin Fondos?
                            </h1>
                            <h2 className="text-2x1 font-bold tracking-tight text-orange-500 sm:text-4xl mt-6">
                                ¡No te quedes sin comer!
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-white">
                                Recuerda que puedes agregar mas fondos a tu
                                monedero en cualquier momento.
                            </p>

                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    to="#"
                                    className="rounded-2xl bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-400 transition-width duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Ir a mi perfil
                                </Link>
                                <Link
                                    to="#"
                                    className="text-sm font-semibold leading-6 text-white hover:underline"
                                >
                                    ¿Quieres saber mas?{" "}
                                    <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0edbff9a] to-[#04ff92] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* -----------Footer----------------- */}
            <Footer />
        </div>
    );
}


