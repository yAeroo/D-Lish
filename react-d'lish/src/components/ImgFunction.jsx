import React from 'react';
import { TbCameraPlus } from "react-icons/tb";

function ImgFunction() {
	const showFileName = (event) => {
		const input = event.target;
		const fileName = input.files[0].name;

		const hideText = document.getElementById('original-text');
		const infoArea = document.getElementById('file-upload-filename');

		hideText.classList.add('hidden');
		infoArea.classList.remove('hidden');
		infoArea.textContent = fileName;
	};

	return (
		<label for="image" id="div-file" className="px-5 py-12 m-10 cursor-pointer flex justify-center items-center rounded-lg border-dashed border-2 border-[#242F5B]">    
			<input type="file" name="image" id="image" onChange={showFileName} />
			<div className="flex justify-center flex-col items-center w-full">
					<TbCameraPlus color={"white"}  size={"30"}/>

					<h3 id="original-text" className="text-white font-semibold">Sube tu imagen aquí</h3>

					<h3 id="file-upload-filename" className="text-ellipsis text-center hidden overflow-hidden text-white font-semibold whitespace-nowrap w-full">
							{/* Texto del archivo subido */}
					</h3>
			</div>
		</label>
	);
}

export default ImgFunction;
