import React from 'react'

export default function FoodCard(props) {
    const { photo, name, cafetin, precio, categoria } = props;

    return (
        <div className="flex items-center justify-center mx-0 h-[7rem] w-100 hover:bg-base-100 rounded-lg px-0 mb-1">
            <div className="flex items-center justify-start space-x-4 md:space-x-5 mt-0 w-[70%] md:w-[71%]">
                <div className="w-10 h-10 hidden lg:block rounded overflow-hidden">
                    <img className="w-full h-full object-cover" src={photo} />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-md font-bold text-neutral-100">
                        {name}
                    </h2>
                    <h3 className="pt-[0.01rem] text-neutral-200">{cafetin}</h3>
                    <p className="pt-[0.01rem] text-[0.80rem] text-neutral-200">${precio} | {categoria}</p>
                </div>
            </div>
        </div>
    )
}