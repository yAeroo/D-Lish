import React, { useState } from "react";
import Modal from "./Modal/Modal";

function TestModel() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="testmodel">
      <h1>Prueba el botón para abrir el modal.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default TestModel;
