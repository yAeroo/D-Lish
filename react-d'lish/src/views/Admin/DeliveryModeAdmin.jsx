import React from 'react'
import OrderProps from '../../components/Admin/OrderProps'
import Pupusas from "../../assets/index/pupusas.jpg";



function DeliveryModeAdmin() {
  return (
    <div className='lg:ml-[10rem] sm:ml-[5rem] ml-[2rem] h-[100%] animate-fade animate-duration-500'>
  

  {/* Mensaje de Arriba */}
      <div className="flex items-center justify-between py-7 px-10 ">
        <div>
          <h1 className="text-2xl font-semibold leading-relaxed text-primary">Ordenes</h1>
          <p className="text-sm font-medium text-gray-800">
           Acepta o niega pedidos de tu local
          </p>
        </div>
      </div>

 
      <div className="flex flex-col sm:w-[97%] w-[90%] lg:flex-row sm:p-5  bg-secu ">
         <div className="grid h-full p-5 flex-grow  card  rounded-box place-items-center">
   
         <section className="font-medium text-center  text-primary">
               <img src={Pupusas} alt="" className='w-40 aspect-[3/2] rounded-lg object-cover object-top' />Pupusa</section>
           <td className="font-medium text-center text-primary">Eleazar Amaya</td></div> 
   
          <div className="flex flex-row gap-3 justify-center flex-grow h-32 card bg-base-300 rounded-box place-items-center"> {/*  estaba en grid           */}
         <td className="font-medium text-center text-primary"><button className="btn btn-outline btn-success">Success</button></td>
           <td className="font-medium text-center text-primary"><button className="btn btn-outline btn-error">Error</button></td>
         </div>
   
      </div>
   
    </div>
  )
}

export default DeliveryModeAdmin
