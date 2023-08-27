import React from 'react'
import Pupusas from "../../assets/index/pupusas.jpg";

function OrderProps(props) {
  const {nameuser, platillo, content1, content2 } = props;
  return (
    <div className=''>
<section className='mt-4'>
        <div className="flex flex-col sm:w-[97%] w-[90%] lg:flex-row sm:p-5 ">

         <div className="grid md:flex h-56 p-5 flex-grow  bg-slate-900 place-items-center  md:w-11 lg:w-11 xl:w-11 rounded-t-lg">
         <section className="font-medium text-center">
               <img src={Pupusas} alt="" className='w-40 aspect-[3/2] rounded-lg object-cover object-top' />
               <h1 className=' font-extrabold text-primary text-lg'>{platillo}</h1></section>
               <section className='md:justify-items-end text-left'>
               <h2 className=" text-yellow-50 font-semibold ">Por usuario:</h2>
               <h2 className=" text-yellow-50 font-semibold ">{nameuser}</h2>
               </section>
          </div> 

                         {/* Listado */}

          <div className=" grid md:flex h-36 md:h-56 p-5 flex-grow  bg-slate-900 place-items-center  md:w-11 lg:w-11 xl:w-11"> {/*  estaba en grid*/}
          <div className="grid md:flex p-5 flex-grow  bg-slate-900place-items-center  md:w-11 lg:w-11 xl:w-11 content-between">
               <div className=' md:justify-items-end'>
               <h2 className="text-center text-yellow-50 font-semibold ">Listado:</h2>
               <h2 className="text-center text-gray-500 font-semibold ">-{content1}</h2>
               <h2 className="text-center text-gray-500 font-semibold ">-{content2}</h2>
               </div>
          </div> 
         </div>
       </div>
            {/* Botones */}
        <div className="flex flex-col sm:w-[97%] w-[90%] lg:flex-row sm:p-5  h-32 md:h-56 ">
          <div className="flex flex-row flex-grow gap-3 justify-center bg-slate-900 md:bg-transparent place-items-center md:h-42  h-40 rounded-b-lg  "> {/*  estaba en grid*/}
          <td className="font-medium text-center text-primary "><button className="btn btn-outline btn-success">Aceptar</button></td>
           <td className="font-medium text-center text-primary "><button className="btn btn-outline btn-error">Denegar</button></td>
        </div>
      </div>
</section>
    </div>
  )
}

export default OrderProps
 