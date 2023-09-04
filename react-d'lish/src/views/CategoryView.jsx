import React from 'react'

//Componentes
import NavCafetin from "../components/Nav/NavCafetin";
import NavMobileIndex from "../components/Nav/NavMobileIndex";

export default function CategoryView() {
  return (
    <>
    <NavCafetin />
    <NavMobileIndex />

    <section className="flex justify-start animate-fade-left animate-once">
    <h1 className="text-4xl font-bold py-2 pr-[10rem] pl-6 mt-7">
        Desayunos
    </h1>
    </section> 
    </>
    
  )
}
