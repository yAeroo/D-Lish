import { Link } from "react-router-dom";
import { useState } from 'react';
import Footer from "../components/Footer";
import Modal from "./Modal/Modal";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Importacion de estilos de swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// importacion de modulos requeridos
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Oldindex() {

    const [expanded, setExpanded, modalOpen, setModalOpen] = useState(false);

    return (
        <div className="bg-base-100">
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
                            <button onClick={() => { setModalOpen(true); }} className="openModalBtn" type="submit" class="p-2.5 ml-2 text-sm font-medium text-gray-900 bg-orange-700 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 ">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span class="sr-only">Search</span>
                                {modalOpen && <Modal setOpenModal={setModalOpen} />}
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

            {/* Carousel */}

            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    // autoplay={{
                    //   delay: 4000,
                    //   disableOnInteraction: false,
                    // }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full h-450 text-primary"
                >
                    <SwiperSlide className="text-center text-xl bg-white flex justify-center items-center"><img src="..\img\Dlish_design.png" className="block w-full h-full object-cover"></img></SwiperSlide>
                    <SwiperSlide className="text-center text-xl bg-white flex justify-center items-center">
                        <div className="hero min-h-screen bg-[url('../img/Dlish_design.png')]"  >
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="text-center text-xl  flex justify-center items-center">

                        <div className="flex w-full">
                            <div className="text-center flex flex-1 items-center w-full max-h-full justify-center bg-base-100">
                                <div className=" max-w-full h-auto text-50 sm:text-xl">
                                    <h1 className="mb-5 text-5xl font-bold">Cafetin Maria Auxiliadora</h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className="btn btn-primary"><p className="font-extrabold">COMPRAR</p></button>
                                </div>
                            </div>
                            <img
                                src="\public\img\food.jpeg"
                                alt="Cafetin Don Bosco"
                                class="max-w-full h-auto w-50 object-cover object-center"
                            />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="text-center text-xl bg-white flex justify-center items-center">Slide 4</SwiperSlide>

                </Swiper>
            </>


            {/* --------------Espacio para diferentes tipos de comidas-------------------  */}


            {/* hero */}
            <div className=" grid pt-10 pb-10 place-items-center bg-cover bg-center min-h-screen bg-base-100">

                {/* hero-content */}
                <div className="  z-0 flex  items-center justify-center max-w-7xl p-4 flex-col lg:flex-row-reverse gap-10 bg-prim">

                    <div className="flex gap-2">
                        <div className="flex-row gap-2">
                            <div className=" w-380 h-280 text-center text-xl bg-white rounded-lg flex justify-center items-center max-w-sm bg-[url('../img/desayuno.png')] bg-cover bg-center ">
                                <h1 className=" text-5xl font-extrabold text-white drop-shadow-4xll"> Desayunos </h1>
                            </div>
                            <div className="w-380 h-280 text-center text-xl bg-white rounded-lg flex justify-center items-center max-w-sm mt-2 bg-[url('../img/Almuerzos.png')] bg-cover bg-center ">
                                <h1 className="text-5xl font-extrabold text-white drop-shadow-4xll"> Almuerzos </h1>
                            </div>
                        </div>
                        <div className="h-auto w-380 text-center text-xl bg-white rounded-lg flex justify-center items-center bg-[url('../img/otros.png')] bg-cover bg-center ">
                            <h1 className="text-5xl font-extrabold text-white drop-shadow-4xll"> Otros </h1>
                        </div>

                    </div>

                    <div>
                        <img src="..\src\assets\logo\icon_bw.png" className="max-w-sm rounded-lg " />
                    </div>
                </div>
            </div>


            {/* bg-[url('../img/banner_orange.jpg')] fue tambien otra opcion*/}

            <div className="bg-primary bg-opacity-90 bg-cover bg-center">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 font-plane">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-left">
                        Lo mas <label className="text-white">vendido</label>
                    </h2>

                    {/*sm: grid-cols-1  */}
                    <div className="mt-6 grid gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

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


            {/* -----------Footer----------------- */}
            <Footer />
        </div>
    );
}


