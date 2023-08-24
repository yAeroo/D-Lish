import { Link } from "react-router-dom";

export default function FoodCard(props) {
    const { name, cafeteriaId, img, description, id } = props;

    return (
        <div className="card 2xl:card-side shadow-xl">
            <figure>
                <img
                    src={img}
                    alt="Album"
                    className="h-full"
                />
            </figure>
            <div className="card-body bg-base-100">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/cafeteria/${cafeteriaId}/dish/${id}`}>
                        <button className="btn btn-primary mt-[1rem]">Agregar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
