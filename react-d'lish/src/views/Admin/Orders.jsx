import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import ProductRow from '../../components/Admin/ProductRow';
import ProductModal from '../../components/Admin/ProductModal';

// Css
import '../../css/productsTable.css';
import DeleteModal from '../../components/Admin/ProductDeleteModal';


function ProductAdmin() {
	const almuerzodesayuno = [
		{ id: 1, name: 'Producto 1', img: 'image1.jpg', price: 10.99 },
		{ id: 2, name: 'Producto 2', img: 'image2.jpg', price: 19.99 },
		{ id: 3, name: 'Producto 3', img: 'image3.jpg', price: 12.99 },
		// ... aquí es de agregar mas productos ...
	];

	return (

		<div className='lg:ml-[10rem] mb-10 sm:ml-[5rem] ml-[1rem] h-[100%] animate-fade animate-duration-500'>

			<h3 className='my-7 text-center text-terc font-bold text-2xl'> Almuerzos/Desayunos </h3>

			<div className="flex items-center w-[95%] justify-center">

				<div class="container">
					<table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
						<thead class="text-white">

							{almuerzodesayuno.map((product) => (
								// Encabezado de la tabla para cada producto
								<tr className="bg-terc flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
									<th className="p-3 text-left">Id</th>
									<th className="p-3 text-left">Nombre</th>
									<th className="p-3 text-left h-[233px] sm:h-[49px]">Imagen</th>
									<th className="p-3 text-left" width="110px">
										Precio
									</th>
									<th className="p-3 text-left" width="110px">
										Acciones
									</th>
								</tr>
							))}


						</thead>
						<tbody class="flex-1 sm:flex-none text-[#414141]">

							{almuerzodesayuno.map((product, id) => (
								<ProductRow
									key={id}
									id={product.id}
									ProductNum={product.id}
									ProductItem={product.name}
									ProductIMG={product.img}
									ProductPrice={product.price}
								/>


							))}

							<ProductModal ModalId="product_modal_2" ModalTypebtn="Guardar cambios" ModalType="Actualiza un producto ya existente" />
							<DeleteModal />
						</tbody>
					</table>
				</div>
			</div>


		</div >

	)
}

export default ProductAdmin