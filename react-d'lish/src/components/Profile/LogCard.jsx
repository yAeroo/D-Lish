import React from 'react';
import { useTranslation } from 'react-i18next';
// Icons
import { AiOutlineShop } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { MdOutlineShoppingCart, MdOutlineShoppingCartCheckout, MdOutlineRemoveShoppingCart } from "react-icons/md";
// Imgs
import Img from "../../assets/Dishes/pupusas_meal.jpg"
import { formatearDinero } from '../../helper/Money';

export default function LogCard({ orden }) {
    const { cafeteria, mainDish, price, fecha } = orden;
    const { t } = useTranslation();

    return (
        <>
            <div className="py-3 flex justify-center">
                <div className="flex-grow flex max-w-md bg-[#101525] shadow-lg rounded-lg overflow-hidden self-center">
                    <div className="w-1/3 bg-cover" style={{ background: `url(${Img})`, backgroundPositionX: 'center', backgroundPositionY: 'center', backgroundSize: 'cover' }}>
                    </div>

                    <div className="w-2/3 p-4">
                        <div id="top-cont" className='flex justify-between mb-2'>
                            <article id="status-cont" className='bg-success inline-flex items-center font-title text-sm font-bold text-white px-2 py-1 rounded-full'>
                                <MdOutlineShoppingCart color={"white"} size={"15"} className='mr-1' /> <p>{t("status.complete")}</p>
                            </article>

                            <article id="price-cont" className='font-bold text-white'>
                                {formatearDinero(+price)}
                            </article>
                        </div>

                        <article id="info-dish" className='mt-2'>
                            <p className='font-title text-xl font-bold text-center text-white'>
                                {mainDish.name}
                            </p>
                            <article className='flex flex-col items-center'>
                                <p className='font-title text-sm font-bold text-center text-[#afafaf] inline-flex'>
                                    <AiOutlineShop color={"#afafaf"} size={"15"} className='mr-1 self-center' />{t("logs.cafeteria")} · {cafeteria.name}
                                </p>
                                <p className='font-title text-sm font-bold text-center text-[#afafaf] inline-flex'>
                                    <BiCalendar color={"#afafaf"} size={"15"} className='mr-1 self-center' />
                                    {fecha}
                                </p>
                            </article>
                        </article>
                    </div>
                </div>
            </div>

        </>
    )
}
