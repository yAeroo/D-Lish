import { useState, useEffect } from 'react';
import clienteAxios from "../config/axios";
import { useTranslation } from 'react-i18next';

// Icons
import { PiImageBold } from "react-icons/pi";
import { BiSolidError } from "react-icons/bi";
import { TbCameraCancel, TbCameraCheck } from "react-icons/tb";
import { useAuth } from '../hooks/useAuth';

// Helper
import Notificacion from "../../src/helper/Notify";
import "react-toastify/dist/ReactToastify.css";

const FileUpload = () => {
	const { t } = useTranslation();

	// Se define el Toast
    const toastSuccesId = "success-noti";
    // Se instancia con referencia al ID Definido
    const NotiExito = Notificacion(
        "success",
        toastSuccesId,
        t("info.notis.success-save"),
        "!bg-[#191E2B] !font-body !py-2"
    );

	// Obtener token de usuario y Id
	const {user} = useAuth({ middleware: 'auth' }); const id = user?.id; const token = localStorage.getItem('AUTH_TOKEN');

	// Definiendo Const a utilizar para el dinamismo del modal
	const [file, setFile] = useState(null); // Archivo completo
	const [filename, setFilename] = useState(''); // Nombre del archivo
	const [isFileSelected, setIsFileSelected] = useState(false); // Condicional para activar el "useEffect"
	const [error, setError] = useState(''); // <- Error 

	// Extensiones de imagenes permitidas
	const allowedImageTypes = ['image/jpeg', 'image/png'];

	// Función ejecutada onChange del input:file
	const handleFileChange = (event) => {
		// Esto declara una constante llamada selectedFile 
		// en la que se almacenará la referencia al archivo seleccionado por el usuario.
		const selectedFile = event.target.files[0];
		if (selectedFile) { // Condicional - Si existe un archivo seleccionado entonces... 
			// Condicional | validación - Si tiene alguna de las extensiones de img permitidas entonces...
			if (allowedImageTypes.includes(selectedFile.type)) {  
				setFile(selectedFile); // File tendrá almacenado del archivo seleccionado
				setFilename(selectedFile.name); // FileName tendrá el nombre del archivo seleccionado
				setIsFileSelected(true); // Coloca la bandera - isFileSelected en True
				setError('');
			} else { // Sino...
				setError(t("info.errors.incompatible-file"));  // Colocar mensaje de error
			}
		}
	};

	// Al darle botón aceptar ejecuta la función...
	const handleAccept = () => {
		if (file){ // Si hay un archivo almacenado entonces...
			const formData = new FormData(); // Crea un nuevo objeto de la clase FormData para procesar solicitudes HTTP
			formData.append('image', file); // Crea un nuevo par clave-valor (Clave = id del input | valor = valor que recibe del input)

			clienteAxios.post(`api/user/${id}/upload-image`, formData,{ // Ejecuta una petición al servidor al Endpoint - upload-image
				headers: {
					Authorization: `Bearer ${token}` // Token obligatorio para validación de datos
				}
			})
			.then(response => { // Si la solicitud tiene exito entonces...
				console.log('Exito', response.data); // Manda un mensaje a la consola con exito
				setError(''); // Limpia mensaje de error si en dado caso se encuentra activo

				// Colocando URL fantasma para la actualización instantanea de la pfp
				const pfpUpdate = document.getElementById('profile-pic'); 
				pfpUpdate.src = URL.createObjectURL(file);

				NotiExito();

				window.pfp_modal.close(); // Cerrando modal
				resetState(); // Reiniando todo
			})
			.catch(error => { // Si la solicitud falla entonces...
				setError(t("info.errors.general-error")); // Coloca mensaje de error
				console.error('Error uploading image', error);
			})
		}
	};

	// Función para cancelar modal
	const handleCancel = () => {
		resetState();
		window.pfp_modal.close();
	};

	// Función para reiniciar el estado de todo
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
		const disableBttn = document.getElementById('disable-bttn');
		if (isFileSelected) {
			hideText.classList.add('hidden');
			disableBttn.classList.add('hidden');
			infoArea.classList.remove('hidden');
		} else {
			disableBttn.classList.remove('hidden');
			hideText.classList.remove('hidden');
			infoArea.classList.add('hidden');
		}
	}, [isFileSelected]);

	return (
		<>
		
			<label htmlFor="image" id="div-file" className="px-5 py-12 m-5 md:m-10 cursor-pointer flex justify-center items-center rounded-lg border-dashed border-2 border-[#242F5B]">    
				<input type="file" name="image" accept="image/*" id="image"  onChange={handleFileChange}  />
				<div className="flex justify-center flex-col items-center w-full">

						<div id="img-cont" className='h-24 w-24 flex items-center justify-center mb-3'>
							{/* Imagen preview a mostrar */}
							{isFileSelected && <img src={URL.createObjectURL(file)} alt="Preview" className='h-24 w-24 rounded-lg object-cover object-center' />}
							<PiImageBold color={"white"} size={"48"} className={isFileSelected && "hidden"}/>
						</div>

						<h3 id="original-text" className="text-white font-semibold">{t("info.upload-img")}</h3>

						<h3 id="file-upload-filename" className="text-ellipsis text-center hidden overflow-hidden text-white font-semibold whitespace-nowrap w-full">
							{filename} {/* < Texto del archivo subido */}
						</h3>

						{/* Error a mostrar si el archivo no es compatible */}
						{error && <div className='flex font-semibold text-center animate-shake animate-duration-200 text-error'> <BiSolidError className='self-center mr-2' /> {error}</div>}
				</div>
			</label>

			<section className="flex justify-between">
				<button className="flex rounded-full bg-secondary hover:bg-base-100 transition-all text-white p-2 md:px-5" onClick={handleCancel}>
					<span className="mr-2"> 
						<TbCameraCancel size={"25"} color={"white"} /> 
					</span>
					<p className='self-center'>{t("actions.cancel")}</p>
				</button>

				{/* Botón aceptar DESHABILITADO */}
				<div id='disable-bttn' className="flex rounded-full text-gray-400 p-2 md:px-5 cursor-not-allowed border-dashed border-2 bg-[#377c49] border-[#60b977]">
					{t("actions.accept")}
					<span className="ml-2"> 
						<TbCameraCheck size={"25"} color={"rgb(156 163 175 / var(--tw-text-opacity))"} /> 
					</span>
				</div>

				{isFileSelected && 
					<section className="cursor-pointer flex rounded-full bg-primary hover:bg-base-100 transition-all text-white p-2 md:px-5 animate-jump" onClick={handleAccept}>
						{t("actions.accept")}
						<span className="ml-2"> 
							<TbCameraCheck size={"25"} color={"white"} /> 
						</span>
					</section>
					}
			</section>
		</>
	);
};

export default FileUpload;
