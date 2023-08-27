// Multimedia
import "../css/dishSelection.css"
import "../css/buttons.css"
import Burrito from "../../src/assets/index/burrito.jpg";
import Almuerzo from "../../src/assets/homepage/Almuerzos.png"

import OrderComponent from '../components/OrderComponent';

// IMPORTACIÓN DE CONTENIDO VARIABLE
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import useCafeterias from "../hooks/useCafeterias";
import useOrders from '../hooks/useOrders';
import Notify from '../helper/Notify';

export default function Dish() {
  // Extraer parametro
  const [errores, setErrores] = useState([]);
  const { user } = useAuth({ middleware: 'auth' })
  const { cafeteriaId, dishId } = useParams();
  const { cafeterias, contenidoCafeteria, limpiarCafeteria, obtenerContenidoCafeteria } = useCafeterias();
  const { setOrden, handleRemoverOrden } = useOrders();

  // Toastify
  const toastErrorId = "error-noti";
  const NotiError = Notify(
    "error",
    toastErrorId,
    '¡Oops! Ah ocurrido un error...',
    "!bg-[#191E2B] !font-body !py-2"
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    limpiarCafeteria();
    handleRemoverOrden()

  }, [])

  useEffect(() => {
    obtenerContenidoCafeteria(cafeteriaId);
    setOrden({
      userId: user?.id,
      userName: user?.name,
      cafeteriaId: +cafeteriaId,
      main_dish: +dishId,
      side_dish1: null,
      side_dish2: null,
      accompaniement: null,
      drink: 0,
    })
  }, [user,]);

  const { platillos } = contenidoCafeteria;
  const cafeteria = cafeterias?.find(cafeteria => cafeteria.id == contenidoCafeteria.id);

  const platillo = platillos?.find(platillo => platillo.id == dishId);
  const { acompanantes, complementos1, complementos2, bebidas } = contenidoCafeteria;
  const { orden, ordenComplete, registrarOrden } = useOrders();

  const navigate = useNavigate();
  const confirmarOrden = async () => {
    await registrarOrden(orden, setErrores, NotiError, redirigir);
  };

  const redirigir = () => {
    navigate(`/confirmed-order`);
  }

  return (
    <>
      <div className='principalContenedor'>
        <div
          className="px-8 py-12 max-w-md mx-auto sm:max-w-xl"
        >
          <div className="xl:max-w-xl">
            <img className="h-25 rounded-lg" src={Almuerzo} alt="ComidaPIC" />
            <h1
              className="titulo"
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
              <form className='text-white'>
                <div className=" font-bold mb-1">Platillo Principal</div>
                <hr className='bg-white' />
                <br />
                <div className="componentsDish">
                  <OrderComponent
                    name={platillo?.name}
                    id={dishId}
                    principal={true}
                    photo={Burrito}
                    cafetin="Miguel Magone" />
                </div>

                <br />
                <div className=" font-bold mb-1">Complemento 1</div>
                <hr className='bg-white' />
                <br />
                <div className="componentsDish">
                  {complementos1 ? complementos1.map((complemento) => (
                    <OrderComponent key={complemento.id}
                      id={complemento.id}
                      type="side_dish1"
                      name={complemento.name}
                      photo={Burrito}
                      cafetin="Miguel Magone" />
                  )) : ''}
                </div>
                <br />

                <div className=" font-bold mb-1">Complemento 2</div>
                <hr className='bg-white' />
                <br />
                <div className="componentsDish">
                  {complementos2 ? complementos2.map((complemento) => (
                    <OrderComponent key={complemento.id}
                      id={complemento.id}
                      type="side_dish2"
                      name={complemento.name}
                      photo={Burrito}
                      cafetin="Miguel Magone" />
                  )) : ''}
                </div>
                <br />

                <div className=" font-bold mb-1">Acompañantes</div>
                <hr className='bg-white' />
                <br />
                <div className="componentsDish">
                  {acompanantes ? acompanantes.map((acompanante) => (
                    <OrderComponent key={acompanante.id}
                      name={acompanante.name}
                      type="accompaniement"
                      id={acompanante.id}
                      photo={Burrito}
                      cafetin="Miguel Magone" />
                  )) : ''}
                </div>
                <br />

                <div className=" font-bold mb-1">Bebidas | +$0.25</div>
                <hr className='bg-white' />
                <br />
                <div className="componentsDish">
                  {bebidas ? bebidas.map((bebida) => (
                    <OrderComponent key={bebida.id}
                      name={bebida.name}
                      type="drink"
                      id={bebida.id}
                      photo={Burrito}
                      cafetin="Miguel Magone" />
                  )) : ''}
                </div>
              </form>
            </div>

          </div>
          <button to="/order" disabled={!ordenComplete} onClick={confirmarOrden}
            className="btn font-plane buttonActive"
          >
            Ordenar
          </button>
        </div>

      </div>
    </>
  )
}
