import { useState, useEffect } from 'react';

// Icons
import { PiImageBold } from "react-icons/pi";
import { BiSolidError } from "react-icons/bi";
import { TbCameraCancel, TbCameraCheck } from "react-icons/tb";

const FileUpload = () => {
	const [file, setFile] = useState(null);
	const [filename, setFilename] = useState('');
	const [isFileSelected, setIsFileSelected] = useState(false);
	const [error, setError] = useState('');

	const allowedImageTypes = ['image/jpeg', 'image/png'];

	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		if (selectedFile) {
		if (allowedImageTypes.includes(selectedFile.type)) {
			setFile(selectedFile);
			setFilename(selectedFile.name);
			setIsFileSelected(true);
			setError('');
		} else {
			setError('Archivo incompatible.');
		}
		}
	};

	const handleAccept = () => {
		console.log('Accepted:', file);
		resetState();
	};

	const handleCancel = () => {
		if (isFileSelected){
			console.log('Cancelled');
		}
		resetState();
		window.pfp_modal.close();
	};

	const resetState = () => {
		setTimeout(() => {
			setFile(null);
			setFilename('');
			setIsFileSelected(false);
			setError('');
			const fileInput = document.getElementById('file-input');
			if (fileInput) {
			fileInput.value = '';
			}
		}, 500);
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
				<input type="file" name="image" accept="image/*" id="image"  onChange={handleFileChange} />
				<div className="flex justify-center flex-col items-center w-full">

						<div id="img-cont" className='h-24 w-24 flex items-center justify-center mb-3'>
							{/* Imagen preview a mostrar */}
							{isFileSelected && <img src={URL.createObjectURL(file)} alt="Preview" className='h-24 w-24 rounded-lg' />}
							<PiImageBold color={"white"} size={"48"} />
						</div>

						<h3 id="original-text" className="text-white font-semibold">Sube tu imagen aquí</h3>

						<h3 id="file-upload-filename" className="text-ellipsis text-center hidden overflow-hidden text-white font-semibold whitespace-nowrap w-full">
							{filename} {/* < Texto del archivo subido */}
						</h3>

						{/* Error a mostrar si el archivo no es compatible */}
						{error && <div className='flex font-semibold text-center animate-shake animate-duration-200 text-error'> <BiSolidError className='self-center mr-2' /> {error}</div>}
				</div>
			</label>

			<div className="modal-action justify-between">
				<button className="flex rounded-full bg-secondary hover:bg-base-100 transition-all text-white p-2 md:px-5" onClick={handleCancel}>
					<span className="mr-2"> 
						<TbCameraCancel size={"25"} color={"white"} /> 
					</span>
					<p className='self-center'>Cancelar</p>
				</button>

				{/* Botón aceptar DESHABILITADO */}
				<div id='disable-bttn' className="flex rounded-full text-gray-400 p-2 md:px-5 cursor-not-allowed border-dashed border-2 bg-[#377c49] border-[#60b977]">
					Aceptar
					<span className="ml-2"> 
						<TbCameraCheck size={"25"} color={"rgb(156 163 175 / var(--tw-text-opacity))"} /> 
					</span>
				</div>

				{isFileSelected && 
					<button className="flex rounded-full bg-primary hover:bg-base-100 transition-all text-white p-2 md:px-5 animate-jump" onClick={handleAccept}>
						Aceptar
						<span className="ml-2"> 
							<TbCameraCheck size={"25"} color={"white"} /> 
						</span>
					</button>
					}
			</div>
		</>
	);
};

export default FileUpload;
