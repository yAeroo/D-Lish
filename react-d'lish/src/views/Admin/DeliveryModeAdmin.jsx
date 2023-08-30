import React from 'react';
import HeaderOrder from '../../components/Admin/HeaderOrder';

//Importaciones de props platillos
import OrderProps from '../../components/Admin/OrderProps';

//
import "../../css/productsTable.css";

//Importaciones del content de los props
import useOwner from '../../hooks/useOwner';

function DeliveryModeAdmin() {
      const { platillos } = useOwner();

      return (
            <div className='lg:ml-[10rem] mb-10 sm:ml-[1rem] md:ml-[5rem] ml-[1rem] h-[100%] animate-fade animate-duration-500"'>
                  <h1 className='text-6xl pt-14 text-center font-bold text-primary'>Pedidos del día</h1>
                  {platillos.map((platillo, id) => {
                        // Encabezado de la tabla para cada producto
                        return <div key={id} className='pb-6'>
                              <HeaderOrder platillo={platillo.name} idPlatillo={platillo.id} />
                              <OrderProps idPlatillo={platillo.id} />
                              <hr className='bg-primary h-1 w-1/3 m-auto' />
                        </div>
                  })}
            </div>

      )
}

export default DeliveryModeAdmin
