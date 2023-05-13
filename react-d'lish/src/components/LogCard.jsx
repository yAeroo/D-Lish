import React from 'react';
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

export default function LogCard() {
    return (
        <>
            <section id="log-card" className='p-2 my-2 flex shadow-lg shadow-slate-500 bg-[#ecf0f1] rounded-md w-96'>
                <div id="img-cont w-full">
                    <img src="img/coffee-square.jpg" alt="Img" className='h-[100px] w-[125px] rounded-lg'/>
                </div>

                <div id="info-cont" className='p-2 w-full'>
                    <div id="top-cont" className='flex justify-between'>
                        <article id="status-cont" className='bg-green-500 inline-flex items-center font-title text-sm font-bold text-white px-2 py-1 rounded-full'>
                            <BsFillBagCheckFill color={"white"} size={"15"} className='mr-1'/> <p>Completado</p>
                        </article>

                        <article id="price-cont" className='font-bold font-plane'>
                           $1.00
                        </article>
                    </div>

                    <article id="info-dish" className='mt-2'>
                        <p className='font-title text-lg font-bold text-center'>Café</p>
                        <p className='font-title text-sm font-bold text-center text-slate-500'>Cafetín · Don Bosco</p>
                    </article>
                </div>
            </section>

            <section id="log-card" className='p-2 my-2 flex shadow-lg shadow-slate-500 bg-[#ecf0f1] rounded-md w-96'>
                <div id="img-cont w-full">
                    <img src="img/desayuno.png" alt="Img" className='h-[100px] w-[125px] rounded-lg'/>
                </div>

                <div id="info-cont" className='p-2 w-full'>
                    <div id="top-cont" className='flex justify-between'>
                        <article id="status-cont" className='bg-orange-500 inline-flex items-center font-title text-sm font-bold text-white px-2 py-1 rounded-full'>
                            <MdOutlineShoppingCartCheckout color={"white"} size={"15"} className='mr-1'/> <p>Pendiente</p>
                        </article>

                        <article id="price-cont" className='font-bold font-plane'>
                           $2.50
                        </article>
                    </div>

                    <article id="info-dish" className='mt-2'>
                        <p className='font-title text-lg font-bold text-center'>Desayuno completo</p>
                        <p className='font-title text-sm font-bold text-center text-slate-500'>Cafetín · Domingo Savio</p>
                    </article>
                </div>
            </section>

            <section id="log-card" className='p-2 my-2 flex shadow-lg shadow-slate-500 bg-[#ecf0f1] rounded-md w-96'>
                <div id="img-cont w-full">
                    <img src="img/pan-dulce.png" alt="Img" className='h-[100px] w-[125px] rounded-lg'/>
                </div>

                <div id="info-cont" className='p-2 w-full'>
                    <div id="top-cont" className='flex justify-between'>
                        <article id="status-cont" className='bg-red-500 inline-flex items-center font-title text-sm font-bold text-white px-2 py-1 rounded-full'>
                            <GiCancel color={"white"} size={"15"} className='mr-1'/> <p>Cancelado</p>
                        </article>

                        <article id="price-cont" className='font-bold font-plane'>
                           $1.50
                        </article>
                    </div>

                    <article id="info-dish" className='mt-2'>
                        <p className='font-title text-lg font-bold text-center'>Combo de pan dulce</p>
                        <p className='font-title text-sm font-bold text-center text-slate-500'>Cafetín · María auxiliadora</p>
                    </article>
                </div>
            </section>
        </>
    )
}
