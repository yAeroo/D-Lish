import from './css/cutoff-border.css';
// Habilitando archivo para router link
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';

function Order() {
  return (
    <>
    {/* Apartado de NavBar */}
          <section className='px-4 md:px-24 py-4 bg-gradient-to-r'>
            <div className='animate-fade-up animate-once animate-delay-[1300ms]'><Navbar></Navbar></div>
          </section>

    {/* Cuerpo del trabajo + animación  */}
  <div className='flex items-center justify-center w-full animate-fade-down animate-delay-[1300ms]'> 

    {/* Estructura del cuadrito */}
 <div  className="h-screen grid grid-cols-1 md:grid-cols-3 tracking-wide">
    <div className="h-full col-start-2 py-20 place-self-center items-center md:  px-3">
      {/* Cuerpo del La card */}
      <div id="card-body" className="grid grid-cols-1 justify-items-center px-20 py-10 bg-[#d6d3d1] rounded-b-lg  shadow-2xl">
              <div id="order-title">
                <h1 className="text-xl text-base-100 font-bold">Resumen del pedido</h1>
              </div>
              <div id="order-description" className="grid grid-cols-1">
                <p className="text-center text-sm text-base-100 pt-2 pb-6 tracking-normal">Pedido Realizado en<br/>Cafeteria "Maria Auxiliadora"</p>
              </div>
      </div>
      </div>
  </div>

  </div>
  </>
  )
}

export default Order
