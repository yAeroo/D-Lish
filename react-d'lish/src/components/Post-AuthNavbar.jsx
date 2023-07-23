import { useState } from 'react';
import { Link } from "react-router-dom";

export default function PostAuthNavbar() {

    const [expanded, setExpanded] = useState(false);
  
    return (
    <>
        <header className="relative inset-x-0 top-0 z-50">
                <nav
                    className="flex items-center justify-between p-6 lg:px-8 bg-white shadow-md shadow-gray-500"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
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

                    <form className="flex items-center">   
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5 " placeholder="Search" required></input>
                        </div>
                        <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-gray-900 bg-orange-700 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 ">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>

                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 m-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>


                        {/* <!-- Profile dropdown --> */}

                        <div className="relative ml-3">
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
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                                      {/* ----------------Ete search Mobile------------------*/}
                    
                                <form className="flex items-center">   
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5 " placeholder="Search" required></input>
                                    </div>
                                    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-gray-900 bg-orange-700 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 ">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <span className="sr-only">Search</span>
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
                                                aerito@gmail.com
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 space-y-1 ">
                                        <Link
                                            to="/profile"
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
                                            to=""
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
    </>
  )
}
