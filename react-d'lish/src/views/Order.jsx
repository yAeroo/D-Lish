import React from 'react'
// Habilitando archivo para router link
import { Link } from "react-router-dom";

function Order() {
  return (
    <div> 
      <section className='px-4 md:px24 py-4'> 
      <h1>Oigan Pibes aca ira la pagina de Ordenes 
        Link para ir a "Dish👴🏻"<Link className='grid place-items-center' to="/dish"> Aca we</Link></h1>
        </section>     

    </div>
  )
}

export default Order
