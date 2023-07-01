import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroImg from '../../public/img/dlishMockup3.png';
import Coffee from '../../public/img/coffee-square.jpg';
import ButtonFill from './ButtonFill';
import ButtonOutline from './ButtonOutline';


const Header = () => {
    return (
        <>
            <section className='px-4 md:px-24 py-4 bg-gradient-to-r from-[#2d024b] to-[#4c056c]'>
                <Navbar></Navbar>
            </section>
            
            <div className="hero min-h-screen bg-gradient-to-r from-[#2d024b] to-[#4c056c]">
                <div className="hero-content flex-col lg:flex-row-reverse px-10">
                    <img src={HeroImg} className="w-[25rem] rounded-lg animate-fade-left animate-duration-600 animate-ease-in-out" />
                    <div className='animate-fade-up animate-once animate-delay-[600ms] drop-shadow-md'>
                        <h1 className="md:text-7xl text-5xl font-bold text-primary drop-shadow-lg">Ordena tu comida de manera rapida y sencilla</h1>
                        <p className="md:text-2xl py-6">Cansado de filas de espera? Ingresa y ordena tu comida con nosotros.</p>
                        
                        <button className="btn btn-error mr-4 drop-shadow-lg text-zinc-50">Registrate</button>
                        <button className="btn btn-outline btn-error drop-shadow-lg ">Iniciar Sesión</button>
                    </div>
                </div>

                
            </div>
            
        

            <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 gap-8 pt-[10rem] pb-[10rem]">

                <div className="card rounded-xl lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={Coffee} className="md:w-[25rem]"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-black text-xl font-bold">Quiénes Somos?</h2>
                        <p className="text-black text-lg font-bold">PokemonBlackAndWhiteBestoGen</p>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                </div>

                <div className="card rounded-xl lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={Coffee} className="md:w-[25rem]"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-black text-xl font-bold">Misión</h2>
                        <p className="text-black text-lg font-bold">Haz clic en el botón para escuchar en la aplicación Spotiwhy.</p>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                </div>

                <div className="card rounded-xl lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={Coffee} className="md:w-[25rem]"/></figure>
                        <div className="card-body">
                        <h2 className="card-title text-black text-xl font-bold">Visión</h2>
                        <p className="text-black text-xl font-bold">Haz clic en el botón para escuchar en la aplicación Spotiwhy.</p>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                </div>
        </div>


        <Footer></Footer>

        </>
    );
};

export default Header;