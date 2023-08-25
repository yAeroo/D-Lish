import { useEffect } from 'react';
import useOrders from '../hooks/useOrders';

function FoodCardDish(props) {
    const { photo, name, cafetin, chekeable, lectura, id } = props;
    const { pedido, handleAgregarPedido } = useOrders();

    // useEffect(() => {
    //     // Detecta si ya esta dentro de nuestro pedido
    //     if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
    //         const productoEdicion = pedido.filter(
    //             (pedidoState) => pedidoState.id === producto.id
    //         )[0];

    //         setCantidad(productoEdicion.cantidad);
    //         setEdicion(true);
    //     }
    // }, [pedido]);

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
                    <h3 className="pt-[0.01rem] text-sm text-neutral-200">{cafetin}</h3>
                </div>
            </div>
            <label className=" text-primary text-xs px-2 py-1 rounded-md ml-5">
                <div className="form-control">
                    <input
                        type="checkbox"
                        className="checkbox
                     checkbox-success"
                        checked={chekeable}
                        readOnly={lectura}
                    />
                </div>
            </label>
        </div>
    )
}

export default FoodCardDish
