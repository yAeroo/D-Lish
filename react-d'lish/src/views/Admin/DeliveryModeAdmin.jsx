import React from 'react'
import OrderProps from '../../components/Admin/OrderProps'
import Pupusas from "../../assets/index/pupusas.jpg";



function DeliveryModeAdmin() {
  return (
    <div className='lg:ml-[7rem] my-[-65px] lg:my-[0px] h-[100%] min-h-screen animate-fade animate-duration-500'>
  

  {/* Mensaje de Arriba */}
      <div className="flex items-center justify-between py-7 px-10 ">
        <div>
          <h1 className="text-2xl font-semibold leading-relaxed text-primary">Ordenes</h1>
          <p className="text-sm font-medium text-gray-800">
           Acepta o niega pedidos de tu local
          </p>
        </div>
      </div>

           <table className="w-full border-b border-gray-200">
        <thead className=' bg-orange-400'>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
            <td className="py-4 px-4 text-center">Producto</td>
            <td className="py-4 px-4 text-center">Usuario</td>
            <td className="py-4 px-4 text-center">Aceptar</td>
            <td className="py-4 px-4 text-center">Denegar</td>
          </tr>
        </thead>
        <tbody>
          <tr className="transition-colors group">
            <td className="font-medium text-center text-primary">
              <img src={Pupusas} alt="" className='w-40 aspect-[3/2] rounded-lg object-cover object-top' />Pupusa</td>
            <td className="font-medium text-center text-primary">Eleazar Amaya</td>
            <td className="font-medium text-center text-primary"><button className="btn btn-outline btn-success">Success</button></td>
            <td className="font-medium text-center text-primary"><button className="btn btn-outline btn-error">Error</button></td>
          </tr>
          <tr className="transition-colors group">
            <td className="font-medium text-center text-primary">
              <img src={Pupusas} alt="" className='w-40 aspect-[3/2] rounded-lg object-cover object-top' />Pupusa</td>
            <td className="font-medium text-center text-primary">Eleazar Amaya</td>
            <td className="font-medium text-center text-primary"><button className="btn btn-outline btn-success">Success</button></td>
            <td className="font-medium text-center text-primary"><button className="btn btn-outline btn-error">Error</button></td>
          </tr>
          <tr className="transition-colors group">
            <td className="font-medium text-center text-primary">
              <img src={Pupusas} alt="" className='w-40 aspect-[3/2] rounded-lg object-cover object-top' />Pupusa</td>
            <td className="font-medium text-center text-primary">Eleazar Amaya</td>
            <td className="font-medium text-center text-primary"><button className="btn btn-outline btn-success">Success</button></td>
            <td className="font-medium text-center text-primary"><button className="btn btn-outline btn-error">Error</button></td>
          </tr>
          <tr className="transition-colors group">
            <td className="font-medium text-center text-primary">
              <img src={Pupusas} alt="" className='w-40 aspect-[3/2] rounded-lg object-cover object-top' />Pupusa</td>
            <td className="font-medium text-center text-primary">Eleazar Amaya</td>
            <td className="font-medium text-center text-primary"><button className="btn btn-outline btn-success">Success</button></td>
            <td className="font-medium text-center text-primary"><button className="btn btn-outline btn-error">Error</button></td>
          </tr>
        </tbody>
      </table> 



    </div>
  )
}

export default DeliveryModeAdmin
