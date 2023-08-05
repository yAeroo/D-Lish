import React from 'react'


function DeliveryModeAdmin() {
  return (
    <div className='lg:ml-[7rem] my-[-65px] lg:my-[0px] h-[100%] profile-banner min-h-screen animate-fade animate-duration-500'>

        {/* Texto de arriba */}
        <section className='text-center flex h-[inherit] w-full justify-center items-center flex-col'>
            <div className='p-3 pb-10 text-xl'>
                <div className="px-6 py-5 font-semibold border-b text-secondary border-gray-100">Confirme su Orden</div>
            </div>

          {/* Imagen  QR */}
          <div className="  shadow-xl">
            <figure className=' ml-12 w-3/4 h-3/4  md:w-72 md:mr-11  md:h-72 '>
                <img src="../src/assets/img/qrpreview.png" alt="QR" />
            </figure>
          </div>
        </section>

    </div>
  )
}

export default DeliveryModeAdmin
