import React from 'react'
import DeliveryProducts from './DeliveryProducts';

function OrderProps(props) {
  const {nameuser, platillo, content1, content2 } = props;
  return (
    <div className=''>

{/* <section className='mt-4'>
        <div className="flex flex-col sm:w-[97%] w-[90%] lg:flex-row sm:p-5 ">

         <div className="grid md:flex md:h-56 h-56 p-5 flex-grow  bg-slate-900 place-items-center md:w-96 lg:w-11 xl:w-11 rounded-t-lg md:rounded-r-lg md:rounded-l-lg md:justify-around">
         <section className="font-medium text-center md:justify-items-start lg:justify-items-start">
               <img src={Pupusas} alt="" className='w-40 aspect-[3/2] rounded-lg object-cover object-top' />
               <h1 className=' font-extrabold text-primary text-lg'>{platillo}</h1></section>
               <section className='md:justify-items-end text-left'>
               <h2 className=" text-yellow-50 font-semibold ">Por usuario:</h2>
               <h2 className=" text-yellow-50 font-semibold ">{nameuser}</h2>
               </section>
          </div> 

          <div className="grid md:flex p-5 flex-grow  bg-slate-900place-items-center bg-slate-900 md:w-96 lg:w-11 xl:w-11 content-between md:rounded-t-lg md:rounded-l-lg md:rounded-r-lg  md:justify-around">
               <div className='md:justify-items-start lg:justify-items-end'>
               <h2 className="text-center text-yellow-50 font-semibold ">Listado:</h2>
               <h2 className="text-center text-gray-500 font-semibold ">{content1}</h2>
               <h2 className="text-center text-gray-500 font-semibold ">{content2}</h2>
               </div>
          </div> 

       </div>
        
        <div className="flex flex-col sm:w-[97%] w-[90%] lg:flex-row sm:p-5  h-32 md:h-56  md:flex  md:w-96 lg:w-11 xl:w-11">
          <div className="flex flex-row flex-grow gap-3 justify-center bg-slate-900 md:bg-transparent place-items-center md:h-42  h-40 rounded-b-lg  ">
          <td className="font-medium text-center text-primary "><button className="btn btn-outline btn-success">Aceptar</button></td>
           <td className="font-medium text-center text-primary "><button className="btn btn-outline btn-error">Denegar</button></td>
        </div>
      </div>
</section> */}

{/* <section>
<div class="overflow-x-auto bg-slate-900 m-5 md:m-12 rounded-lg  ">  
<table class="min-w-full">   
 <thead>    
    <tr class='text-secondary'>   
      <th class="px-4 py-2">Imagen</th>        
      <th class="px-4 py-2">Producto</th>        
      <th class="px-4 py-2">Usuario</th>        
      </tr>    
  </thead>    
  <tbody class='text-center '>      
    <tr>        
      <td class="border px-4 py-2 md:justify-items-start text-primary"><img src={Pupusas} alt="" className='w-40 aspect-[3/2] rounded-lg object-cover object-top' />{platillo}</td>        
      <td class="border px-4 py-2">
        <ul>
          <li>-{content1}</li>
          <li>-{content2}</li>
        </ul>
        </td>        
      <td class="border px-4 py-2">{nameuser}</td>            
    </tr>
      </tbody>  
      </table>
      <div className="flex flex-row flex-grow gap-3 justify-center  place-items-center h-3  rounded-b-lg m-8 md:m-12  ">
          <td className="font-medium text-center text-primary "><button className="btn btn-outline btn-success">Aceptar</button></td>
           <td className="font-medium text-center text-primary "><button className="btn btn-outline btn-error">Denegar</button></td>
        </div>
</div>



</section> */}


<div className="flex items-center w-[95%] justify-center">
        <div className="container">
          <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
            <thead className="text-white">

                <tr className="bg-secondary flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th className="p-3 text-left">Id</th>
                  <th className="p-3 text-left">Nombre</th>
                  <th className="p-3 text-left h-[242px] sm:h-[49px]">
                    Imagen
                  </th>
                  <th className="p-3 text-left" width="110px">
                    Precio
                  </th>
                  <th className="p-3 text-left" width="110px">
                    Acciones
                  </th>
                </tr>

            </thead>
            <tbody className="flex-1 sm:flex-none text-[#414141]">
                <DeliveryProducts />


            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default OrderProps
 