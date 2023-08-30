import React from 'react';
import OrderProps from '../../components/Admin/OrderProps';
import HeaderOrder from '../../components/Admin/HeaderOrder';
import "../../css/productsTable.css";

function DeliveryModeAdmin() {

      return (
            <div className='lg:ml-[10rem] mb-10 sm:ml-[1rem] md:ml-[5rem] ml-[1rem] h-[100%] animate-fade animate-duration-500"'>


                  {/* Mensaje de Arriba */}
                  <HeaderOrder platillo='Carne' />

                  {/* Content */}
                  <OrderProps />


            </div>

      )
}

export default DeliveryModeAdmin
