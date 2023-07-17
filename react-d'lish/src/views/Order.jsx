import React from 'react'
// Habilitando archivo para router link
import { Link } from "react-router-dom";

function Order() {
  return (
    <div className='flex items-center justify-center w-full animate-fade-down'> 
 <div  className="h-screen grid grid-cols-1 md:grid-cols-3 tracking-wide">
    <div id="pedidos" className="h-full col-start-2 py-20 place-self-center items-center md:  px-3">
      <div id="image-dlish" className="">
        <img src="../src/assets/logo/wide_orange.png" className="w-full rounded-t-lg"/>
      </div>
      <div id="card-body" className="grid grid-cols-1 justify-items-center px-20 py-10 bg-neutral rounded-b-lg  shadow-2xl">
        <div id="order-title">
          <h1 className="text-xl">Resumen del pedido</h1>
        </div>

        <div id="order-description" className="grid grid-cols-1">
          <p className="text-center text-sm text-gray-600 pt-2 pb-6 tracking-normal">Pedido Realizado en<br/>Cafeteria "Maria Auxiliadora"</p>
        </div>

<div className=''>
        <div id="order-item" className="grid grid-cols-3 rounded-lg mb-10">
            <img src="\public\img\Almuerzos.png" alt="" srcset="" className="py-5 pl-5"/>
          <div id="plan-pricing"className="py-5 pr-5">
            <h2 className="md:text-sm px-5 tracking-normal text-xs">Almuerzo</h2>
            <p className="md:text-sm px-5 text-gray-600 text-xs">$2.50</p>
          </div>
          <div id="change-link" className="grid place-content-center">
          <h1><Link className='text-xs underline text-white font-medium' to="/dish"> Cambiar</Link></h1>
          </div>
        </div>
</div>

<br />

        <div id="confirmation-bt">
          <button className="rounded-lg mb-5 p-3 px-6 w-full text-white  bg-error shadow-2xl">Proceder a pagar</button>
        </div>

        <div id="cancel">
        <button className="rounded-lg mb-5 p-3 px-6 w-full text-white  shadow-2xl">Cancelar</button>
        </div>
        
      </div>
    </div>
  </div>
  </div>
  )
}

export default Order
