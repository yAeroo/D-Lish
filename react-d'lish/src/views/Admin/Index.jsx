import React, { useEffect } from 'react'
import TarjetasAdminIndex from '../../components/TarjetasAdminIndex'
import UsersProps from '../../components/Admin/UsersProps';
//Comida pic
import useOwner from '../../hooks/useOwner';
//chart LINE imports 
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, ArcElement, Tooltip, } from "chart.js";
//chart Doughnut imports 
import { Pie } from "react-chartjs-2";

import { Link } from 'react-router-dom';

export default function Admin() {
  const { contenido, obtenerOwner } = useOwner();

  useEffect(() => {
    obtenerOwner();
  }, [])

  if (!contenido) {
    return <h1 className='h-[100%] text-black text-4xl'>Cargando</h1>
  }

  const { cafeteria } = contenido;

  ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Ventas Semanales',
        data: [12, 15, 10, 17, 14],
        backgroundColor: ['green'],
        borderColor: 'lightblue',
        pointBorderColor: 'green',
        borderWidth: 2,
        fill: true,
        tension: 0.4
      },
    ],
  }

  const options = {
    Plugins: {
      legend: true
    },
    scales: {
      y: {


      }
    }
  }

  ChartJS.register(ArcElement, Tooltip, Legend);
  const data1 = {
    labels: ['Pupusas', 'Pollo', 'Carne'],
    datasets: [
      {
        label: 'Platillo más vendido',
        data: [25, 50, 35],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
      }]
  }


  return (
    <>
      <div className='lg:ml-[10rem] h-[100%] animate-fade animate-duration-500'>

        <div className="flex-grow">

          {/* Mensaje de Bienvenida  */}
          <main className="p-6 sm:p-10 space-y-6">
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between ">
              <div className="mr-6">
                <h1 className="text-4xl font-semibold mb-2 text-primary">Cafetín {cafeteria?.name}</h1>
                <h2 className="text-black ml-0.5">Mira las estadisticas de tu local</h2>
              </div>

              {/* Boton de Edit Local */}
              <div className="flex flex-wrap items-start justify-end -mb-3 mt-6">
                <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  <Link to="/admin/profile">Editar Local</Link>
                </button>
              </div>
            </div>

            <TarjetasAdminIndex></TarjetasAdminIndex>

            {/* Espacio para Tarjeta de comida o Grafica  + demas Tarejtas*/}
            <section className="grid md:grid-cols-2 grid-cols-1  gap-6 ">

              {/* Trajetas de Usuarios */}
              <div className="row-span-3 bg-neutral text-yellow-50 shadow rounded-lg">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span>Usuarios Frencuentes</span>
                </div>
                {/* Tablero de usuarios */}
                <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-y-4 md:gap-y-3 my-3 mx-0 lg:mx-4'>
                  <UsersProps name="Mordecai" />
                  <UsersProps name="Rigby" />
                  <UsersProps name="Finn" />
                  <UsersProps name="Jake" />
                  <UsersProps name="Jake" />
                  <UsersProps name="Finn" />
                </div>
              </div>


              {/* Trajetas de Larteral */}
              <div className="flex flex-col row-span-3 bg-neutral shadow rounded-lg">
                <div className="px-6 py-5 font-semibold border-b text-yellow-50 border-gray-100">Platillos más vendidos</div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center  justify-center h-full px-4 py-20 text-white font-bold text-3xl border-2 border-gray-200 border-dashed rounded-md">
                    {/* Espacio exacto para grafica */}
                    <Pie className='max-h-96' data={data1} />
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>

      </div>
    </>
  )
}

