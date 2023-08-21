import React from 'react'
import { Link } from 'react-router-dom';

// Importación de iconos
import { HiMenu } from "react-icons/hi";
import { BsGraphUp } from 'react-icons/bs';
import { MdFoodBank } from 'react-icons/md'
import { IoFastFoodSharp } from 'react-icons/io5';
import { BiLogOut } from "react-icons/bi";
import { BiSolidNotepad } from "react-icons/bi";

function SideBar() {
  return (
    <div className='z-10 relative'>

      {/* Contenedor del Sidebar */}
      <div className="drawer lg:drawer-open lg:absolute w-0">

        {/* Checkbox para mostrar/ocultar el sidebar en dispositivos móviles */}
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        {/* Botón para mostrar/ocultar el sidebar en vista móvil */}
        <div className=" top-0 left-0 mt-4 ml-4">
          <label htmlFor="my-drawer-2" className="btn btn-primary text-[20px] drawer-button lg:hidden"><HiMenu className='  font-extrabold' /></label>
        </div>

        {/* Contenido del sidebar */}
        <div className="drawer-side">
          {/* Overlay para cerrar el sidebar al hacer clic fuera de él */}
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          {/* Lista de elementos del sidebar */}
          <ul className="menu p-4 w-[7rem] h-full fixed flex flex-col items-center bg-secu text-base-content ">
            {/* Contenido del Sidebar */}
            <img src="../src/assets/logo/icon_bw.png" alt="Logo" className='h-11 mx-auto mt-5 mb-12' />
            <li className="mb-7" title='Ventas'><Link to="/admin"><BsGraphUp className='text-white text-2xl ' /></Link></li>
            <li className="mb-7" title="Productos"><Link to="/admin/products"><IoFastFoodSharp className='text-white text-2xl ' /></Link></li>
            <li className="mb-7" title='Cafeteria'><Link to="/admin/profile"><MdFoodBank className='text-white text-2xl ' /></Link></li>
            <li className="mb-7" title='Pedidos'><Link to="/admin/delivmode"><BiSolidNotepad className='text-white text-2xl ' /></Link></li>

            {/* Elemento del sidebar fijo en la parte inferior */}
            <li className='fixed bottom-0 mb-4'><Link to="/homepage" className='bg-[#00000086] p-5 px-7 rounded-md'><BiLogOut className='text-white text-2xl' /></Link></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default SideBar;
