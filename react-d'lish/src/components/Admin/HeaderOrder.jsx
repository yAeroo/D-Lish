import React from 'react'

function HeaderOrder(props) {
  const { platillo } = props;
  return (
    <>
      {/* Mensaje de Arriba */}
      <div className="flex items-center justify-between py-7 px-10 ">
        <div>
          <h1 className="text-4xl font-semibold leading-relaxed text-primary">{platillo} -</h1>
          <p className="text-sm font-medium text-gray-800">
            Platillos a preparar
          </p>
        </div>
      </div>
    </>
  )
}

export default HeaderOrder
