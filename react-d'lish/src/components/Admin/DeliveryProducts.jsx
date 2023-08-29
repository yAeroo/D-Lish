import React from 'react'
import Pupusas from "../../assets/index/pupusas.jpg";

function DeliveryProducts(props) {
    const {nameuser, platillo, content1, content2 } = props;
  return (
    <div>
                        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td className="border-grey-light border hover:bg-gray-100 p-3">{content1}</td>
					<td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{content1}</td>
                    <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                        <img src={Pupusas} className='w-[13rem] h-[13rem]' />
                        </td>
                    <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{content1}</td>
					<td className="border-grey-light border p-3  hover:font-medium ">
                        <div className='flex sm:justify-center gap-3'>
						<td className="font-medium text-center text-primary "><button className="btn btn-outline btn-success">Aceptar</button></td>
                   

                        <td className="font-medium text-center text-primary "><button className="btn btn-outline btn-error">Denegar</button></td>
                        </div>
                    </td>
                      
				</tr>

    </div>
  )
}

export default DeliveryProducts