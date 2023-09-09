import { Link } from "react-router-dom";

export default function FoodCard(props) {
    const { photo, name, caferia, id } = props; // Props usados para los platillos

    return (
        <div className="flex items-center z-50 justify-center mx-0 h-[7rem] w-100 md:hover:bg-neutral rounded-lg px-0 mb-1">
            <div className="flex items-center justify-start space-x-4 md:space-x-4 mt-0 ml-4 w-[100%] md:w-[100%]">
                <div className="w-[4rem] h-[4rem] lg:w-20 lg:h-20 rounded overflow-hidden">
                    <img className="w-full h-full object-cover" src={`../../../assets/products/mainDish/${photo}`} />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-md lg:text-lg font-bold text-neutral-100">
                        {name}
                    </h2>
                    {/* <h3 className="pt-[0.01rem] text-neutral-200">{caferia}</h3> */}
                </div>
            </div>
            <Link to={`/cafeteria/${caferia}/dish/${id}`}>
                <button className="border-primary border-2 text-primary text-xs lg:text-lg px-2 py-1 rounded-md ml-3 md:ml-3 font-bold hover:bg-primary hover:text-black hover:font-bold">
                    + Agregar
                </button>
            </Link>
        </div>
    )
}