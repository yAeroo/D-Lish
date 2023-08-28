import React from "react";

function ProductModal(props) {
  return (
    <dialog id={props.ModalId} className="modal">
      <form method="dialog" className="modal-box bg-white text-[#222222]">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <h3 className="font-bold text-lg">{props.ModalType}</h3>

        <div className="my-4">
          <label
            htmlFor="productoName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nombre del producto
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="producto"
              id="producto"
              placeholder="Pupusas"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  px-1 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-terc sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* CUADRO DE IMAGEN */}
        <label
          htmlFor="productoImagen"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Imagen del producto
        </label>

        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clipRule="evenodd"
              />
            </svg>
            <div className="mt-4 flex text-sm leading-6 text-gray-600 flex-col">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-terc focus-within:outline-none focus-within:ring-2 focus-within:ring-terc focus-within:ring-offset-2 hover:text-terc"
              >
                <span>Sube tu imagen</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1 hidden sm:block">o arrastra o sueltala aqui</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF de alrededor de 10MB
            </p>
          </div>
        </div>

        <div className=" items-end grid grid-cols-1 gap-x-6 sm:grid-cols-2">
          <div className="mt-4 sm:my-4">
            <label
              htmlFor="edificio"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Precio del producto
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="edificio"
                id="edificio"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  px-1 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-terc sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-4 sm:my-4">
            <label
              htmlFor="edificio"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Categoria
            </label>
            <div className="mt-2">
              <select
                className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  px-1 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-terc sm:text-sm sm:leading-6 "
                name="Category"
                id="Category"
              >
                <option>Almuerzo/Desayuno</option>
                <option>Bebida</option>
                <option>Acompañamiento</option>
              </select>
            </div>
          </div>

          {/* <input type="number" name="edificio" id="edificio"  className="block w-[50%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm  px-1 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-terc sm:text-sm sm:leading-6" /> */}
        </div>

        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-primary">{props.ModalTypebtn}</button>
        </div>
      </form>
    </dialog>
  );
}

export default ProductModal;
