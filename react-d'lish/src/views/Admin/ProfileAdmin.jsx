
import { createRef, useEffect,useState } from "react";
import { useTranslation } from "react-i18next";
import Alert from "../../components/Alert";
// Icons
import { BiSave, BiSolidError } from "react-icons/bi";
import { ImSpinner } from "react-icons/im";
import { PiImageBold } from "react-icons/pi";
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
	
	// Botón de carga ======
	const [saveBttn, setSaveBttn] = useState(t("actions.save-changes")); const [statusBttn, setStatusBttn] = useState(true)
	const loadBttn = () => { setSaveBttn(<ImSpinner className="loading-icon" />); setStatusBttn(true) }
	const resetLoadBttn = () => { setSaveBttn(t("actions.save-changes"));}

	// Subida de imagen =====
	const [file, setFile] = useState(null); const [filename, setFilename] = useState(''); 
	const [isFileSelected, setIsFileSelected] = useState(false); const [error, setError] = useState('');

    // Extensiones de imagenes permitidas
	const allowedImageTypes = ['image/jpeg', 'image/png'];

    const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		if (selectedFile) { 
			if (allowedImageTypes.includes(selectedFile.type)) {  
				setFile(selectedFile); 
				setFilename(selectedFile.name); 
				setIsFileSelected(true); 
				setError('');
				setStatusBttn(false);
			} else { 
				setError(t("info.errors.incompatible-file")); 
			}
		}
	};

	const resetState = () => {
		setTimeout(() => { 
			setFile(null); // Vacía el valor de File
			setFilename(''); // Vacia Const. fileName
			setIsFileSelected(false); // Reinicia la bandera isFileSelected
			setError(''); // Limpia el error
			const fileInput = document.getElementById('file-input');
			if (fileInput) {
				fileInput.value = '';
			}
		}, 500); // Con un retraso de 5 segundos
	};

    useEffect(() => {
		const hideText = document.getElementById('original-text');
		const infoArea = document.getElementById('file-upload-filename');
		if (isFileSelected) {
			hideText.classList.add('hidden');
			infoArea.classList.remove('hidden');
		} else {
			hideText.classList.remove('hidden');
			infoArea.classList.add('hidden');
		}
	}, [isFileSelected]);

	// Subida de datos =====
	// Creando referencias para datos
	const cafeteriaNameRef = createRef(); const mainPublicRef = createRef(); const contactEmailRef = createRef(); const imgWallRef = createRef();
	const [errores, setErrores] = useState([]);
	
	const inputs = {
		cafeteriaName: document.getElementById('cafeteriaName'),
		mainPublic: document.getElementById('mainPublic'),
		contactEmail: document.getElementById('contactEmail')
	}

	// Habilitando botón de guardar
	const handleInputChange = (event) => { setStatusBttn(false); };

	const handleSubmit = async e => { // Función a ejecutar al guardar
        e.preventDefault();

        const dataPass = {
            name: cafeteriaNameRef.current.value,
            mainPublic : mainPublicRef.current.value, 
            contactEmail : contactEmailRef.current.value,
			img_wall: imgWallRef.current.files[0]
        }

        await settings(dataPass);
    }

	const settings = async (dataPass) => {
		loadBttn();
        try {
            const { data } = await clienteAxios.post(`api/owner/${idOwner}/settings`, dataPass, {
                headers: {
                    Authorization: `Bearer ${token}`, // Token obligatorio para validación de datos
					'Content-Type': 'multipart/form-data',
                }
            });
            console.log('Exito', data);

			if (data.changes.statusChanges) {
				NotiExito();
				setErrores([]);
				data.changes.nameFlag ? ( inputs.cafeteriaName.placeholder = dataPass.name, inputs.cafeteriaName.value = '') : ''; 
				data.changes.mainPublic ? ( inputs.mainPublic.placeholder = dataPass.mainPublic, inputs.mainPublic.value = '') : '' 
				data.changes.contactEmailFlag ? ( inputs.contactEmail.placeholder = dataPass.contactEmail, inputs.contactEmail.value = '') : ''
				data.changes.imgWallFlag ? resetState() : ''
			}

			resetLoadBttn();
        } catch (error) {
			setErrores([]); // Elimina los errores viejos
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

	// Notificaciones ====
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
								{t("admin.cafe-conf")}
							</p>
							<p className="text-gray-600 text-base sm:text-xl text-left">
								{t("admin.cafe-conf-description")}
							</p>
						</div>
					<form onSubmit={handleSubmit} noValidate encType="multipart/form-data">
						<div id="errores" className="px-12 mb-7">
							{/* Impresión de errores */}
							{errores ? errores.map((error, i) => <Alert key={i}>{error}</Alert>) : ''}
						</div>

						<div id="grid-cont" className="grid md:grid-cols-2 md:grid-rows-1 gap-y-4 gap-x-2">
							{/* Nombre de la cafeteria */}
							<div className="form-control w-full inline-block md:text-center">
								<label className="label">
									<span className="label-text text-[17px] text-success font-title font-bold ml-4">{t("admin.cafe-name")}</span>
								</label>
								<input type="text" placeholder={cafeteria?.name} id="cafeteriaName" ref={cafeteriaNameRef}
									className="input bg-[#eaecef] text-[#2e2e2f] w-full md:max-w-md" onChange={handleInputChange} />
							</div>

							{/* Público principal */}
							<div className="form-control w-full inline-block md:text-center">
								<label className="label">
									<span className="label-text text-[17px] text-success font-title font-bold ml-4">{t("admin.main-public")}</span>
								</label>
								<input type="text" placeholder={cafeteria?.mainPublic} id="mainPublic" ref={mainPublicRef}
									className="input bg-[#eaecef] text-[#2e2e2f] w-full md:max-w-md" onChange={handleInputChange} />
							</div>

							{/* Correo de contacto */}
							<div className="form-control w-full md:col-span-2 md:items-center">
								<div className="center">
								<label className="label">
									<span className="label-text text-[17px] text-success font-title font-bold ml-4">{t("admin.contac-email")}</span>
								</label>
								<input type="email" placeholder={cafeteria?.contactEmail} id="contactEmail" ref={contactEmailRef}
									className="input bg-[#eaecef] text-[#2e2e2f] w-full md:min-w-[28rem] md:max-w-md" onChange={handleInputChange} />
								</div>
							</div>

							{/* Portada de la cafeteria */}
							<div className="form-control w-full md:col-span-2 items-center">
								<label className="label">
									<span className="label-text text-[17px] text-success font-title font-bold ml-4">{t("admin.cafe-coverpage-title")}</span>
								</label>

								<div className="font-title text-base text-center">
									<h3 className="font-black text-gray-600">{t("admin.cafe-coverpage-desc")}</h3>
								</div>

								{/* Input file */}
								<label htmlFor="image" id="div-file" className="text-gray-600 w-10/12 sm:w-7/12 md:w-1/2 px-5 py-12 my-5 cursor-pointer flex justify-center items-center rounded-lg border-dashed border-2 !bg-[#e6e6e6] border-[#4c4c4c]">    
									<input type="file" name="img_wall" accept="image/*" id="image" onChange={handleFileChange} ref={imgWallRef} />
									<div className="flex justify-center flex-col items-center w-full">
										<div id="img-cont" className='h-24 w-44 flex items-center justify-center mb-3'>
											{/* Imagen preview a mostrar */}
											{isFileSelected && <img src={URL.createObjectURL(file)} alt="Preview" className='h-24 w-44 object-cover rounded-lg'/>}
											<PiImageBold size={"48"} className={isFileSelected && "hidden"}/>
										</div>

										<h3 id="original-text" className=" font-semibold">{t("info.upload-img")}</h3>

										<h3 id="file-upload-filename" className="text-ellipsis text-center hidden overflow-hidden font-semibold whitespace-nowrap w-full">
											{filename} {/* < Texto del archivo subido */}
										</h3>

										{/* Error a mostrar si el archivo no es compatible */}
										{error && <div className='flex font-semibold text-center animate-shake animate-duration-200 text-error'> <BiSolidError className='self-center mr-2' /> {error}</div>}
									</div>
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
