import React from "react";

function Modal({ setOpenModal }) {
  return (
    <div>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
            <div className="md:shrink-0">
            </div>
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-[#050505] font-semibold">Almuerzo | $5.50 totis </div>
                    <p className="mt-2 text-slate-500">Deléitate con un auténtico almuerzo italiano. Nuestro menú incluye una deliciosa pasta al dente con salsa marinara casera, acompañada de albóndigas jugosas. Disfruta de una ensalada caprese fresca con tomates, mozzarella y albahaca. Para terminar, te ofrecemos un tiramisú casero que te transportará directamente a Italia.</p>
                    <button type="button" className="bg-[#E95F4A] text-white p-2 rounded-lg  hover:bg-white hover:text-black  hover:border-gray-300 ">Información</button>
            </div>
        </div>
    </div>
    <br />
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
            <div className="md:shrink-0">
            </div>
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-[#050505] font-semibold">Desayuno |  $2.50 totis</div>
                    <p className="mt-2 text-slate-500">Permítete un desayuno al estilo americano. Nuestro menú incluye huevos fritos o revueltos, tocino crujiente y salchichas jugosas. Acompáñalos con hash browns dorados y tostadas de pan de molde. También ofrecemos una variedad de opciones de panqueques o waffles con sirope de arce. Disfruta de una taza de café americano o un vaso de leche fría para completar tu desayuno.</p>
                    <button type="button" className="bg-[#E95F4A] text-white p-2 rounded-lg  hover:bg-white hover:text-black  hover:border-gray-300 ">Información</button>
            </div>
        </div>
    </div>
    </div>
    
  );
}

export default Modal;