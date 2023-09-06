import React, { useEffect } from 'react';
import OrderContent from './OrderContent';
import useOwner from '../../hooks/useOwner';
import OrderHeader from './orderHeader';

function OrderProps(props) {
  const { idPlatillo } = props;
  const { pedidos, obtenerPedidos } = useOwner();

  useEffect(() => {
    obtenerPedidos();
  }, []);

  return (
    <div className="flex items-center w-[95%] justify-center text-lg">
      <div className="container">
        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead className="text-white">
            {pedidos ? pedidos.map((pedido, id) => {
              if (pedido.mainDish.id == idPlatillo) {
                return <OrderHeader key={pedido.id + "-main"} />
              }
            }) : ""}
          </thead>
          {/* PEDIDOS */}
          <tbody className="flex-1 sm:flex-none text-[#1f1f1f]  font-semibold">
            {pedidos ? pedidos.map((pedido, id) => {
              // Encabezado de la tabla para cada producto
              if (pedido.mainDish.id == idPlatillo) {
                return <OrderContent key={id}
                  price={pedido.price}
                  nameUser={pedido.user.name}
                  content1={pedido.sideDish1.name}
                  content2={pedido.sideDish2.name}
                  drink={pedido.drink?.name}
                  accompaniment={pedido.accompaniment?.name}
                />
              }
            }) : ""}
          </tbody>
        </table>
      </div>
    </div>


  )
}

export default OrderProps
