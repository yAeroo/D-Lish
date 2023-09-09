import React from 'react'

export default function CafeteriaCardSearch({ id, name, photo }) {
    return (
        <div className="bg-black/50  rounded-lg
        
        ">
            <img className="rounded-lg w-full"
                src={`../../../assets/cafeterias/${photo}`} alt="ComidaPIC" />

            <h2 className='text-center pt-2 font-bold'>
                {name}
            </h2>
        </div>
    )
}
