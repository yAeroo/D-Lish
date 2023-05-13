import React from 'react'
import User from "./img/user.png";
import Back from "./img/back.png";
import Like from "./img/like.png";
import Pollo from "./img/pollo.jpg";
import Carne from "./img/carne.jpg";

export default function ViewCafetin() {
  return (

        <>
        
        {/* Navbar sujeto a cambios (sections obligatorios si se desea el navbar redondo) */}
        
        <section className="bg-white py-6 px-4">
          <div className="flex items-center bg-white">
            <img src={Back} alt="" className="w-10 h-12 mr-4" />
            <img src={User} alt="" className="w-12 h-12 ml-auto" />
          </div>
        
          <div className='flex items-center'>
            <h2 className="text-7xl font-bold mt-10 px-2">Miguel Magone</h2>
            <img src={Like} alt="" className="w-8 h-8 ml-3 mt-16" />
          </div>
        
          
        </section>
        
        <section className="bg-secu text-white mt-6 min-h-screen rounded-t-xl items-center justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold px-2 ml-6 mt-6 text-terc">● Abierto</h2>
            <img src={Like} alt="" className="w-8 h-8 mr-8 mt-7 " />
          </div>
        
          <section className="flex items-center justify-between text-white my-8 px-6">
              <button className='bg-prim rounded-md'>
                <h2 className="text-xl font-normal px-2 py-2">Desayunos</h2>
              </button>
        
              <button className='bg-prim rounded-md'>
                <h2 className="text-xl font-normal px-2 py-2">Almuerzos</h2>
              </button>
        
              <button className='bg-prim rounded-md'>
                <h2 className="text-xl font-normal px-2 py-2">Bebidas</h2>
              </button>
          </section>
        
          <section className="grid grid-cols-1 gap-8 md:grid-cols-4 md:mt-32 my-8 px-1 mt-10">
        
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img src={Pollo} className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>
                <div className="p-8 bg-prim">
                  <div className="tracking-wide text-sm text-white font-semibold">Pollo</div>
                </div>
              </div>
            </div>
        
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img src={Carne} className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>
                <div className="p-8 bg-prim">
                  <div className="tracking-wide text-sm text-white font-semibold">Carne</div>
                </div>
              </div>
            </div>
        
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img src={Pollo} className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>
                <div className="p-8 bg-prim">
                  <div className="tracking-wide text-sm text-white font-semibold">Pollo</div>
                </div>
              </div>
            </div>
        
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img src={Carne} className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>
                <div className="p-8 bg-prim">
                  <div className="tracking-wide text-sm text-white font-semibold">Carne</div>
                </div>
              </div>
            </div>
        
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img src={Pollo} className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>
                <div className="p-8 bg-prim">
                  <div className="tracking-wide text-sm text-white font-semibold">Pollo</div>
                </div>
              </div>
            </div>
        
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img src={Carne} className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>
                <div className="p-8 bg-prim">
                  <div className="tracking-wide text-sm text-white font-semibold">Carne</div>
                </div>
              </div>
            </div>
        
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img src={Pollo} className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>
                <div className="p-8 bg-prim">
                  <div className="tracking-wide text-sm text-white font-semibold">Pollo</div>
                </div>
              </div>
            </div>
        
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img src={Carne} className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>
                <div className="p-8 bg-prim">
                  <div className="tracking-wide text-sm text-white font-semibold">Carne</div>
                </div>
              </div>
            </div>
        
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img src={Pollo} className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>
                <div className="p-8 bg-prim">
                  <div className="tracking-wide text-sm text-white font-semibold">Pollo</div>
                </div>
              </div>
            </div>
        
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img src={Carne} className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>
                <div className="p-8 bg-prim">
                  <div className="tracking-wide text-sm text-white font-semibold">Carne</div>
                </div>
              </div>
            </div>
        
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img src={Pollo} className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>
                <div className="p-8 bg-prim">
                  <div className="tracking-wide text-sm text-white font-semibold">Pollo</div>
                </div>
              </div>
            </div>
        
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img src={Carne} className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>
                <div className="p-8 bg-prim">
                  <div className="tracking-wide text-sm text-white font-semibold">Carne</div>
                </div>
              </div>
            </div>
        
        
          </section>
        
        
        
        </section>
        
        
        
        
        
            
        </>
  )
}
