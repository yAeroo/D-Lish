import React from 'react'
import OrderProps from '../../components/Admin/OrderProps'
import HeaderOrder from '../../components/Admin/HeaderOrder';

function DeliveryModeAdmin() {

      return (
            <div className='lg:ml-[10rem] sm:ml-[5rem] ml-[1/2rem] h-[100%] animate-fade animate-duration-500'>


                  {/* Mensaje de Arriba */}
                  <HeaderOrder platillo='Carne' />

                  {/* Content */}
                  <OrderProps />


            </div>

      )
}

export default DeliveryModeAdmin
