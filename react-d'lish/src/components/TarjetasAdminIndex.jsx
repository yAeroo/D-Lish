import useOwner from "../hooks/useOwner";
import DataCard from "./Admin/dataCard";
import { useEffect } from "react";

// Icons
import { BiDish } from "react-icons/bi";
import { BiCalendarWeek } from "react-icons/bi";
import { useTranslation } from "react-i18next";



function TarjetasAdminIndes() {

  
  const { t } = useTranslation();

  const { pedidos, obtenerPedidos } = useOwner();
  useEffect(() => {
    obtenerPedidos();
  }, []);

  return (
    <div>
      {/* Tarjetas */}

      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 ">
        <DataCard spanIcon={<BiDish className="text-3xl" />} text={t("admin.today's-orders")} color={'teal'} number={pedidos?.length} />

        <DataCard spanIcon={<BiCalendarWeek className="text-3xl" />} text={t("admin.weekly-orders")} color={'teal'} number={pedidos?.length} />

        <DataCard spanIcon={<BiCalendarWeek className="text-3xl" />} text={t("admin.weekly-orders")} color={'teal'} number={pedidos?.length} />

        <DataCard spanIcon={<BiCalendarWeek className="text-3xl" />} text={t("admin.weekly-orders")} color={'teal'} number={pedidos?.length} />

      </section>

    </div>
  )
}

export default TarjetasAdminIndes
