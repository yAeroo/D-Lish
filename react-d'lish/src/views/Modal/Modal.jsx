import React from "react";

function Modal({ setOpenModal }) {
  return (
    <div>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
            <div className="md:shrink-0">
            </div>
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-[#050505] font-semibold">Almuerzo</div>
                    <p className="mt-2 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni voluptate architecto nesciunt quo praesentium fuga molestias sint, et consectetur quod accusamus cumque harum placeat rem quia at, distinctio mollitia reprehenderit!</p>
                    <button type="button" className="bg-[#E95F4A] text-white p-2 rounded-lg  hover:bg-white hover:text-black  hover:border-gray-300 ">Información</button>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Modal;