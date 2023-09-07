import { Link } from "react-router-dom";

export default function FoodCard(props) {
    const { name, cafeteriaId, img, description, id } = props;

    return (
        <div className="card 2xl:card-side shadow-xl flex items-center justify-center">
            <figure>
                <img
                    src={img}
                    alt="Album"
                    className="h-full hidden"
                />
            </figure>
            <div className="card-body bg-base-300 justify-center">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <Link to={`/cafeteria/${cafeteriaId}/dish/${id}`} className="w-full">
                        <button className="btn btn-primary mt-[1rem] w-full">Agregar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
