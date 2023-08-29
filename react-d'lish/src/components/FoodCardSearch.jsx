import React from 'react'

export default function FoodCard(props) {
    const { photo, name, cafetin, precio, categoria } = props; // Props usados para los platillos

    return (
        <div className="flex items-center z-50 justify-center mx-0 h-[7rem] w-100 hover:bg-neutral rounded-lg px-0 mb-1">
            <div className="flex items-center justify-start space-x-4 md:space-x-4 mt-0 ml-4 w-[100%] md:w-[100%]">
                <div className="w-[4rem] h-[4rem] lg:w-20 lg:h-20 rounded overflow-hidden">
                    <img className="w-full h-full object-cover" src={photo} />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-md lg:text-lg font-bold text-neutral-100">
                        {name}
                    </h2>
                    <h3 className="pt-[0.01rem] text-neutral-200">{cafetin}</h3>
                    <p className="pt-[0.01rem] text-[0.80rem] text-neutral-200">${precio} | {categoria}</p>
                </div>
            </div>
        </div>
    )
}