// Multimedia
import "../css/dishSelection.css"
import "../css/buttons.css"
import Burrito from "../../src/assets/index/burrito.jpg";
import Almuerzo from "../../src/assets/homepage/Almuerzos.png"

import OrderComponent from '../components/OrderComponent';

// Importacion de iconos y demas 
import { FaMoneyCheck } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { CgDanger } from "react-icons/cg"
import { ValidURL } from "../helper/ValidURL";

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

  // Validar URL
  const { bool, error } = ValidURL(cafeteriaId, dishId);
  if (bool) return error;

  // Extraer contenido de la cafeteria actual al tener el ID 
  useEffect(() => {
    limpiarCafeteria();
    obtenerContenidoCafeteria(cafeteriaId);
  }, []);

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
      accompaniement: 0,
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

  // Parte del Modal
  const [selectedPayment, setSelectedPayment] = useState(null);
  const showFundsText = selectedPayment === "PaymentFondos";

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
                <div className=" font-bold mb-1">Platillo Principal | Obligatorio</div>
                <hr className='bg-white' />
                <br />
                <div className="componentsDish">
                  <OrderComponent
                    name={platillo?.name}
                    id={dishId}
                    principal={true}
                    photo={Burrito} />
                </div>

                <br />
                <div className=" font-bold mb-1">Complemento 1 | Obligatorio</div>
                <hr className='bg-white' />
                <br />
                <div className="componentsDish">
                  {complementos1 ? complementos1.map((complemento) => (
                    <OrderComponent key={complemento.id}
                      id={complemento.id}
                      type="side_dish1"
                      name={complemento.name}
                      photo={Burrito} />
                  )) : ''}
                </div>
                <br />

                <div className=" font-bold mb-1">Complemento 2 | Obligatorio</div>
                <hr className='bg-white' />
                <br />
                <div className="componentsDish">
                  {complementos2 ? complementos2.map((complemento) => (
                    <OrderComponent key={complemento.id}
                      id={complemento.id}
                      type="side_dish2"
                      name={complemento.name}
                      photo={Burrito} />
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
                      photo={Burrito} />
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
                      photo={Burrito} />
                  )) : ''}
                </div>
              </form>
            </div>

          </div>
          <button to="/order" disabled={!ordenComplete} onClick={() => window.payment_modal.showModal()}
            className="btn font-plane buttonActive"
          >




            {/* onClick={confirmarOrden} */}
            Ordenar
          </button>


          <div>
            <dialog id="payment_modal" className="modal">
              <form method="dialog" className="modal-box bg-[#292929]">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg text-terc text-center">Tipo de pago</h3>

                <h4 className="mb-5 py-4 text-lg font-medium text-gray-900 dark:text-white text-center"> Selecciona el tipo de pago a utilizar para continuar con tu compra </h4>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                  <li>
                    <input type="radio" id="PaymentFondos" name="Payment" value="PaymentFondos" className="hidden peer" required onChange={() => setSelectedPayment("PaymentFondos")} />
                    <label htmlFor="PaymentFondos" className="inline-flex items-center justify-between w-full p-5  border border-dashed rounded-lg cursor-pointer hover:text-gray-100 border-gray-300 peer-checked:text-terc peer-checked:border-terc text-gray-200 peer-checked:bg-[#35a5643b] hover:bg-[#6aa785a2]">
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Fondos</div>
                        <div className="w-full ">Paga con los fondos de tu cuenta</div>
                      </div>
                      <FaMoneyCheck className="w-[5rem] h-5 ml-3 " />
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="PaymentEfectivo" name="Payment" value="PaymentEfectivo" className="hidden peer" required onChange={() => setSelectedPayment("PaymentEfectivo")} />
                    <label htmlFor="PaymentEfectivo" className="inline-flex items-center justify-between w-full p-5  border border-dashed rounded-lg cursor-pointer hover:text-gray-100 border-gray-300 peer-checked:text-terc peer-checked:border-terc text-gray-200 peer-checked:bg-[#35a5643b] hover:bg-[#6aa785a2]">
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Efectivo</div>
                        <div className="w-full">Paga dirigiendote a la cafeteria</div>
                      </div>
                      <GiPayMoney className="w-[5rem] h-5 ml-3 " />
                    </label>
                  </li>
                </ul>

                {selectedPayment !== null && showFundsText && (
                  <p className="text-center my-5 text-terc animate-fade animate-duration-500">
                    Tus fondos actuales son de 25$ <br />
                    Si deseas proceder dale al botón de abajo
                  </p>
                )}

                {selectedPayment === "PaymentEfectivo" && (
                  <p className="text-center my-5 text-[#ff922c] animate-fade animate-duration-500">
                    <CgDanger className="inline text-2xl pb-1" /> Al seleccionar la opción de Efectivo admites la responsabilidad para ir a la cafetería a reclamar y pagar tu pedido <br /> En caso de que no cumplas con tu responsabilidad, recibirás una penalización.
                  </p>
                )}

                <div className="modal-action justify-center">

                  <button className="btn btn-primary" onClick={confirmarOrden}> Realizar pedido</button>
                </div>
              </form>
            </dialog>
          </div>

        </div>

      </div>
    </>
  )
}
