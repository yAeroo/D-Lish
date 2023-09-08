// Hooks
import { useState, createRef, useEffect } from "react";
// Helper
import Notificacion from "../../helper/Notify";
// Context
import useOwner from "../../hooks/useOwner";
// Icon
import { PiWarningDiamondDuotone } from "react-icons/pi"
import { FaImage } from "react-icons/fa";
import { useTranslation } from "react-i18next";
// Componente
import AdminImgFunction from "./AdminImgFunction"

export default function ModalMenu() {
    const { t } = useTranslation();

    const { handleClickModal, hadleClickDeleteConfirm, action, setElement, element, hadleClickEdit } = useOwner();
    const [category, setSelectedCategory] = useState('');
    const [edicion, setEdicion] = useState(false);
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
    const nameRef = createRef(); const typeRef = createRef(); const [formImg, setFormImg] = useState(null);

    const getImg = (newImg) => {
        setFormImg(newImg);
    }

    // Creando States
    const categorias = {
        'mainDish': 'Almuerzo',
        'sideDish1': 'Complemento 1',
        'sideDish2': 'Complemento 2',
        'accompaniment': 'Acompañamiento',
        'drink': 'Bebida'
    }

    // Obteniendo la categoria del producto añadido
    const setCategory = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSubmitAgregar = async e => {
        e.preventDefault();
        const datos = {
            name: nameRef.current.value,
            type: typeRef.current.value,
            img: formImg
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

    const handleSubmitEditar = e => {
        e.preventDefault();
        const datos = {
            nameNew: nameRef.current.value,
            typeNew: typeRef.current.value,
            imgNew: formImg
        }

        hadleClickEdit(datos, NotiError, NotiExito)
    }

    if (action == "deleting") {
        return (
            <div className="bg-white flex flex-col items-center gap-3 justify-center font-body" onClick={handleClickCierre}>
                <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-700">
                    ✕
                </button>
                <div className="font-bold text-[#ee2121] text-xl ">
                    <h3 className="font-black uppercase">{t("admin.warning-title")}</h3>
                    <PiWarningDiamondDuotone className="mx-auto mt-4 text-4xl" />
                </div>
                <p className="py-1 text-center text-gray-700">{t("admin.warning-description")}<br /> {t("admin.warning-description-2")}</p>
                <div className=" justify-center">
                    {/* if there is a button in form, it will close the modal */}
                    <button type="button" className="btn btn-primary text-white bg-[#e95252] hover:bg-[#ff2727] hover:border-[#ff2727] border-[#e95252]"
                        onClick={() => hadleClickDeleteConfirm()}
                    >
                        {t("admin.warning-btn")}
                    </button>
                </div>
            </div >
        );
    }


    return (
        <form className="bg-white text-[#222222] font-body" encType="multipart/form-data" onSubmit={edicion ? handleSubmitEditar : handleSubmitAgregar}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => handleClickCierre()}>
                ✕
            </button>
            <h3 className="font-bold text-lg pt-6">
                {edicion ? t("admin.modal-title-update") : t("admin.modal-title-add")}
            </h3>
            <div className="my-4">
                <label
                    htmlFor="productoName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                   {t("admin.modal-name")}
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
                {t("admin.modal-img")}
            </label>

            <AdminImgFunction sendImg={getImg} />

            <div className=" items-end grid grid-cols-1 gap-x-6">

                <div className="mt-4 sm:my-4 w-full">
                    <label
                        htmlFor="."
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        {t("admin.modal-category")}
                    </label>
                    <div className="mt-2">
                        <select
                            className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  px-1 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-terc sm:text-sm sm:leading-6  "
                            name="Category"
                            id="Category"
                            disabled={edicion}
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
                    {edicion ? t("actions.save-changes") : t("admin.add-menu")}
                </button>
            </div>
        </form >
    );
}

