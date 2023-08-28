import ProfileInfo from "../../components/Profile/ProfileInfo";
import { formatearDinero } from "../../helper";

// Icons
import { TbPigMoney } from "react-icons/tb";
import { LiaCoinsSolid } from "react-icons/lia";
// Componentes
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import LogCard from "../../components/Profile/LogCard.jsx"
import RegresarProfile from '../../components/Profile/RegresarProfile.jsx';
import { useAuth } from "../../hooks/useAuth";

export default function Logs() {
    const { user } = useAuth({ middleware: 'auth' });

    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: ['Fondos disponibles', 'Gastos totales'],
        datasets: [{
            data: [user?.saldo_disp, user?.saldo_off],
            backgroundColor: ['rgba(96, 185, 119, 0.9)', 'rgba(72, 72, 72, 0.5)',],
            borderColor: ['#275934', '#151515'],
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
            {/* Botones de edición y regresar */}
            <div id="pf-bttns" className="relative">
                <RegresarProfile url="/profile" />
            </div>

            {/* Información de perfil */}
            <ProfileInfo user={user} />

            {/* Contenedor principal */}
            <div id="logs-container" className='min-h-screen px-5 mb-7 flex items-center flex-col'>
                {/* Contenedor de fondos */}
                <section id="founds-summ" className='mt-7 bg-[#1a1a1a] rounded-lg p-3 w-full sm:w-11/12 h-1/2 shadow-sm shadow-[#080808]'>

                    {/* Título de la sección */}
                    <div className="flex justify-center md:justify-normal">
                        <p className='text-white font-title font-semibold text-2xl md:text-3xl transition-all md:mx-5 my-5 inline-block underline decoration-3 decoration-primary underline-offset-8'>
                            Resumen de fondos
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
                                <div className="stat-value">{user ? formatearDinero(+user.saldo_disp) : ''}</div>
                            </div>

                            <div className="stat w-[300px]">
                                <div className="stat-figure text-primary">
                                    <LiaCoinsSolid size={40} />
                                </div>
                                <div className="stat-title text-white font-bold">Gastos totales</div>
                                <div className="stat-value">{user ? formatearDinero(+user.saldo_off) : ''}</div>
                            </div>

                        </div>
                    </div>

                    {/* Chart */}
                    <div className="flex justify-center -mt-12 -mb-12 relative">
                        <p className='absolute text-white font-title font-semibold text-2xl top-36 text-center'>Análisis <br /> de fondos</p>
                        <div className="chart-cont relative inline-block text-center">
                            <Doughnut data={data} options={options} />
                        </div>
                    </div>
                </section>

                <section id="logs-cards-cont" className='mt-7 bg-[#1a1a1a] rounded-lg p-3 w-full sm:w-11/12 h-1/2 shadow-sm shadow-[#080808]'>
                    {/* Título de la sección */}
                    <div className="flex justify-center md:justify-normal">
                        <p className='text-white font-title font-semibold text-2xl md:text-3xl transition-all md:mx-5 my-5 inline-block underline decoration-3 decoration-primary underline-offset-8'>
                            Historial de pedidos
                        </p>
                    </div>

                    <div id="logs-cont" className='grid lg:grid-cols-3 md:grid-cols-2 md:grid-rows-1 gap-x-7 gap-y-4 px-3'>
                        <LogCard />
                    </div>
                </section>

            </div>
        </>
    )
}
