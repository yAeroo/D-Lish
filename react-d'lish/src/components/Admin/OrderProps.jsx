import React from 'react'
import Pupusas from "../../assets/index/pupusas.jpg"; 
import OrderContent from './OrderContent';

function OrderProps() {

  return (
    <div className=''>
<div className="flex items-center w-[95%] justify-center">
        <div className="container">
          <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
            <thead className="text-white">

                <tr className="bg-secondary flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th className="p-3 text-left">Realizado por</th>
                  <th className="p-3 text-left">Complemento 1</th>
                  <th className="p-3 text-left" width="110px">
                    Complemento 2
                  </th>
                  <th className="p-3 text-left" width="110px">
                    Acciones
                  </th>
                </tr>
            </thead>
            
          <tbody className="flex-1 sm:flex-none text-[#414141]">

            <OrderContent nameuser="tilin amaya" platillo="Desayuno" content1="Arroz" content2="Chimol" />

          </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default OrderProps
 