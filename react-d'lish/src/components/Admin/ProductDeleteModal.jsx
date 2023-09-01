import useOwner from "../../hooks/useOwner";

function DeleteModal() {
  const { setElimino } = useOwner();

  function confirmDelete() {
    setElimino(true);
  }

  // Función para cancelar modal
  const handleCancel = () => {
    window.delete_modal.close();
  };

  return (
    <div
      onClick={handleCancel} // Cierra el modal al hacer clic fuera de él
    >
      <dialog id="delete_modal" className="modal">
        <form method="dialog" className="modal-box bg-white">
          <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-600" onClick={handleCancel}>✕</button>
          <h3 className="font-bold text-lg text-[#ee2121] text-center">Aviso</h3>
          <p className="py-4 text-center text-gray-700">¿Estas seguro que quieres eliminar el producto? <br></br> Esta accion no se podra rehacer una vez hecha</p>
          <div className="modal-action justify-center">
            {/* if there is a button in form, it will close the modal */}
            <button type="button" className="btn btn-primary text-white bg-[#e95252] hover:bg-[#ff2727] hover:border-[#ff2727] border-[#e95252]" onClick={confirmDelete}>
              Eliminar
            </button>
          </div>
        </form>
      </dialog>
    </div>
  )
}

export default DeleteModal