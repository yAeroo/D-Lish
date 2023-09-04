import ProfileInfo from "../../components/Profile/ProfileInfo";
import { formatearDinero } from "../../helper/Money";

// Icons
import { TbPigMoney } from "react-icons/tb";
import { LiaCoinsSolid } from "react-icons/lia";

// Componentes
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import LogCard from "../../components/Profile/LogCard.jsx"
import RegresarProfile from '../../components/Profile/RegresarProfile.jsx';
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Logs() {
    const { t } = useTranslation();

    const { user } = useAuth({ middleware: 'auth' });
    var [user_funds, user_funds_off] = useState(0);
    if (user?.saldo_disp != 0){
        user_funds = user?.saldo_disp; 
        user_funds_off = user?.saldo_off;
    }else{ user_funds_off = 1 }



    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        datasets: [{
            data: [user_funds, user_funds_off],
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
        cutout: '80%',
        circumference: 180,
        rotation: 270,
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
            <div id="logs-container" className='min-h-screen mb-7 flex items-center flex-col'>
                {/* Contenedor de fondos */}
                <section id="founds-summ" className='mt-7 rounded-lg w-full sm:w-11/12 h-1/2'>

                    {/* Título de la sección */}
                    <div className="flex justify-center md:justify-normal">
                        <p className='text-white font-title font-semibold text-2xl md:text-3xl transition-all md:mx-5 my-5 inline-block underline decoration-3 decoration-primary underline-offset-8'>
                            {t("logs.funds-summ")}
                        </p>
                    </div>

                    {/* Contenedor de stats */}
                    <div className="flex items-center justify-center ">
                        <div className="stats stats-vertical md:stats-horizontal my-5">

                            <div className="stat w-[300px] !bg-[#101525]">
                                <div className="stat-figure text-primary">
                                    <TbPigMoney size={40} />
                                </div>
                                <div className="stat-title text-white font-bold">{t("logs.available-funds")}</div>
                                <div className="stat-value">{user ? formatearDinero(+user.saldo_disp) : ''}</div>
                            </div>

                            <div className="stat w-[300px] !bg-[#101525]">
                                <div className="stat-figure text-primary ">
                                    <LiaCoinsSolid size={40} />
                                </div>
                                <div className="stat-title text-white font-bold">{t("logs.spent-funds")}</div>
                                <div className="stat-value">{user ? formatearDinero(+user.saldo_off) : ''}</div>
                            </div>

                        </div>
                    </div>

                    {/* Chart */}
                    <div className="flex justify-center -mt-12 -mb-12 relative">
                        <p className='absolute text-white font-title font-semibold text-2xl top-36 w-1/5 text-center'>{t("logs.fund-analysis")}</p>
                        <div className="chart-cont relative inline-block text-center">
                            <Doughnut data={data} options={options} />
                        </div>
                    </div>
                </section>

                <section id="logs-cards-cont" className='mt-7 rounded-lg w-full sm:w-11/12 h-1/2'>
                    {/* Título de la sección */}
                    <div className="flex justify-center md:justify-normal">
                        <p className='text-white font-title font-semibold text-2xl md:text-3xl transition-all md:mx-5 my-5 inline-block underline decoration-3 decoration-primary underline-offset-8'>
                            {t("logs.order-history")}
                        </p>
                    </div>

                    <div id="logs-cont" className='grid md:grid-cols-2 md:grid-rows-1 gap-x-2 gap-y-4 px-3'>
                        <LogCard />
                    </div>
                </section>

            </div>
        </>
    )
}
