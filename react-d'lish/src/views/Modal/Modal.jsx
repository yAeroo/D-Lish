import React from "react";

function Modal({ setOpenModal }) {
  return (
<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img src={Carne} className="h-48 w-full object-cover md:h-full md:w-48" />
        </div>
        <div className="p-8 bg-prim">
          <div className="tracking-wide text-sm text-white font-semibold">Carne</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;