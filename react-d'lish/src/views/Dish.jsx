// Multimedia
import OrderComponent from '../components/OrderComponent';
import Burrito from "../../src/assets/index/burrito.jpg";
import JugosNaturales from "../../src/assets/index/jugosNaturales.jpg";
import Almuerzo from "../../src/assets/homepage/Almuerzos.png"

// IMPORTACIÓN DE CONTENIDO VARIABLE
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useCafeterias from "../hooks/useCafeterias";
import useOrders from '../hooks/useOrders';
import { useAuth } from '../hooks/useAuth';

const Dish = () => {
  // Extraer parametro
  const { user } = useAuth({ middleware: 'auth' })
  const { cafeteriaId, dishId } = useParams();
  const { cafeterias, contenidoCafeteria, limpiarCafeteria, obtenerContenidoCafeteria } = useCafeterias();
  const { orden, setOrden } = useOrders();

  useEffect(() => {
    limpiarCafeteria();
    obtenerContenidoCafeteria(cafeteriaId);
    setOrden({
      userId: user?.id,
      userName: user?.name,
      cafeteriaId: +cafeteriaId,
      main_dish: +dishId,
      side_dish1: null,
      side_dish2: null,
      accompaniement: null,
      drink: null,
    })
  }, [user]);

  const { platillos } = contenidoCafeteria;
  const cafeteria = cafeterias?.find(cafeteria => cafeteria.id == contenidoCafeteria.id);

  const platillo = platillos?.find(platillo => platillo.id == dishId);
  const { acompanantes, complementos1, complementos2, bebidas } = contenidoCafeteria;
  const { ordenComplete } = useOrders();


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
              Cafetín {cafeteria?.nombre}
              <br className="hidden lg:inline" />
              <span className="text-primary"> Almuerzo</span>
            </h1>
            <p className="mt-2 sm:mt-4 sm:text-xl text-white-900">
              Define los complementos de tú almuerzo
            </p>
            <p className="mt-2 text-sm italic font-bold text-gray">
              Debes seleccionar al menos 1 opción por cada uno</p>
            <div className="flex flex-col w-full border-opacity-50">
              <br />
              <form className=''>

                <div className=" text-white font-bold mb-1">Platillo Principal</div>
                <hr className='bg-white  ' />
                <br />
                <div className="w-full max-w-md  md:w-53 md:mx-auto lg:w-11/12 ">
                  <div className="flow-root">
                    <OrderComponent
                      name={platillo?.name}
                      id={dishId}
                      chekeable={true}
                      lectura={true}
                      photo={Burrito}
                      cafetin="Miguel Magone" />
                  </div>
                </div>

                <br />
                <div className=" text-white font-bold mb-1">Complemento 1</div>
                <hr className='bg-white' />
                <br />
                <div className="w-full max-w-md  md:w-53 md:mx-auto lg:w-11/12 ">
                  <div className="flow-root">
                    {complementos1 ? complementos1.map((complemento, id) => (
                      <OrderComponent key={complemento.id}
                        id={complemento.id}
                        type="side_dish1"
                        name={complemento.name}
                        photo={Burrito}
                        cafetin="Miguel Magone" />
                    )) : ''}
                  </div>
                </div>
                <br />

                <div className=" text-white font-bold mb-1">Complemento 2</div>
                <hr className='bg-white' />
                <br />
                <div className="w-full max-w-md  md:w-53 md:mx-auto lg:w-11/12 ">
                  <div className="flow-root">
                    {complementos2 ? complementos2.map((complemento, id) => (
                      <OrderComponent key={complemento.id}
                        id={complemento.id}
                        type="side_dish2"
                        name={complemento.name}
                        photo={Burrito}
                        cafetin="Miguel Magone" />
                    )) : ''}
                  </div>
                </div>
                <br />

                <div className=" text-white font-bold mb-1">Acompañantes</div>
                <hr className='bg-white' />
                <br />
                <div className="w-full max-w-md  md:w-53 md:mx-auto lg:w-11/12 ">
                  <div className="flow-root">
                    <OrderComponent
                      name="Tortillas"
                      type="accompaniement"
                      id={2}
                      photo={JugosNaturales}
                      cafetin="Miguel Magone" />
                  </div>
                </div>
                <br />

                <div className=" text-white font-bold mb-1">AcompañantesBebidas | +$0.25</div>
                <hr className='bg-white' />
                <br />
                <div className="w-full max-w-md  md:w-53 md:mx-auto lg:w-11/12 ">
                  <div className="flow-root">
                    {bebidas ? bebidas.map((bebida, id) => (
                      <OrderComponent key={bebida.id}
                        name={bebida.name}
                        type="drink"
                        id={bebida.id}
                        photo={Burrito}
                        cafetin="Miguel Magone" />
                    )) : ''}
                  </div>
                </div>

              </form>
            </div>

          </div>
          <button className="btn no-animation w-full font-plane bg-accent text-white mt-4 border-2 border-white" disabled={!ordenComplete}>Ordenar</button>
        </div>

      </div>
    </>
  )
}

export default Dish