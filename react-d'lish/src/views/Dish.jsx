import { useTranslation } from "react-i18next";
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
import { formatearDinero } from "../helper/Money";
import Spinner from "../components/Spinner";
import { CgSpinner } from "react-icons/cg";

export default function Dish() {
  const { t } = useTranslation();
  // Extraer parametro
  const [errores, setErrores] = useState([]);
  const [precio, setPrecio] = useState(2.50);
  const [typePay, setTipoPago] = useState(null);
  const { user } = useAuth({ middleware: 'auth' })
  const { cafeteriaId, dishId } = useParams();
  const { cafeterias, contenidoCafeteria, limpiarCafeteria, obtenerContenidoCafeteria, isLoading, setIsLoading } = useCafeterias();
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
      typePay: "null",
    })
    console.log(user);
  }, [user]);

  const { platillos } = contenidoCafeteria;
  const cafeteria = cafeterias?.find(cafeteria => cafeteria.id == contenidoCafeteria.id);

  const platillo = platillos?.find(platillo => platillo.id == dishId);
  const { acompanantes, complementos1, complementos2, bebidas } = contenidoCafeteria;
  const { orden, ordenComplete, registrarOrden } = useOrders();
  const [pagar, setPagar] = useState(false);

  const navigate = useNavigate();

  const confirmarOrden = async () => {
    if (pagar) {
      await registrarOrden(orden, setErrores, NotiError, redirigir, typePay);
    }
  };

  const redirigir = () => {
    navigate(`/confirmed-order`);
  }

  const handleAgregar25 = () => {
    setPrecio(2.75);
  }

  // Condicionales según tipo de pago
  const pagarEfectivo = async () => {
    setTipoPago('efectivo');
    setPagar(true)
  }

  const pagarFondos = async () => {
    setTipoPago('fondos');
    setPagar(false)
    if (user?.saldo_disp >= precio) {
      setPagar(true)
    }
  }

  console.log(cafeteria);

  // Parte del Modal
  const [selectedPayment, setSelectedPayment] = useState(null);
  const showFundsText = selectedPayment === "PaymentFondos";

  if (isLoading) return <Spinner />

  return (
    <>
      <div className='principalContenedor'>
        <div
          className="px-8 py-12 max-w-md mx-auto sm:max-w-xl"
        >
          <div className="xl:max-w-xl">
              <div className="bg-black/50 min-h-[288px] min-w-[512px] rounded-lg bg-black/50">
                  { cafeteria && cafeteria?.cafe_wallp ?
                    <img className="rounded-lg min-h-[288px] min-w-[512px]" src={`../../../assets/cafeterias/${cafeteria?.cafe_wallp}`} alt="ComidaPIC" />
                  :
                    <div className="flex items-center justify-center min-h-[288px]">
                      <CgSpinner className="loading-icon mr-2" size={100} />
                    </div>
                  }
              </div>
            <h1
              className="titulo"
            >
              Cafetín {cafeteria?.nombre}
              <br className="hidden lg:inline" />
              <span className="text-primary"> {/* Almuerzo*/}
              {t("dish.lunch")}</span>
            </h1>
            <p className="mt-2 sm:mt-4 sm:text-xl text-white-900">
              {/* Define los complementos de tu almuerzo*/}
              {t("dish.define-side-title")}
            </p>
            <p className="mt-2 text-sm italic font-bold text-gray">
              {/* Define the lunch side dishes.*/}
              {t("dish.define-lunch-title")}</p>
            <div className="flex flex-col w-full border-opacity-50">
              <br />
              <form className='text-white'>
                <div className=" font-bold mb-1">Platillo Principal | Obligatorio</div>
                <hr className='bg-white' />
                <br />
                <div className="componentsDish">
                  {platillo ? 
                    <OrderComponent
                    name={platillo?.name}
                    id={dishId}
                    principal={true}
                    photo={`mainDish/${platillo?.img}`} />:""
                  }
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
                      photo={`sideDish1/${complemento?.img}`} />
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
                      photo={`sideDish2/${complemento?.img}`} />
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
                      photo={`accompaniment/${acompanante?.img}`} />
                  )) : ''}
                </div>
                <br />

                <div className=" font-bold mb-1 text-green-500 border-sky-100">Bebidas | +$0.25</div>
                <hr className='bg-white' />
                <br />
                <div className="componentsDish">
                  {bebidas ? bebidas.map((bebida) => (
                    <OrderComponent
                      key={bebida.id}
                      name={bebida.name}
                      type="drink"
                      id={bebida.id}
                      photo={`drinks/${bebida?.img}`}
                      add25={handleAgregar25}
                    />
                  )) : ''}
                </div>
              </form>
            </div>

          </div>
          <button to="/order" disabled={!ordenComplete} onClick={() => window.payment_modal.showModal()}
            className="btn font-plane buttonActive"
          >
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
                    <input type="radio" id="PaymentFondos" name="Payment" value="PaymentFondos" className="hidden peer" required onChange={() => setSelectedPayment("PaymentFondos")}
                      onClick={pagarFondos}
                    />
                    <label htmlFor="PaymentFondos" className="inline-flex items-center justify-between w-full p-5  border border-dashed rounded-lg cursor-pointer hover:text-gray-100 border-gray-300 peer-checked:text-terc peer-checked:border-terc text-gray-200 peer-checked:bg-[#35a5643b] hover:bg-[#6aa785a2]">
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Fondos</div>
                        <div className="w-full ">Paga con los fondos de tu cuenta</div>
                      </div>
                      <FaMoneyCheck className="w-[5rem] h-5 ml-3 " />
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="PaymentEfectivo" name="Payment" value="PaymentEfectivo" className="hidden peer" required onChange={() => setSelectedPayment("PaymentEfectivo")} onClick={pagarEfectivo} />
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
                  <p className={`text-center my-5 
                  ${+(user?.saldo_disp) >= precio ? "text-terc" : "text-[#ff4c2c]"}
                   animate-fade animate-duration-500`}>
                    {`Tus fondos actuales son de ${formatearDinero(+(user?.saldo_disp))} `}<br />
                    {+(user?.saldo_disp) >= precio ? "Confirma el pago con tus fondos abajo" : `Fondos insuficientes para pagar ${formatearDinero(precio)}`}
                  </p>
                )}

                {selectedPayment === "PaymentEfectivo" && (
                  <p className="text-center my-5 text-[#ff922c] animate-fade animate-duration-500">
                    <CgDanger className="inline text-2xl pb-1" /> Admites la responsabilidad para ir a la cafetería a reclamar y pagar tu pedido. <br /> En caso contrario, recibirás una penalización.
                  </p>
                )}

                <div className="modal-action justify-center">
                  <button className="btn btn-primary" onClick={confirmarOrden} disabled={!pagar}> Realizar pedido</button>
                </div>
              </form>
            </dialog>
          </div>

        </div>

      </div>
    </>
  )
}
