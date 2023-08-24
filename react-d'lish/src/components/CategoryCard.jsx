import { Link } from "react-router-dom";

export default function CategoryCard(props) {
    const { name, img, url } = props;

    return (
        <Link to={url}
            style={{ backgroundImage: `url(${img})`, borderRadius: '0.9rem' }}
            className="card w-full md:w-[48%] bg-base-100 shadow-xl bg-cover bg-center h-36 lg:h-50 xl:h-60 border-[0.2rem] hover:border-secondary  "
        >
            <div className="rounded-xl card-body bg-black/80 justify-center hover:bg-black/50 ">
                <h2 className="card-title text-neutral-200 text-3xl xl:text-4xl justify-center">
                    {name}
                </h2>
            </div>
        </Link>
    )
}
