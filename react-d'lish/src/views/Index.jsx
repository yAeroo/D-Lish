import { Link } from "react-router-dom";

export default function Index() {
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
                        <Link
                            to="#"
                            className="text-sm font-semibold leading-6 text-gray-900 hover:text-lime-400"
                        >
                            Inicio
                        </Link>

                        <Link
                            to="#"
                            className="text-sm font-semibold leading-6 text-gray-900 hover:text-lime-400"
                        >
                            Cafeterias
                        </Link>

                        <Link
                            to="#"
                            className="text-sm font-semibold leading-6 text-gray-900 hover:text-lime-400"
                        >
                            Direccion 3
                        </Link>

                        <Link
                            to="#"
                            className="text-sm font-semibold leading-6 text-gray-900 hover:text-lime-400"
                        >
                            Direccion 4
                        </Link>
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {/* <!-- Profile dropdown --> */}
                        <div class="relative ml-3">
                            <div>
                                <button
                                    type="button"
                                    className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    aria-haspopup="true"
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
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-0"
                                >
                                    Mi perfil
                                </Link>

                                <Link
                                    to="#"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-1"
                                >
                                    Opciones
                                </Link>

                                <Link
                                    to="#"
                                    className="block px-4 py-2 text-sm text-gray-700"
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
                        </div>

                        {/* <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
          <Link to="#" className="mx-5 text-sm font-semibold leading-6 text-gray-900">Register <span aria-hidden="true">&rarr;</span></Link> */}
                    </div>
                </nav>

                {/* ------Mobile menu ----------*/}

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
                                    <Link
                                        to="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Inicio
                                    </Link>

                                    <Link
                                        to="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Direccion 2
                                    </Link>

                                    <Link
                                        to="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Direccion 3
                                    </Link>

                                    <Link
                                        to="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Direccion 4
                                    </Link>
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
                                            Your Profile
                                        </Link>

                                        <Link
                                            to="#"
                                            className="block rounded-md py-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white"
                                        >
                                            Settings
                                        </Link>

                                        <Link
                                            to="#"
                                            className="block rounded-md  py-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white"
                                        >
                                            Sign out
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
                        Algunos de los cafetines disponibles son...
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {/* De momento si se quiere agregar mas productos es de copiar el mismo codigo  */}
                        <div className="group relative">
                            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-blue-500 shadow-xl lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src="\public\img\dbosco.png"
                                    alt="Cafetin Don Bosco"
                                    class="h-full w-full object-cover object-center  lg:h-full lg:w-full"
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
                                            <p className="text-lg font-semibold">
                                                Cafetin Don Bosco
                                            </p>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Lo mismo se repite para cada producto */}

                        <div className="group relative">
                            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md shadow-xl bg-gray-500 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src="\public\img\dbosco.png"
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
                                            <p className="text-lg font-semibold">
                                                Cafetin Don Bosco
                                            </p>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md shadow-xl bg-prim lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src="\public\img\dbosco.png"
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
                                            <p className="text-lg font-semibold">
                                                Cafetin Don Bosco
                                            </p>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md shadow-xl bg-lime-300 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src="\public\img\dbosco.png"
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
                                            <p className="text-lg font-semibold">
                                                Cafetin Don Bosco
                                            </p>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
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
                        Para tu <label className="text-white">mañana</label>
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="group relative ">
                            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-blue-500 shadow-xl lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src="\public\img\coffee.jpg"
                                    alt="Cafe"
                                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>

                            <div className="mt-4 flex justify-between ">
                                <div>
                                    <h3 className="text-sm text-gray-700">
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
                                    <p class="mt-1 text-sm font-semibold text-gray-700">
                                        Es posible agregar leche por $0.25
                                    </p>
                                </div>
                                <p class="text-lg font-bold text-white">
                                    $0.40
                                </p>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-500 shadow-xl  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src="\public\img\food.jpeg"
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
                                            <p className="text-lg font-semibold">
                                                Ensalada de huevo con pollo
                                            </p>
                                        </Link>
                                    </h3>
                                </div>
                                <p class="text-lg font-bold text-white">
                                    $2.50
                                </p>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md shadow-xl  bg-orange-500 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src="\public\img\pan-dulce.png"
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
                                            <p className="text-lg font-semibold">
                                                Pan Dulce
                                            </p>
                                        </Link>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-700">
                                        Cualquier pan de tamaño pequeño cuesta
                                        $0.30
                                    </p>
                                </div>
                                <p class="text-lg font-bold text-white">
                                    $0.50
                                </p>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md shadow-xl  bg-lime-300 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src="\public\img\comoejemplo.jpg"
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
                                            <p className="text-lg font-semibold">
                                                Combo 2 pupusas + café
                                            </p>
                                        </Link>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-700">
                                        Las pupusas pueden pedirse
                                        individualmente por $0.25
                                    </p>
                                </div>
                                <p class="text-lg font-bold text-white">
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
                                    className="rounded-2xl bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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

            <footer class="relative bg-white mt-20 dark:bg-blue-900 ">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <Link to="#" class="flex items-center">
                                <img
                                    src="\public\favicon_green.ico"
                                    class="h-11 mr-3"
                                    alt="D'lish Logo"
                                />
                                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                    D'lish
                                </span>
                            </Link>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Recursos
                                </h2>
                                <ul class="text-gray-600 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <Link
                                            to="https://es.reactjs.org"
                                            class="hover:underline"
                                        >
                                            React
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="https://tailwindcss.com/"
                                            class="hover:underline"
                                        >
                                            Tailwind CSS
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Siguenos
                                </h2>
                                <ul class="text-gray-600 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <Link
                                            to="https://github.com/yAerosmith/D-Lish"
                                            class="hover:underline "
                                        >
                                            Github
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Legal
                                </h2>
                                <ul class="text-gray-600 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <Link to="#" class="hover:underline">
                                            Politica de privacidad
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" class="hover:underline">
                                            Terminos y condiciones
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2023{" "}
                            <Link to="#" class="hover:underline">
                                Dlish™
                            </Link>
                            . Derechos reservados.
                        </span>
                        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <Link
                                to="#"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                                <svg
                                    class="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <span class="sr-only">Facebook</span>
                            </Link>
                            <Link
                                to="#"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                                <svg
                                    class="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <span class="sr-only">Instagram </span>
                            </Link>
                            <Link
                                to="#"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                                <svg
                                    class="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                                <span class="sr-only">Twitter </span>
                            </Link>
                            <Link
                                to="https://github.com/yAerosmith"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                                <svg
                                    class="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <span class="sr-only">GitHub </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
