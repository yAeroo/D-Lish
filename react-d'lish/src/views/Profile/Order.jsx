import '../../css/cutoff-border.css';
import '../../css/dishSelection.css';
import "../../css/buttons.css";

import logoDlish from '../../assets/logo/icon_rounded.png';
import fontDlish from '../../assets/logo/dlish_font_n.png';

import Footer from '../../components/Footer';

// Contenido variables
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFechaActual from '../../hooks/useFecha';
import TableRow from '../../components/TableRow';
import useOrders from '../../hooks/useOrders';
import useCafeterias from '../../hooks/useCafeterias';

function Order() {
  const { orden } = useOrders();
  const { cafeterias, contenidoCafeteria } = useCafeterias();
  const { cafeteriaId, drink, main_dish, side_dish1, side_dish2, accompaniement } = orden;

  const fechaActual = useFechaActual();
  const cafeteria = cafeterias?.find(cafeteria => cafeteria.id == cafeteriaId);

  useEffect(() => {
    console.log(contenidoCafeteria);
    window.scrollTo(0, 0);
  }, [])


  return (
    <>
      {/* Cuerpo del trabajo + animación  */}
      <div className='flex items-center justify-center flex-col  min-h-screen w-full animate-fade-down animate-delay-[600ms] '>
        {/* Estructura del cuadrito */}
        <div className="h-screen sm:h-auto grid grid-cols-1 md:grid-cols-3 tracking-wide flex-grow">
          {/* lo que centra y maneja la posicion del cuadro  */}
          <div className="col-start-2  place-self-center items-center  md:px-1 ">
            <h2 className='text-center text-3xl font-bold '>¡ORDEN REALIZADA!</h2>
            {/* Cuerpo del La card */}
            <div id="box" className="box lg:px-4 bg-[#fffde7]">
              {/* contenido carta */}
              <div className='pt-7 px-4 flex'>
                <img src={logoDlish} className='w-1/5 cursor-pointer my-auto px-2 rotate-[-20deg] contrast-[.20]' alt="LogoType" />
                <img src={fontDlish} className='w-1/5 cursor-pointer my-auto contrast-[.20]' alt="FontType" />
                <p className="text-center text-sm px-24 contrast-[.20] pt-[1.5rem] text-black pt- pb-6 tracking-normal font-title font-extrabold">
                  {fechaActual}
                </p>
              </div>
              <h1 className="text-2xl px-2 text-base-100  contrast-[.20] pt-[0.5rem] font-title font-extrabold text-center">Resumen del pedido</h1>
              <div className="grid grid-cols-1 ">
                <p className="text-center text-sm contrast-[.20] text-black pt-2 tracking-normal font-title font-extrabold pb-2">
                  Pedido Realizado en
                  <br />Cafeteria "{cafeteria?.nombre}"
                </p>
              </div>
              {/* Listado */}
              <div >
                <table className="table font-bold  border-slate-400">
                  {/* head */}
                  <thead>
                    <tr className='border-dashed border-slate-500  font-title font-extrabold contrast-[.20] text-accent '>
                      <th></th>
                      <th>#</th>
                      <th>Producto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow compontent={main_dish ? main_dish : ''} cafeteria={contenidoCafeteria} />
                    <TableRow compontent={side_dish1 ? side_dish1 : ''} cafeteria={contenidoCafeteria} />
                    <TableRow compontent={side_dish2 ? side_dish2 : ''} cafeteria={contenidoCafeteria} />
                    <TableRow compontent={accompaniement ? accompaniement : ''} cafeteria={contenidoCafeteria} />
                    {drink != 0 ? <TableRow compontent={drink} cafeteria={contenidoCafeteria} /> : ''}
                  </tbody>
                </table>
              </div>
              <div className="mt-7">
                <Link to="/" className="btn font-plane buttonActive">
                  Ir al Inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Order
