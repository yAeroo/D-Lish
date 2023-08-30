import useOwner from "../hooks/useOwner";
import DataCard from "./Admin/dataCard";

// Icons
import { BiDish } from "react-icons/bi";
import { BiCalendarWeek } from "react-icons/bi";

function TarjetasAdminIndes() {
  const { pedidos } = useOwner();
  console.log(pedidos);


  return (
    <div>
      {/* Tarjetas */}

      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 ">

        {/* Tarjeta 1*/}
        <DataCard spanIcon={<BiDish className="text-3xl" />} text="Pedidos hoy" color={'teal'} number={pedidos.length} />

        {/* Tarjeta 2*/}
        <DataCard spanIcon={<BiCalendarWeek className="text-3xl" />} text="Pedidos esta semana" color={'purple'} number={1} />

      </section>

    </div>
  )
}

export default TarjetasAdminIndes
