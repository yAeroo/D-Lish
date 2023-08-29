import { formatearDinero } from "../helper/Money"

export default function TableRow(props) {
    const { index, component } = props;

    return (
        <tr className="border-dashed  border-slate-500">
            <td></td>
            <td>{index}</td>
            <td>
                {isNaN(component) ? (
                    component
                ) : (
                    <span className="text-xl text-lime-500">{formatearDinero(+component)}</span>
                )}
            </td>
        </tr >
    )
}
