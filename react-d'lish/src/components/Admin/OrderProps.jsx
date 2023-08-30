import React from 'react';
import OrderContent from './OrderContent';
import useOwner from '../../hooks/useOwner';

function OrderProps(props) {
  const { idPlatillo } = props;
  const { pedidos } = useOwner();

  return (
    <div className="flex items-center w-[95%] justify-center">
      <div className="container">
        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead className="text-white">
            <tr className="bg-secondary flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th className="p-3 text-left">Precio $</th>
              <th className="p-3 text-left">Cliente</th>
              <th className="p-3 text-left">Complemento 1</th>
              <th className="p-3 text-left">Complemento 2</th>
              <th className="p-3 text-left">Bebida</th>
              <th className="p-3 text-left">Acompañante</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>
          {/* PEDIDOS */}
          <tbody className="flex-1 sm:flex-none text-[#414141]">
            {pedidos.map((pedido, id) => {
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
            })}
          </tbody>
        </table>
      </div>
    </div>


  )
}

export default OrderProps
