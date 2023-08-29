import React from 'react'
import OrderProps from '../../components/Admin/OrderProps'
import HeaderOrder from '../../components/Admin/HeaderOrder';

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
      <HeaderOrder platillo='Carne' />

      {/* Content */}
      <OrderProps nameuser="tilin amaya" platillo="Desayuno" content1="Arroz" content2="Chimol" />
      <OrderProps nameuser="José Cea" platillo="Desayuno" content1="Casamiento" content2="Chimol" />
      <OrderProps nameuser="Oscar Arce" platillo="Desayuno" content1="Arroz" content2="Ensalada" />
      <br />

            {/* Platillo2 */}
      <HeaderOrder platillo='Pollo' />

      {/* Content */}
      <OrderProps nameuser="tilin amaya" platillo="Desayuno" content1="Arroz" content2="Chimol" />
      <br />


            {/* Platillo  */}
      <HeaderOrder platillo='Lasagna' />

      {/* Content */}
      <OrderProps nameuser="tilin amaya" platillo="Desayuno" content1="Arroz" content2="Chimol" />
      <br />

      
    </div>
    
  )
}

export default DeliveryModeAdmin
