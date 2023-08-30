import { useEffect, useState } from 'react';
import useOrders from '../hooks/useOrders';

function FoodCardDish(props) {
    const { id, name, type, photo, principal } = props;
    // Funciones para agregar a la orden
    const { orden, handleAgregarOrden, comprobarOrdenCompleta } = useOrders();

    const handleCheckboxClick = (id, tipo) => {
        handleAgregarOrden(id, tipo);
        comprobarOrdenCompleta(orden);
    };

    return (
        <div className="flex items-center justify-center mx-1 h-[7rem] w-[98%] hover:bg-base-100 rounded-lg px-5 py-0 mb-1">
            <div className="flex items-center justify-start space-x-6 mt-0 w-[80%]">
                <div className="w-20 h-20 rounded overflow-hidden">
                    <img className="w-full h-full object-cover" src={photo} />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-md font-bold text-neutral-100">
                        {name}
                    </h2>
                </div>
            </div>
            <label className=" text-primary text-xs px-2 py-1 rounded-md ml-5">
                <div className="form-control">
                    {principal ?
                        <input type="radio" className="checkbox checkbox-success"
                            checked readOnly
                        />
                        :
                        <input type="radio" className="checkbox checkbox-success"
                            name={type}
                            onChange={() => { handleCheckboxClick(id, type) }}
                        />
                    }
                </div>
            </label >
        </div >
    )
}

export default FoodCardDish
