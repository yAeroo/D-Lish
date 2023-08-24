import { useEffect } from 'react'
// Habilitando archivo para router link
import { Link } from "react-router-dom";
import NavCafetin from '../components/Nav/NavCafetin';
import FoodCardDish from '../components/FoodCardDish';
import Burrito from "../../src/assets/index/burrito.jpg";
import JugosNaturales from "../../src/assets/index/jugosNaturales.jpg";
import Pupusas from "../../src/assets/index/pupusas.jpg";
import Almuerzo from "../../src/assets/homepage/Almuerzos.png"

// IMPORTACIÓN DE CONTENIDO VARIABLE
import useCafeterias from "../hooks/useCafeterias";
import { useParams } from 'react-router-dom';

const Dish = () => {
  // Extraer parametro
  const { dishId } = useParams();
  const { cafeterias, contenidoCafeteria } = useCafeterias();

  // ESPERA === Componente de carga
  if (contenidoCafeteria.length == [] || cafeterias.length == []) {
    return <p className=" text-9xl">Cargando</p>
  }

  const { platillos } = contenidoCafeteria;
  console.log(cafeterias);
  const cafeteria = cafeterias.find(cafeteria => cafeteria.id == contenidoCafeteria.id);

  const platillo = platillos.find(platillo => platillo.id == dishId);
  const { acompañantes, complementos1, complementos2, bebidas } = contenidoCafeteria;

  console.log(complementos1);

  return (
    <>
      <div className='flex items-center justify-center w-full min-h-screen animate-fade-up animate-once animate-delay-[1300ms]'>
        <div
          className="px-8 py-12 max-w-md mx-auto sm:max-w-xl"
        >
          <div className="xl:max-w-xl">
            <img className="h-25 rounded-lg" src={Almuerzo} alt="ComidaPIC" />
            <h1
              className="mt-6 text-2xl font-bold sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl lg:"
            >
              Cafetín {cafeteria.nombre}
              <br className="hidden lg:inline" />
              <span className="text-primary"> Almuerzo</span>
            </h1>
            <p className="mt-2 sm:mt-4 sm:text-xl text-white-900">
              Agrega lo que desees para el almuerzo:
            </p>
            <p className="mt-2 sm:mt-4 sm:text-xl text-gray">
              Los campos con * son obligatorios
            </p>
            <div className="flex flex-col w-full border-opacity-50">
              <br />
              <form className=''>

                <div className=" text-white font-bold mb-1">Platillo Principal</div>
                <hr className='bg-white  ' />
                <br />
                <div className="w-full max-w-md  md:w-53 md:mx-auto lg:w-11/12 ">
                  <div className="flow-root">
                    <FoodCardDish name={platillo.name} photo={Burrito} cafetin="Miguel Magone" />
                  </div>
                </div>

                <br />
                <div className=" text-white font-bold mb-1">Complemento 1</div>
                <hr className='bg-white' />
                <br />
                <div className="w-full max-w-md  md:w-53 md:mx-auto lg:w-11/12 ">
                  <div className="flow-root">
                    <FoodCardDish name={complementos1[0].name} photo={Burrito} cafetin="Miguel Magone" />
                  </div>
                </div>
                <br />

                <div className=" text-white font-bold mb-1">Complemento 2</div>
                <hr className='bg-white' />
                <br />
                <div className="w-full max-w-md  md:w-53 md:mx-auto lg:w-11/12 ">
                  <div className="flow-root">
                    <FoodCardDish name={complementos2[0].name} photo={Burrito} cafetin="Miguel Magone" />
                  </div>
                </div>
                <br />

                <div className=" text-white font-bold mb-1">Acompañantes</div>
                <hr className='bg-white' />
                <br />
                <div className="w-full max-w-md  md:w-53 md:mx-auto lg:w-11/12 ">
                  <div className="flow-root">
                    <FoodCardDish name={bebidas[0].name} photo={JugosNaturales} cafetin="Miguel Magone" />
                  </div>
                </div>


                <div className=" text-white font-bold mb-1">Bebidas | +$0.25</div>
                <hr className='bg-white' />
                <br />
                <div className="w-full max-w-md  md:w-53 md:mx-auto lg:w-11/12 ">
                  <div className="flow-root">
                    <FoodCardDish name="Tortillas" photo={JugosNaturales} cafetin="Miguel Magone" />
                  </div>
                </div>

              </form>
            </div>

          </div>
          <Link to="/order">
            <button className="btn no-animation w-full   disabled font-plane bg-accent text-white mt-4">Ordenar</button>
          </Link>
        </div>

      </div>
    </>
  )
}

export default Dish