
import { createRef, useEffect,useState } from "react";
import { useTranslation } from "react-i18next";
import Alert from "../../components/Alert";
// Icons
import { BiSave } from "react-icons/bi";
import { ImSpinner } from "react-icons/im";
// Helpers
import useOwner from "../../hooks/useOwner";
import clienteAxios from "../../config/axios";
import Notificacion from "../../helper/Notify";
import "react-toastify/dist/ReactToastify.css";

export default function ProfileAdmin() {
	const { t } = useTranslation();
	// Obteniendo contenidos e información de cafeteria
	const token = localStorage.getItem('AUTH_TOKEN'); const idOwner = localStorage.getItem('CAFE_ID');

	const { contenido, obtenerOwner } = useOwner(); const { cafeteria } = contenido;
	useEffect(() => {
		obtenerOwner();
	}, [])
	
	// Botón de carga
	const [saveBttn, setSaveBttn] = useState(t("actions.save-changes")); const [statusBttn, setStatusBttn] = useState(true)
	const loadBttn = () => { setSaveBttn(<ImSpinner className="loading-icon" />); setStatusBttn(true) }
	const resetLoadBttn = () => { setSaveBttn(t("actions.save-changes"));}

	// Creando referencias para datos
	const cafeteriaNameRef = createRef(); const mainPublicRef = createRef(); const contactEmailRef = createRef();
	const [errores, setErrores] = useState([]);

	const handleSubmit = async e => { // Función a ejecutar al guardar
        e.preventDefault();

        const dataPass = {
            name: cafeteriaNameRef.current.value,
            mainPublic : mainPublicRef.current.value, 
            contactEmail : contactEmailRef.current.value 
        }

        await settings(dataPass);
    }

	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event) => {
		const newValue = event.target.value;
		setInputValue(newValue);
	
		setStatusBttn(false);
	};

	const inputs = {
		cafeteriaName: document.getElementById('cafeteriaName'),
		mainPublic: document.getElementById('mainPublic'),
		contactEmail: document.getElementById('contactEmail')
	}

	const settings = async (dataPass) => {
		loadBttn();
        try {
            const { data } = await clienteAxios.post(`api/owner/${idOwner}/settings`, dataPass, {
                headers: {
                    Authorization: `Bearer ${token}` // Token obligatorio para validación de datos
                }
            });
            console.log('Exito', data);

			if (data.changes.statusChanges) {
				NotiExito();
				setErrores([]);
				data.changes.nameFlag ? ( inputs.cafeteriaName.placeholder = dataPass.name, inputs.cafeteriaName.value = '') : ''; 
				data.changes.mainPublic ? ( inputs.mainPublic.placeholder = dataPass.mainPublic, inputs.mainPublic.value = '') : '' 
				data.changes.contactEmailFlag ? ( inputs.contactEmail.placeholder = dataPass.contactEmail, inputs.contactEmail.value = '') : '' 
			}

			resetLoadBttn();
        } catch (error) {
            console.error('Error', error);
			setSaveBttn(t("actions.save-changes"));
            let Errores = Object.values(error?.response?.data?.errors);
            setErrores(Errores);

			NotiError();

			error.response.data.changes.nameFlag ? inputs.cafeteriaName.value = '' : '' 
			error.response.data.changes.mainPublic ? inputs.mainPublic.value = '' : ''
			error.response.data.changes.contactEmail ? inputs.contactEmail.value = '' : '' 

        }
    }

	//Creando notificaciones de exito y error
	const toastSuccesId = "success-noti";
    // Se instancia con referencia al ID Definido
    const NotiExito = Notificacion(
        "success",
        toastSuccesId,
        t('info.notis.success-save'),
        "!bg-[#191E2B] !font-body !py-2"
    );

    const toastErrorId = "error-noti";
    const NotiError = Notificacion(
        "error",
        toastErrorId,
        t("info.errors.general-error"),
        "!bg-[#191E2B] !font-body !py-2"
    );

	return (
		<>
			<div id="main-container" className="lg:ml-[10rem] sm:ml-[5rem] ml-[2rem] h-[100%] animate-fade animate-duration-500">
				<div className='w-[90%] mb-14'>
						{/* Título de la sección */}
						<div className="flex flex-col justify-center md:justify-normal py-10">
							<p className='text-success font-title font-semibold text-2xl md:text-3xl transition-all my-5'>
								Configuración de cafetín
							</p>
							<p className="text-gray-600 text-base sm:text-xl text-left">
								Modifica la visualización de tu cafetería
							</p>
						</div>
					<form onSubmit={handleSubmit} noValidate>
						<div id="errores" className="px-12 mb-7">
							{/* Impresión de errores */}
							{errores ? errores.map((error, i) => <Alert key={i}>{error}</Alert>) : ''}
						</div>

						<div id="grid-cont" className="grid md:grid-cols-2 md:grid-rows-2 gap-y-10">
							{/* Nombre de la cafeteria */}
							<div className="form-control w-full inline-block text-center">
								<label className="label">
									<span className="label-text text-[17px] text-success font-title font-bold ml-4">Nombre de la cafetería</span>
								</label>
								<input type="text" placeholder={cafeteria?.name} id="cafeteriaName" ref={cafeteriaNameRef}
									className="input w-full bg-[#eaecef] text-[#2e2e2f] max-w-md" onChange={handleInputChange} />
							</div>

							{/* Público principal */}
							<div className="form-control w-full inline-block text-center">
								<label className="label">
									<span className="label-text text-[17px] text-success font-title font-bold ml-4">Público principal</span>
								</label>
								<input type="text" placeholder={cafeteria?.mainPublic} id="mainPublic" ref={mainPublicRef}
									className="input w-full bg-[#eaecef] text-[#2e2e2f] max-w-md" onChange={handleInputChange} />
							</div>

							{/* Correo de contacto */}
							<div className="form-control w-full inline-block text-center">
								<label className="label">
									<span className="label-text text-[17px] text-success font-title font-bold ml-4">Correo de contacto</span>
								</label>
								<input type="email" placeholder={cafeteria?.contactEmail} id="contactEmail" ref={contactEmailRef}
									className="input w-full bg-[#eaecef] text-[#2e2e2f] max-w-md" onChange={handleInputChange} />
							</div>

							{/* Nombre de la cafeteria */}
							<div className="form-control w-full max-w-xs">
								<label className="label">
									<span className="label-text text-[17px] text-success font-title font-bold ml-4">Foto de portada</span>
								</label>
							</div>
						</div>

						<div className="flex justify-center h-full mt-10 fa-custom animate-fade">
                            <button type="submit" className="disabled:cursor-not-allowed  disabled:grayscale" disabled={statusBttn} >
                                <div className="flex bg-secondary rounded-full p-2 md:px-5 ">
                                    <span> <BiSave size={"25"} color={"white"} /> </span>
                                    <span className="mx-2 profile-bttn-text !block">
                                        {saveBttn}
                                    </span>
                                </div>
                            </button>
                        </div>
					</form>
				</div>
			</div>
		</>
	)
}
