import { AiFillDelete } from "react-icons/ai"
import { RiEdit2Fill } from "react-icons/ri"
import { AiFillEyeInvisible } from "react-icons/ai"
// CSSSS
import "../../css/tables.css";
import useOwner from "../../hooks/useOwner";
import { useEffect, useState } from "react";

function ProductRow(props) {
    const { ProductNum, ProductItem, id, type, active } = props;
    const { hadleClickVisibility, setElement } = useOwner();
    const [visible, setVisible] = useState(active);

    const handleClickVisible = (type, id) => {
        hadleClickVisibility(type, id)
        setVisible(!visible);
    }

    const handleClickDelete = (type, id) => {
        window.delete_modal.showModal();
        setElement({ type: type, id: id });
    }

    return (
        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
            <td className="border-grey-light border hover:bg-gray-100 p-3">{ProductNum}</td>
            <td className="tableRow">{ProductItem}</td>
            <td className="tableRow h-[234px] sm:h-auto">
                {/* <img src={props.ProductIMG} className='w-[13rem] h-[13rem]' /> */}
            </td>
            {/* <td className="tableRow">{props.ProductPrice}</td> */}
            <td className="border-grey-light border p-3  hover:font-medium flex sm:justify-center gap-3 ">
                <AiFillEyeInvisible
                    className={`cursor-pointer text-2xl sm:text-2xl text-gray-400 hover:text-gray-600'
                    ${!visible ? 'text-gray-600' : 'text-gray-400 hover:text-gray-600'}`}
                    onClick={() => handleClickVisible(type, id)}>
                </AiFillEyeInvisible>

                {/* Modals */}
                <RiEdit2Fill className='cursor-pointer text-2xl sm:text-2xl text-terc hover:text-[#6dcfa1]' onClick={() => window.product_modal_2.showModal(id)}></RiEdit2Fill>
                <AiFillDelete className='cursor-pointer text-2xl sm:text-2xl text-red-400 hover:text-red-600'
                    onClick={() => handleClickDelete(type, id)}>
                </AiFillDelete>
            </td>
        </tr>


    )
}

export default ProductRow
