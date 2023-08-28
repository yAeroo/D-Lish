import React from 'react'

export default function FoodCard(props) {
    const { photo, name, cafetin, precio, categoria } = props;

    return (
        <div className="flex items-center justify-center mx-0 md:mx-1 h-[7rem] w-[10%] hover:bg-base-100 rounded-lg px-0 md:px-4 py-0 mb-1">
            <div className="flex items-center justify-start space-x-4 md:space-x-5 mt-0 w-[70%] md:w-[71%]">
                <div className="w-20 h-20 lg:w-[6rem] lg:h-[6rem]  rounded overflow-hidden">
                    <img className="w-full h-full object-cover" src={photo} />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-md lg:text-2xl font-bold text-neutral-100">
                        {name}
                    </h2>
                    <h3 className="pt-[0.01rem] lg:pt-0 text-sm lg:text-lg text-neutral-200">{cafetin}</h3>
                    <p className="pt-[0.01rem] text-[0.80rem] lg:text-lg text-neutral-200">${precio} | {categoria}</p>
                </div>
            </div>
            
            <button className="border-primary border-2 text-primary text-xs lg:text-lg px-2 py-1 rounded-md ml-3 md:ml-3 font-bold hover:bg-primary hover:text-black hover:font-bold">
                + Agregar
            </button>
        </div>
    )
}