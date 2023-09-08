import { useContext } from 'react';
import { Link } from "react-router-dom";

export default function FoodCard(props) {
  const { photo, name, cafeteriaName, cafeteriaId, dishId } = props;

  return (
    <div className="flex items-center justify-center mx-0 md:mx-1 h-[7rem] w-[100%] md:hover:bg-base-100 px-1 rounded-lg md:px-4 py-0 mb-2">
      <div className="flex items-center justify-start space-x-4 md:space-x-5 mt-0 w-[70%] md:w-[70%]">
        <div className="w-20 h-20 rounded overflow-hidden">
          <img className="w-full h-full object-cover" src={`../assets/products/mainDish/${photo}`} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-md lg:text-xl font-bold text-neutral-100">
            {name}
          </h2>
          <h3 className="pt-[0.01rem] lg:pt-0 text-sm lg:text-lg text-neutral-200">
            {cafeteriaName}
          </h3>
          <p className="pt-[0.01rem] text-[0.80rem] md:text-md lg:text-[1rem] text-neutral-200">
            $2.50 | Almuerzo
          </p>
        </div>
      </div>

      <Link to={`/cafeteria/${cafeteriaId}/dish/${dishId}`}>
  <button className="border-primary border-2 text-primary text-xs lg:text-lg px-2 py-1 rounded-md ml-3 md:ml-3 font-bold hover:bg-primary hover:text-black hover:font-bold">
    + Agregar
  </button>
</Link>
    </div>
  );
}
