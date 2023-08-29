import React from 'react'
import OrderProps from '../../components/Admin/OrderProps'

// COMPONENTES DE CONTENIDO VARIABLE
import useSWR from 'swr';
import clienteAxios from '../../../src/config/axios';

function DeliveryModeAdmin() {
  const token = localStorage.getItem('AUTH_TOKEN');
  const fetcher = () => clienteAxios('/api/cafeteria/1/ordenes', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const { data, error, isLoading } = useSWR('/api/cafeteria/1/ordenes', fetcher);
  console.log(data, error, isLoading);

  return (
    <div className='lg:ml-[10rem] sm:ml-[5rem] ml-[1/2rem] h-[100%] animate-fade animate-duration-500'>


      {/* Mensaje de Arriba */}
      <div className="flex items-center justify-between py-7 px-10 ">
        <div>
          <h1 className="text-2xl font-semibold leading-relaxed text-primary">Ordenes</h1>
          <p className="text-sm font-medium text-gray-800">
            Acepta o niega pedidos de tu local
          </p>
        </div>
      </div>

      {/* Content */}
      <OrderProps nameuser="tilin amaya" platillo="Desayuno" content1="Pupusa" content2="Fresco $0.25" />

      <OrderProps nameuser="tilin amaya" platillo="Desayuno" content1="Pupusa" content2="Fresco $0.25" />

      <OrderProps nameuser="tilin amaya" platillo="Desayuno" content1="Pupusa" content2="Fresco $0.25" />

      <OrderProps nameuser="tilin amaya" platillo="Desayuno" content1="Pupusa" content2="Fresco $0.25" />
      


      <br />
    </div>
  )
}

export default DeliveryModeAdmin
