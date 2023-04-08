export default function Index() {
    return (
        <>
            <div className="text-gray-600 font-plane">
                {/* content wrapper */}

                <div>
                    <nav>
                        <div>
                            <h1 className="font-bold  p-4 border-b border-gray-100 font-title ">
                                <a href="/">Test</a>
                            </h1>
                        </div>
                        <ul>
                            <li className="text-gray-700 font-bold">
                                <a href="#">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>About</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* End nav */}

                <main className="px-16 py-16">
                    <div className="flex">
                        <a href="#" className="text-secu">
                            Log in
                        </a>
                        <a href="#" className="text-secu">
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

                        <div className="mt-8">
                            {/* Tarjetas aquí */}
                            <div>
                                <img
                                    src="/img/food.jpeg"
                                    alt="Imagen comida"
                                ></img>
                                <div>
                                    <span>5 frijoles picantes</span>
                                    <span>Receta por Mati</span>
                                </div>
                            </div>
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

                        <div>
                            <div className="bg-secu">Cargar más</div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
