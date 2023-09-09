import React, { useState, useEffect } from "react";
//NavMobileIndex
import NavMobileIndex from "../components/Nav/NavMobileIndex";
// Icons
import { MdFoodBank } from "react-icons/md"
// import { FaBowlFood } from "react-icons/fa";
//Componentes
import FoodCardSearch from "../components/FoodCardSearch";
import { useAuth } from "../hooks/useAuth";
import RegresarTo from "../components/Profile/RegresarTo";
import clienteAxios from "../config/axios";
import Categorias from "../components/Categorias";
import CafeteriaCardSearch from "../components/CafeteriaCardSearch";
import { Link } from "react-router-dom";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [showFloatingContainer, setShowFloatingContainer] = useState(false);
  const [resultPlatillos, setresultPlatillos] = useState([]);
  const [resultCafeterias, setresultCafeterias] = useState([]);
  const { user } = useAuth({ middleware: 'auth' });

  // Busqueda
  useEffect(() => {
    handleSearchInput();
    console.log(resultPlatillos);
  }, [searchText])

  const handleSearchInput = async () => {
    console.log(searchText);

    if (searchText.length != 0) {
      setShowFloatingContainer(true);

      // Petición axios
      try {
        const { data } = await clienteAxios.post(`/api/search`, { termino: searchText });

        // Extracción de datos
        const { cafeterias, platillos } = data;

        // Asignación de valores a los estados
        setresultCafeterias(cafeterias);
        setresultPlatillos(platillos);

      } catch (error) {
        console.error('Error', error);
      }
    }
  };

  // Detectar cuando el usuario deja de escribir
  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      // Ocultar el contenedor flotante cuando el usuario deja de escribir
      setShowFloatingContainer(false);
    }, 7500); // Ajusta este valor a la cantidad de tiempo deseada antes de considerar que el usuario ha dejado de escribir

    // Limpia el temporizador anterior cada vez que el usuario escribe nuevamente
    return () => clearTimeout(typingTimeout);
  }, [searchText]);

  return (

    <>
      <NavMobileIndex />

      <section className="flex justify-end animate-fade-left animate-once">
        <h1 className="text-4xl font-bold py-2 pr-[10rem] pl-6 mt-7 text-rigth">
          ¡Hola {user?.name}!
        </h1>

        <RegresarTo url="/" />

      </section>

      <div className="w-full items-center relative z-10 animate-fade-left animate-once animate-delay-[400ms]">
        <section className="py-3 md:px-24 px-2 xxsm:px-3 drop-shadow-2xl">
          <nav className="flex justify-center items-center rounded-2xl bg-transparent drop-shadow-md py-2 list-none">
            <div className="form-control relative">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="¿Qué estas buscando el dia de hoy?"
                  className="input bg-zinc-900 min-w-[18rem] md:min-w-[32rem] xl:w-[40rem]  xl:text-md md:text-[0.9rem] text-sm focus:outline-none"
                  autoComplete="off"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="btn bg-[#4cbb6a] hover:bg-[#4cbb69d5]"
                  onClick={handleSearchInput}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
              {showFloatingContainer && (
                /* Contenido del contenedor flotante */
                <div className="absolute py-10 z-50 input bg-zinc-900 xl:w-[40rem] lg:w-[28rem] md:min-w-[32rem] w-[21rem] xl:text-md md:text-[0.9rem] h-auto focus:outline-none mt-[3.5rem] 
                px-[1rem]shadow-lg">
                  <div className="h-auto">

                    <div className=" text-2xl font-title text-white font-bold p-2 ">
                      <h1 className="inline">Cafeterias </h1>
                      <MdFoodBank className="inline text-3xl mb-2 text-primary" />
                    </div>

                    {resultCafeterias.length === 0 ? (
                      <h1 className="text-md text-center">No se encontraron resultados.</h1>
                    ) : (
                      <>
                        {resultCafeterias.map((result, index) => (
                          <Link key={index} to={`/cafeteria/${result.id}`}>
                            <CafeteriaCardSearch
                              name={result.name}
                              photo={result.img_wall}
                            />
                          </Link>
                        ))}
                      </>
                    )}

                    <hr className="my-8"></hr>

                    <div className=" text-2xl font-title text-white font-bold p-2 ">
                      <h1 className="inline">Platillos </h1>
                      {/* <FaBowlFood className="inline text-3xl mb-2 text-primary" /> */}
                    </div>

                    {resultPlatillos.length === 0 ? (
                      <h1 className="text-md text-center">No se encontraron resultados.</h1>
                    ) : (
                      <>
                        {resultPlatillos.map((result, index) => (
                          <FoodCardSearch
                            key={index}
                            id={result.id}
                            caferia={result.cafeteria_id}
                            name={result.name}
                            photo={result.img}
                          />
                        ))}
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </section>
      </div >

      <div className="grid grid-cols-2 relative gap-4 p-4 px-12">

        <Categorias />

      </div>
    </>
  );
}
