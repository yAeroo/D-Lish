import { Link } from "react-router-dom";

export default function FoodCard(props) {
    const { cafeteriaId, img } = props;

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
                <h2 className="card-title">Plato de Pollo Asado</h2>
                <p>Pollo a la mostaza acompañado de 2 acompañamientos a escoger.</p>
                <div className="card-actions justify-end">
                    <Link to={`/cafeteria/${cafeteriaId}/dish/1`}>
                        <button className="btn btn-primary mt-[1rem]">Agregar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
