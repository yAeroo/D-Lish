import React from 'react'

function DeleteModal() {
      return (
           
<div>
<dialog id="delete_modal" className="modal">
  <form method="dialog" className="modal-box bg-white">
  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-lg text-[#ee2121] text-center">Aviso</h3>
    <p className="py-4 text-center">¿Estas seguro que quieres eliminar el producto? <br></br> Esta accion no se podra rehacer una vez hecha</p>
    <div className="modal-action justify-center">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-primary text-white bg-[#e95252] hover:bg-[#ff2727] hover:border-[#ff2727] border-[#e95252]">Eliminar</button>
    </div>
  </form>
</dialog>
</div>
    )
}

export default DeleteModal