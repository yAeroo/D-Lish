import React from 'react';
import Navbar from './Navbar';
import HeroImg from '../../public/img/dlishMockup3.png';
import ButtonFill from './ButtonFill';
import ButtonOutline from './ButtonOutline';


const Header = () => {
    return (
        <>
            <section className='px-4 md:px-24 py-4'>
                <Navbar></Navbar>
            </section>
            
                <div className="hero min-h-screen animate-fade-up animate-duration-400 animate-ease-in-out">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={HeroImg} className="w-[20rem] rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold text-primary">Ordena tu comida de manera rapida y sencilla</h1>
                    <p className="py-6">Cansado de filas de espera? Ingresa y ordena tu comida con nosotros.</p>
                    
                    <button className="btn btn-error mr-4">Registrate</button>
                    <button className="btn btn-outline btn-error">Iniciar Sesión</button>
                    </div>
                </div>
            </div>
            
            
        </>
    );
};

export default Header;