import { useTranslation } from "react-i18next";
// Hooks
import { useState, createRef, useEffect } from "react";
// Icons
import { PiImageBold } from "react-icons/pi"; import { BiSolidError } from "react-icons/bi";

function AdminImgFunction(props) {
    const { t } = useTranslation();

	const [file, setFile] = useState(null);
	const [filename, setFilename] = useState(''); 
	const [isFileSelected, setIsFileSelected] = useState(false);
	const [error, setError] = useState('');

    const img = createRef();

    // Extensiones de imagenes permitidas
	const allowedImageTypes = ['image/jpeg', 'image/png'];

    const handleFileChange = (event) => {

		const selectedFile = event.target.files[0];
		if (selectedFile) { 
			if (allowedImageTypes.includes(selectedFile.type)) {  
                console.log(selectedFile);
				setFile(selectedFile); 
				setFilename(selectedFile.name); 
				setIsFileSelected(true); 
				setError('');
			} else { 
				setError(t("info.errors.incompatible-file")); 
			}
		}
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


    return (
        <>
            <label htmlFor="image" id="div-file" className="text-gray-600 max-w-xs min-w-sm px-5 py-12 my-5 cursor-pointer flex justify-center items-center rounded-lg border-dashed border-2 !bg-[#e6e6e6] border-[#4c4c4c]">    
                <input type="file" name="img_wall" accept="image/*" id="image" onChange={handleFileChange} ref={imgWallRef} />
                <div className="flex justify-center flex-col items-center w-full">

                <div id="img-cont" className='h-24 flex items-center justify-center mb-3' style={{width: props.wImg}}>
							{/* Imagen preview a mostrar */}
							{isFileSelected && <img src={URL.createObjectURL(file)} alt="Preview" className='h-24 object-cover rounded-lg' style={{width: props.wImg}} />}
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
        </>
    )
}

export default AdminImgFunction