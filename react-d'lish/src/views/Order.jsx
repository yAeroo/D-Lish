import '../css/cutoff-border.css';
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
{/* lo que centra y maneja la posicion del cuadro  */}
    <div className="h-full col-start-2 py-20  place-self-center items-center md:px-3 ">
      {/* Cuerpo del La card */}
      <div id="box" className="box lg:px-5 bg-[#a8a29e]">
        {/* contenido carta */}
        <div className='pt-5'>
        <img src="../src/assets/logo/icon_bw.png" className='h-10 cursor-pointer my-auto ' alt="LogoType"/>
          <h1 className="text-2xl text-warning title">Resumen del pedido</h1>
        </div>
        <div className="grid grid-cols-1">
          <p className="text-center text-sm text-black pt-2 pb-6 tracking-normal">
            Pedido Realizado en<br/>Cafeteria "Maria Auxiliadora"</p>
        </div>
        {/* Listado */}
        <div className="">
  <table className="table font-bold text-black">
    {/* head */}
    <thead>
      <tr className='font-bold  text-accent '>
        <th></th>
        <th>Producto</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="">
        <th>1</th>
        <td>Almuerzo</td>
        <td>$2.50</td>
      </tr>
      {/* row 2 */}
      <tr className="">
        <th>2</th>
        <td>Arroz</td>
        <td>$0.25</td>
      </tr>
      {/* row 3 */}
      <tr className="">
        <th>3</th>
        <td>Fresco</td>
        <td>$0.25</td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
      </div>
  </div>

  </div>
  </>
  )
}

export default Order
