// Hooks
import { useState, createRef, useEffect } from "react";
// Helper
import Notificacion from "../../helper/Notify";
// Context
import useOwner from "../../hooks/useOwner";
// Icon
import { PiWarningDiamondDuotone } from "react-icons/pi"
import { FaImage } from "react-icons/fa";

export default function ModalMenu() {
    const { handleClickModal, hadleClickDeleteConfirm, action, setElement, element, agregando } = useOwner();
    const [category, setSelectedCategory] = useState('');
    const [edicion, setEdicion] = useState(false);
    const [aElement, setaElement] = useState(element)
    const [error, setError] = useState(''); // <- Error 
    const { addProduct } = useOwner();

    // Se define el Toast
    const toastSuccesId = "success-noti";
    // Se instancia con referencia al ID Definido
    const toastErrorId = "error-noti";
    const NotiExito = Notificacion(
        "success",
        toastSuccesId,
        '¡Agregado con éxito  a tu menú!',
        "!bg-[#191E2B] !font-body !py-2"
    );
    const NotiError = Notificacion(
        "error",
        toastErrorId,
        'Rellena todos los campos',
        "!bg-[#191E2B] !font-body !py-2"
    );

    // Creando referencias
    const nameRef = createRef();
    const typeRef = createRef();
    const imgRef = createRef();
    // Creando States
    const categorias = {
        'mainDish': 'Almuerzo',
        'sideDish1': 'Complemento 1',
        'sideDish2': 'Complemento 2',
        'accompaniment': 'Acomapañamiento',
        'drink': 'Bebida'
    }

    // Obteniendo la categoria del producto añadido
    const setCategory = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const datos = {
            name: nameRef.current.value,
            type: typeRef.current.value,
            // img: imgRef.current.value,
        }

        if (datos.name && datos.type) {
            await addProduct(category, datos, NotiError, NotiExito);
        } else {
            NotiError()
        }
    }

    const handleClickCierre = () => {
        handleClickModal();
        setElement(null);
    }

    useEffect(() => {
        if (element) {
            setEdicion(true)
        }
    }, [])

    if (action == "deleting") {
        return (
            <div className="bg-white flex flex-col items-center gap-3 justify-center font-body" onClick={handleClickCierre}>
                <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-700">
                    ✕
                </button>
                <div className="font-bold text-[#ee2121] text-xl ">
                    <h3 className="font-black uppercase">Advertencia</h3>
                    <PiWarningDiamondDuotone className="mx-auto mt-4 text-4xl" />
                </div>
                <p className="py-1 text-center text-gray-700">¿Quieres eliminar este producto?<br /> Esto eliminará las órdenes relacionadas</p>
                <div className=" justify-center">
                    {/* if there is a button in form, it will close the modal */}
                    <button type="button" className="btn btn-primary text-white bg-[#e95252] hover:bg-[#ff2727] hover:border-[#ff2727] border-[#e95252]"
                        onClick={() => hadleClickDeleteConfirm()}
                    >
                        Eliminar
                    </button>
                </div>
            </div >
        );
    }


    return (
        <form className="bg-white text-[#222222] font-body" onSubmit={handleSubmit} >
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => handleClickCierre()}>
                ✕
            </button>
            <h3 className="font-bold text-lg pt-6">
                {edicion ? "Actualiza un producto ya existente" : "Agrega cualquier tipo de producto"}
            </h3>
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
                        defaultValue={element?.name}
                        ref={nameRef}
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
                    <FaImage
                        className="mx-auto h-12 w-12 text-gray-300"
                        fill="currentColor"
                        aria-hidden="true"
                    />
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

            <div className=" items-end grid grid-cols-1 gap-x-6">
                {/* <div className="mt-4 sm:my-4">
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
                    </div> */}

                <div className="mt-4 sm:my-4 w-full">
                    <label
                        htmlFor="edificio"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Categoria
                    </label>
                    <div className="mt-2">
                        <select
                            className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  px-1 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-terc sm:text-sm sm:leading-6  "
                            name="Category"
                            id="Category"
                            defaultValue={element ? element.type : "null"}
                            onChange={setCategory}
                            ref={typeRef}
                        >
                            <option value="null" disabled>Seleccione una opción</option>

                            {/* Opciones de categoria */}
                            {Object.keys(categorias).map((key) => (
                                <option key={key} value={key}>
                                    {categorias[key]}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* <input type="number" name="edificio" id="edificio"  className="block w-[50%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm  px-1 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-terc sm:text-sm sm:leading-6" /> */}
            </div>

            <div className="modal-action">
                {/* if there is a button in div, it will close the modal */}
                <button type="submit" className="btn btn-primary w-full text-white">
                    {edicion ? "Guardar cambios" : "Añadir al menú"}
                </button>
            </div>
        </form >
    );
}

