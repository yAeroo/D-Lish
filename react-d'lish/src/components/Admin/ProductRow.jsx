import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import {RiEdit2Fill} from "react-icons/ri"
import ProductModal from './ProductModal'

function ProductRow(props) {
      return (

                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td class="border-grey-light border hover:bg-gray-100 p-3">{props.ProductNum}</td>
					<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{props.ProductItem}</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                        <img src={props.ProductIMG} className='w-[13rem] h-[13rem]' />
                        </td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{props.ProductPrice}</td>
					<td class="border-grey-light border p-3  hover:font-medium ">
                        <div className='flex sm:justify-center gap-3'>
						<AiFillDelete className='cursor-pointer text-2xl sm:text-2xl text-red-400 hover:text-red-600' onClick={()=>window.delete_modal.showModal()}>     </AiFillDelete>
                   

                        <RiEdit2Fill className='cursor-pointer text-2xl sm:text-2xl text-terc hover:text-[#6dcfa1]'  onClick={()=>window.product_modal_2.showModal()}></RiEdit2Fill>
                        </div>
                    </td>
                      
				</tr>

          
          )
}

export default ProductRow
