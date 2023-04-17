import React from 'react';
import Navbar from './Navbar';
import HeroImg from '../../public/img/dlishMockup3.png';
import ButtonFill from './ButtonFill';
import ButtonOutline from './ButtonOutline';

const Header = () => {
  return ( 
    <>
        <section className='bg-gradient-to-r from-secu to-violet-900 bg-Hero bg-cover bg-center h-screen py-4 md:px-24 px-4'>
        <Navbar />
        
            <div className='flex md:flex-row flex-col gap-5 pt-20'>
                <div className='flex-1'>
                    <h1 className='text-base md:text-5xl text-4xl font-semibold tracking-wide md:leading-tight 
                    leading-snug'>Ordena tu comida de manera rápida y sencilla.</h1>
                    <p className='text-terc font-semibold md:w-2/3 md:py-4 py-2 leading-relaxed'>
                        ¿Cansado de las largas filas de espera? Ordena y recoge tu comida con nosotros.
                    </p>
                    <br />
                    <div className='flex md:gap-4 gap-2 flex-wrap'>
                        <ButtonFill>Registrate</ButtonFill>
                        <ButtonOutline/>
                    </div>
                </div>
                <div className='flex-1 flex justify-center py-1'>
                    <img src={HeroImg} alt="hero" className='h-3/5'/>
                </div>
            </div>
        </section>
    </>
  );
};

export default Header;