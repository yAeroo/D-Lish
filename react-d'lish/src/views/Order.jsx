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
 <div  className="h-screen grid grid-cols-1 md:grid-cols-3 tracking-wide ">
{/* lo que centra y maneja la posicion del cuadro  */}
    <div className="h-full col-start-2 py-20  place-self-center items-center md:px-3 ">
      {/* Cuerpo del La card */}
      <div id="box" className="box lg:px-5  bg-[#fef9c3]">
        {/* contenido carta */}
        <div className='pt-7 px-4 flex'>
        <img src="../src/assets/logo/icon_rounded.png" className='w-1/5 cursor-pointer my-auto  px-2 rotate-[-20deg] contrast-[.20]' alt="LogoType"/>  
        <img src="../src/assets/logo/dlish_font_n.png" className='w-1/5 cursor-pointer my-auto contrast-[.20]' alt="LogoType"/> 
        <p className="text-center text-sm px-24 contrast-[.20] pt-[1.5rem] text-black pt- pb-6 tracking-normal font-title font-extrabold">
            26/08/21</p>   
        </div>
        <h1 className="text-2xl px-2 text-base-100  contrast-[.20] pt-[1.5rem] font-title font-extrabold text-center">Resumen del pedido</h1>
        <div className="grid grid-cols-1 ">
          <p className="text-center text-sm contrast-[.20] text-black pt-2 tracking-normal font-title font-extrabold pb-5">
            Pedido Realizado en<br/>Cafeteria "Maria Auxiliadora"</p>
        </div>
        {/* Listado */}
        <div className="">
  <table className="table font-bold text-black">
    {/* head */}
    <thead>
      <tr className='border-dashed  font-title font-extrabold contrast-[.20] border-black text-accent '>
        <th></th>
        <th>Producto</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="border-dashed contrast-[.20] border-black">
        <th>1</th>
        <td>Almuerzo</td>
        <td>$2.50</td>
      </tr>
      {/* row 2 */}
      <tr className="border-dashed contrast-[.20] border-black">
        <th>2</th>
        <td>Arroz</td>
        <td>$0.25</td>
      </tr>
      {/* row 3 */}
      <tr className="border-dashed contrast-[.20]   border-black">
        <th>3</th>
        <td>Fresco</td>
        <td>$0.25</td>
      </tr>
            {/* row 3 */}
            <tr className="border-dashed  font-bold border-black">
        <th>Total:</th>
        <td>$3.00</td>
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
