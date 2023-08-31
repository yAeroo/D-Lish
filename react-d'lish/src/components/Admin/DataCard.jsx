export default function DataCard(props) {
    const { spanIcon, text, color, number } = props;

    return (
        <div className="flex items-center p-8 bg-neutral shadow rounded-lg transform transition duration-500 hover:scale-105 ">
            <div className={`inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-${color}-400 bg-${color}-400  rounded-full mr-6`}>
                {spanIcon}
            </div>
            <div>
                <span className="block text-2xl text-yellow-50 font-bold">{number}</span>
                <span className="block text-white">{text}</span>
            </div>
        </div>
    )
}
