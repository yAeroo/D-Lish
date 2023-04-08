// Importando un componente
import Card from "../components/Card";

export default function Index() {
    return (
        <>
            <div className="text-gray-600 font-plane grid md:grid-cols-4">
                {/* content wrapper */}

                <aside className="md:col-span-1 md:flex md:justify-end">
                    <nav className="text-right">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold  p-4 border-b border-gray-100 font-title ">
                                <a
                                    href="/"
                                    className="text-sm md:text-xl hover:text-gray-700"
                                >
                                    Test
                                </a>
                            </h1>
                            <div
                                className="px-4 cursor-pointer md:hidden"
                                id="burger"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </div>
                        </div>
                        <ul className="text-sm mt-6 hidden md:block" id="menu">
                            <li className="text-gray-700 font-bold py-1">
                                <a
                                    href="#"
                                    className="px-4 flex justify-end border-r-4 border-prim"
                                >
                                    <span>Home</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 ml-2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li className="py-1">
                                <a href="#" className="px-4 flex justify-end">
                                    <span>Perfil</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 ml-2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
                {/* End nav */}

                <main className="px-16 py-16 bg-gray-100 md:col-span-3">
                    <div className="flex justify-center  md:justify-end">
                        <a
                            href="#"
                            className="text-secu btn border-secu md:border-2 hover:bg-secu hover:text-white transition ease-out duration-500 "
                        >
                            Log in
                        </a>
                        <a
                            href="#"
                            className="text-secu ml-2 btn border-secu md:border-2 hover:bg-secu hover:text-white transition ease-out duration-500 "
                        >
                            Sign up
                        </a>
                    </div>

                    <header>
                        <h2 className="text-gray-700 text-6xl font-semibold font-title">
                            Dlish
                        </h2>
                        <h3 className="text-2xl font-semibold">For momazos</h3>
                    </header>

                    <div>
                        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
                            Últimas recetas
                        </h4>

                        {/* Tarjetas aquí */}
                        <div className="mt-8 grid md:grid-cols-3 gap-5">
                            {/* Colocando componentes */}
                            <Card />
                            <Card />
                            <Card />
                        </div>

                        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
                            Lo más popular
                        </h4>

                        <div className="mt-8">
                            {/* Tarjetas aquí */}
                            <div>
                                <img src="" alt=""></img>
                                <div>
                                    <span>5 frijoles picantes</span>
                                    <span>Receta por Mati</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-5">
                            <div className="bg-secu text-white btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 ease-out duration-300">
                                Cargar más
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
