import React from 'react';
import HeaderOrder from '../../components/Admin/HeaderOrder';

//Importaciones de props platillos
import OrderProps from '../../components/Admin/OrderProps'; 
import ChowMeinProps from '../../components/Admin/OrderProps/ChowMeinProps';
import BurritoProps from '../../components/Admin/OrderProps/BurritoProps';
import CostillasProps from '../../components/Admin/OrderProps/CostillasProps';
import LasagnaProps from '../../components/Admin/OrderProps/LasagnaProps';
import LonjaProps from '../../components/Admin/OrderProps/LonjaProps';
import PastaProps from '../../components/Admin/OrderProps/PastaProps';
import ParrillaProps from '../../components/Admin/OrderProps/ParrillaProps';
import GuisadoProps from '../../components/Admin/OrderProps/GuisadoProps';
import RellenosProps from '../../components/Admin/OrderProps/RellenosProps';
import TacosProps from '../../components/Admin/OrderProps/TacosProps';

//Importaciones del content de los props


import "../../css/productsTable.css";

function DeliveryModeAdmin() {

      return (
            <div className='lg:ml-[10rem] mb-10 sm:ml-[1rem] md:ml-[5rem] ml-[1rem] h-[100%] animate-fade animate-duration-500"'>

{/* Filete de Pollo */}
                  {/* Mensaje de Arriba */}
                  <HeaderOrder platillo='Filete de Pollo' />
                  {/* Content */}
                  <OrderProps />

{/* Chow Mein */}
                  {/* Mensaje de Arriba */}
                  <HeaderOrder platillo='Chow Mein' />
                  {/* Content */}
                  <ChowMeinProps />  

{/* Costillas BBQ */}
                  {/* Mensaje de Arriba */}
                  <HeaderOrder platillo='Costillas BBQ' />
                  {/* Content */}
                  <CostillasProps />                      

{/* Lasagna */}
                  {/* Mensaje de Arriba */}
                  <HeaderOrder platillo='Lasagna' />
                  {/* Content */}
                  <LasagnaProps />       

{/* Lonja de Pescado */}
                  {/* Mensaje de Arriba */}
                  <HeaderOrder platillo='Lonja de pescado' />
                  {/* Content */}
                  <LonjaProps />

{/* Pasta con Queso */}
                  {/* Mensaje de Arriba */}
                  <HeaderOrder platillo='Pasta con queso' />
                  {/* Content */}
                  <PastaProps />

{/* Pollo a la Parrilla */}
                  {/* Mensaje de Arriba */}
                  <HeaderOrder platillo='Pollo a la parrilla' />
                  {/* Content */}
                  <ParrillaProps />         

{/* Pollo Guisado */}
                  {/* Mensaje de Arriba */}
                  <HeaderOrder platillo='Pollo guisado' />
                  {/* Content */}
                  <GuisadoProps />  

{/* Rellenos de papa */}
                  {/* Mensaje de Arriba */}
                  <HeaderOrder platillo='Rellenos de papa' />
                  {/* Content */}
                  <RellenosProps />                

{/* Tacos */}
                  {/* Mensaje de Arriba */}
                  <HeaderOrder platillo='Tacos' />
                  {/* Content */}
                  <TacosProps />     

{/* Burrito */}
                  {/* Mensaje de Arriba */}
                  <HeaderOrder platillo='Burrito' />
                  {/* Content */}
                  <BurritoProps />   
            </div>

      )
}

export default DeliveryModeAdmin
