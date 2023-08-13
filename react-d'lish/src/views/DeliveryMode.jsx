import React from 'react'
import NavCafetin from '../components/Nav/NavCafetin'


function DeliveryMode() {
  return (
    <>
      <NavCafetin></NavCafetin>
      <div className=' profile-banner min-h-screen animate-fade animate-duration-500'>

        {/* Texto de arriba */}
        <section className='text-center flex  w-full justify-center  items-center flex-col'>
          <div className='p-3 pb-10 text-xl'>
            <div className="px-6 py-5 font-bold text-3xl md:text-4xl lg:text-4xl xl:text-5xl border-b text-secondary border-gray-100">Este es su QR</div>
          </div>

          {/* Imagen  QR */}
          <div className=" ">
            <figure className=' ml-12 w-3/4 h-3/4  md:w-72 md:mr-11  md:h-72 '>
              <img src="../src/assets/img/qrpreview.png" alt="QR" />
            </figure>
          </div>
        </section>

      </div>
    </>
  )
}

export default DeliveryMode
