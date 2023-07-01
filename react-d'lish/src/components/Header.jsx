import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroImg from '../../public/img/dlishMockup3.png';
import Coffee from '../../public/img/coffee.jpg';
import Almuerzos from '../../public/img/Almuerzos.png';
import Food from '../../public/img/food.jpeg';
import ButtonFill from './ButtonFill';
import ButtonOutline from './ButtonOutline';


const Header = () => {
    return (
        <>
            <section className='px-4 md:px-24 py-4 bg-gradient-to-r from-[#2d024b] to-[#4c056c]'>
                <div className='animate-fade-up animate-once animate-delay-[1300ms]'><Navbar></Navbar></div>
            </section>
            
            <div className="hero min-h-screen bg-gradient-to-r from-[#2d024b] to-[#4c056c]">
                <div className="hero-content flex-col lg:flex-row-reverse px-10">
                    <img src={HeroImg} className="w-[34rem] md:-mt-[8rem] md:-mr-[8rem] rounded-lg animate-fade-left animate-duration-600 animate-ease-in-out" />
                    <div className='md:-mt-[16rem] md:-ml-[12rem] animate-fade-up animate-once animate-delay-[600ms] drop-shadow-md'>
                        <h1 className="md:text-7xl text-5xl font-bold text-primary drop-shadow-lg">Ordena tu comida de manera rapida y sencilla</h1>
                        <p className="md:text-2xl py-6">Cansado de filas de espera? Ingresa y ordena tu comida con nosotros.</p>
                        
                        <button className="btn btn-error mr-4 drop-shadow-lg text-zinc-50">Registrate</button>
                        <button className="btn btn-outline btn-error drop-shadow-lg ">Iniciar Sesión</button>
                    </div>
                </div>

                
            </div>
            
        
        <div className='flex flex-col items-center justify-center min-h-screen  gap-8 my-[10rem] md:mx-[12rem]'>

        <div className="card lg:card-side bg-secondary shadow-xl w-[100%] items-center text-justify">
                <figure className='bg-secondary'><img src={Coffee} className='w-[26rem] md:display visible'/></figure>
                <div className="card-body w-[27rem] bg-secondary">
                    <h2 className="card-title md:text-5xl text-3xl font-bold text-primary drop-shadow-lg pb-[1rem] md:pt-[1rem]">Quiénes Somos?</h2>
                    <p className="text-white text-lg font-bold md:text-2xl pr-[1rem]">En Dlish, nos dedicamos a revolucionar la forma en que los estudiantes acceden a los alimentos en las cafeterías escolares. Nos hemos propuesto eliminar las largas filas y el tiempo desperdiciado en esperar para realizar un pedido. Somos una aplicación creada con pasión y compromiso para brindar una experiencia de compra conveniente y eficiente a los estudiantes.</p>
                    
                </div>
            </div>

            <div className="card lg:card-side bg-error shadow-xl w-[100%] items-center text-justify">
                <figure className='bg-error'><img src={Almuerzos} className='w-[26rem]'/></figure>
                <div className="card-body w-[27rem] bg-error">
                    <h2 className="card-title md:text-5xl text-3xl font-bold text-warning drop-shadow-lg pb-[1rem]">Misión</h2>
                    <p className="text-white text-lg font-bold md:text-2xl pr-[1rem]">Nuestra misión en Dlish es simplificar la vida estudiantil al proporcionar un sistema de pedidos en línea que permita a los estudiantes realizar sus compras de alimentos de manera rápida y sencilla. Nos esforzamos por ofrecer un servicio ágil y eficiente que reduzca el tiempo de espera y brinde una experiencia sin complicaciones, permitiendo a los estudiantes disfrutar de más tiempo libre y evitar las largas filas en las cafeterías escolares.</p>
                    
                </div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl w-[100%] items-center text-justify">
                <figure className='bg-primary'><img src={Food} className='w-[26rem]'/></figure>
                <div className="card-body w-[27rem] bg-primary">
                    <h2 className="card-title md:text-5xl text-3xl font-bold text-error drop-shadow-lg pb-[1rem] md:pt-[1rem]">Visión</h2>
                    <p className="text-white text-lg font-bold md:text-2xl pr-[1rem]">Nuestra visión en Dlish es convertirnos en la plataforma líder a nivel escolar para realizar pedidos en línea, transformando la forma en que los estudiantes acceden a los alimentos en sus colegios. Nos visualizamos como la solución preferida por estudiantes y personal educativo, al ofrecer un servicio confiable, seguro y conveniente que se adapte a las necesidades de la comunidad escolar.</p>
                    
                </div>
            </div>

        </div>


        <Footer></Footer>

        </>
    );
};

export default Header;