import '../../css/cutoff-border.css';
import '../../css/dishSelection.css';
import "../../css/buttons.css";

import logoDlish from '../../assets/logo/icon_bw.png';
import fontDlish from '../../assets/logo/title_bw.png';
//Componente
import Footer from '../../components/Footer';

// Contenido variables
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import TableRow from '../../components/TableRow';

// hooks
import { useNavigate } from 'react-router-dom';
import useFechaActual from '../../hooks/useFecha';
import useOrders from '../../hooks/useOrders';
// Helper
import { isEmpty } from '../../helper/Vacio';

function Order() {
  const navigate = useNavigate();
  const { orden } = useOrders();
  const { cafeteria, ...Order } = orden;

  console.log(orden.length);
  const fechaActual = useFechaActual();
  let finalOrden = Object.keys(Order).filter(propiedad => Order[propiedad] !== null);
  finalOrden = Object.keys(Order).filter(propiedad => Order[propiedad] !== null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  if (isEmpty(orden)) {
    navigate("/")
  }

  return (
    <>
      {/* Cuerpo del trabajo + animación  */}
      <div className='flex items-center justify-center flex-col  min-h-screen w-full animate-fade-down animate-delay-[600ms] mb-5'>
        {/* Estructura del cuadrito */}
        <div className="h-screen sm:h-auto grid grid-cols-1 md:grid-cols-3 tracking-wide flex-grow">
          {/* lo que centra y maneja la posicion del cuadro  */}
          <div className="col-start-2  place-self-center items-center  md:px-1 ">
            <h2 className='text-center text-3xl font-bold text-white'>¡ORDEN REALIZADA!</h2>
            {/* Cuerpo del La card */}
            <div id="box" className="box lg:px-4 bg-[#ffffff27] text-white">
              {/* contenido carta */}
              <div className='pt-7 px-4 flex'>
                <img src={logoDlish} className='w-1/5 cursor-pointer my-auto px-2 rotate-[-20deg]  ' alt="LogoType" />
                <img src={fontDlish} className='w-1/5 cursor-pointer my-auto' alt="FontType" />
                <p className="text-center text-md px-24 pt-[1.5rem] text-white pb-6 tracking-normal font-title font-extrabold">
                  {fechaActual}
                </p>
              </div>
              <h1 className="text-2xl px-2  pt-[0.5rem] font-title font-extrabold text-center">Resumen del pedido</h1>
              <div className="grid grid-cols-1 ">
                <p className="text-center text-sm pt-2 tracking-normal font-title font-extrabold pb-2">
                  Pedido Realizado en
                  <br />Cafeteria "{cafeteria ? cafeteria : ''}"
                </p>
              </div>
              {/* Listado */}
              <div >
                <table className="table font-bold  border-slate-400">
                  {/* head */}
                  <thead>
                    <tr className='border-dashed border-slate-500 font-title font-extrabold text-white  '>
                      <th></th>
                      <th>N°</th>
                      <th>Producto</th>
                    </tr>
                  </thead>
                  <tbody>

                    {/* Iterar en los valores del objeto */}
                    {finalOrden.map((propiedad, index) => {
                      if (index !== finalOrden.length - 1) {
                        if (propiedad != cafeteria) return <TableRow key={propiedad} index={index + 1} component={orden[propiedad]} />;
                      }
                      return <TableRow key={propiedad} index="Precio" component={orden[propiedad]} />;
                    })}

                  </tbody>
                </table>
              </div>
              <div className="pb-4">
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
