import React from 'react'
// Icons
import { TbPigMoney } from "react-icons/tb";
import { LiaCoinsSolid } from "react-icons/lia";
// Componentes
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function Logs() {
    ChartJS.register(ArcElement, Tooltip, Legend);
    
    const data={
        labels: ['Fondos disponibles', 'Gastos totales'],
        datasets: [{
                data: [100, 25],
                backgroundColor: ['rgba(96, 185, 119, 0.9)', 'rgba(72, 72, 72, 0.5)',],
                borderColor: ['#275934','#151515'],
                borderWidth: 2,
                borderRadius: 20
            },
        ],
    };

    const options = { 
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
        circumference: 180,
        rotation: 270,
        cutout: '75%',
        offset: 20
    }

    return (
        <>
            {/* Contenedor principal */}
            <div id="logs-container" className='min-h-screen pt-32 px-5 mb-7 flex justify-center'>
                {/* Contenedor de fondos */}
                <section id="founds-summ" className='mt-7 bg-[#1a1a1a] rounded-lg p-3 w-full sm:w-11/12 h-1/2 shadow-sm shadow-[#080808]'>

                    {/* Título de la sección */}
                    <div className="flex justify-center md:justify-normal">
                        <p className='text-white font-title font-semibold text-2xl md:text-3xl transition-all md:mx-5 my-5 inline-block'>
                            Resumen de fondos
                            <hr className='border-success rounded-full border-[1px]' />
                        </p>
                    </div>

                    {/* Contenedor de stats */}
                    <div className="flex items-center justify-center">
                        <div className="stats stats-vertical md:stats-horizontal  shadow bg-[#121212] my-5 mx-2">

                            <div className="stat w-[300px]">
                                <div className="stat-figure text-primary">
                                    <TbPigMoney size={40} />
                                </div>
                                <div className="stat-title text-white font-bold">Fondos disponibles</div>
                                <div className="stat-value">$100.00</div>
                            </div>

                            <div className="stat w-[300px]">
                                <div className="stat-figure text-primary">
                                    <LiaCoinsSolid size={40} />
                                </div>
                                <div className="stat-title text-white font-bold">Gastos totales</div>
                                <div className="stat-value">$25.00</div>
                            </div>

                        </div>
                    </div>

                    {/* Chart */}
                    <div className="flex justify-center -mt-12 -mb-12">
                        <div className="chart-cont relative inline-block text-center">
                            <Doughnut data={data} options={options} />
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}
