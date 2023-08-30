function ProductHeader() {

  return (
    <tr className="bg-terc flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
      <th className="p-3 text-left">Id</th>
      <th className="p-3 text-left">Nombre</th>
      <th className="p-3 text-left h-[242px] sm:h-[49px]">
        Imagen
      </th>
      {/* <th className="p-3 text-left" width="110px">
        Precio
      </th> */}
      <th className="p-3 text-left" width="110px">
        Acciones
      </th>
    </tr>
  )
}

export default ProductHeader