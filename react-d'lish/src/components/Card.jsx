export default function Card() {
    return (
        <div className="card hover:shadow-lg">
            <img
                src="/img/food.jpeg"
                alt="Imagen comida"
                className="w-full h-32 sm:h-48 object-cover"
            ></img>
            <div className="m-4">
                <span className="font-bold">5 frijoles picantes</span>
                <span className="block text-gray-500 text-sm">
                    Receta por Mati
                </span>
            </div>
            <div className="badge">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline-block"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>

                <span>25 minutos</span>
            </div>
        </div>
    );
}
