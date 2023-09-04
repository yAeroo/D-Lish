import useOwner from "../hooks/useOwner";
import DataCard from "./Admin/dataCard";
import { useEffect } from "react";

// Icons
import { BiDish } from "react-icons/bi";
import { BiCalendarWeek } from "react-icons/bi";

function TarjetasAdminIndes() {
  const { pedidos, obtenerPedidos } = useOwner();
  useEffect(() => {
    obtenerPedidos();
  }, []);

  return (
    <div>
      {/* Tarjetas */}

      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 ">
        <DataCard spanIcon={<BiDish className="text-3xl" />} text="Pedidos hoy" color={'teal'} number={pedidos?.length} />

        <DataCard spanIcon={<BiCalendarWeek className="text-3xl" />} text="Pedidos esta semana" color={'teal'} number={pedidos?.length} />

        <DataCard spanIcon={<BiCalendarWeek className="text-3xl" />} text="Pedidos esta semana" color={'teal'} number={pedidos?.length} />

        <DataCard spanIcon={<BiCalendarWeek className="text-3xl" />} text="Pedidos esta semana" color={'teal'} number={pedidos?.length} />

      </section>

    </div>
  )
}

export default TarjetasAdminIndes
