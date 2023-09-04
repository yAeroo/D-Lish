import React from 'react';
import { useTranslation } from 'react-i18next';
// Icons
import { AiOutlineShop } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { MdOutlineShoppingCart, MdOutlineShoppingCartCheckout, MdOutlineRemoveShoppingCart } from "react-icons/md";
// Imgs
import Img from "../../assets/Dishes/pupusas_meal.jpg"
import Img2 from "../../assets/Dishes/tortas_lunch.jpg"

export default function LogCard() {
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
                                $1.00
                            </article>
                        </div>

                        <article id="info-dish" className='mt-2'>
                            <p className='font-title text-xl font-bold text-center text-white'>Pupusas</p>
                            <article className='flex flex-col items-center'>
                                <p className='font-title text-sm font-bold text-center text-[#afafaf] inline-flex'>
                                    <AiOutlineShop color={"#afafaf"} size={"15"} className='mr-1 self-center' />{t("logs.cafeteria")} · Don Bosco
                                </p>
                                <p className='font-title text-sm font-bold text-center text-[#afafaf] inline-flex'>
                                    <BiCalendar color={"#afafaf"} size={"15"} className='mr-1 self-center' />20/08/2023
                                </p>
                            </article>
                        </article>
                    </div>
                </div>
            </div>

        </>
    )
}
