import { formatearDinero } from "../../helper/Money";

function OrderContent(props) {

  const { price, nameUser, content1, content2, drink, accompaniment } = props;
  return (

    <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
      <td className="border-grey-light border hover:bg-gray-100 p-3">{formatearDinero(+price)}</td>
      <td className="border-grey-light border hover:bg-gray-100 p-3">{nameUser}</td>
      <td className="border-grey-light border hover:bg-gray-100 p-3">{content1}</td>
      <td className="border-grey-light border hover:bg-gray-100 p-3">{content2}</td>
      <td className="border-grey-light border hover:bg-gray-100 p-3">{drink ? drink : '---'}</td>
      <td className="border-grey-light border hover:bg-gray-100 p-3">{accompaniment ? accompaniment : '---'}</td>

      {/*Botones*/}
      {/* <td className="tableRow border-grey-light hover:font-mediu flex sm:justify-center gap-3 wrap">
        <button className="btn btn-outline btn-success">Aceptar</button>
        <button className="btn btn-outline btn-error">Denegar</button>
      </td> */}
    </tr>

  )
}

export default OrderContent
