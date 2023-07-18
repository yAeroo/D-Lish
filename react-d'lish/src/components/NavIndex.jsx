import React from 'react'

export default function NavIndex() {
  return (
    <>
        <nav className='flex justify-between rounded-2xl drop-shadow-md px-9 py-5 list-none '>
            
            <div className='flex items-center'><IoChevronBack className="w-10 h-12 mr-5 font-bold"/> 
            <h1 className="title text-[1.5rem] hidden md:block">Regresar</h1>
            <h1 className="title hidden">Regresar</h1> </div>
            
            <FaUserCircle className="w-12 h-12 ml-auto"/>
            
        </nav>

      
    </>
  )
}
