import React from 'react'

export default function OrderHeader() {
    return (
        <tr className="bg-terc flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
            <th className="border p-3 text-left">Precio $</th>
            <th className="border p-3 text-left">Cliente</th>
            <th className="border p-3 text-left">Complemento 1</th>
            <th className="border p-3 text-left">Complemento 2</th>
            <th className="border p-3 text-left">Bebida</th>
            <th className="border p-3 text-left">Acompañante</th>
        </tr>
    )
}
