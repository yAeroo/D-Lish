import React from 'react'
import PostAuthNavbar from '../components/Nav/Post-AuthNavbar'
import LogCard from '../components/LogCard'

export default function Logs() {
    return (
        <>
            <PostAuthNavbar />

            <section id="main-cont" className='min-h-screen'>
                <div id="text-cont" className='inline-block mt-5'>
                    <p className='font-title font-bold 
                        text-3xl md:text-3xl 
                        pt-5 text-prim 
                        pl-10 md:pl-20 lg:pl-40 xl:pl-52 transition-all'>
                        Registro de pedidos  <hr className='h-[3px] mt-1 border-terc rounded-full border-[2px]' />
                    </p>

                </div>

                <section id="cards-cont" className='flex flex-col items-center justify-center py-10'>
                    <LogCard />
                </section>
            </section>
        </>
    )
}
