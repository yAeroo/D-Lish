export default function TableRow(props) {
    const { compontent, cafeteria } = props;

    return (
        <tr className="border-dashed contrast-[.0] border-slate-500">
            <td></td>
            <td>{compontent}</td>
            <td>$2.50</td>
        </tr>
    )
}
