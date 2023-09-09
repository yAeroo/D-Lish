import React from "react";
import FaviconGreen from "../../src/assets/logo/icon_green.png";
import { useTranslation } from "react-i18next";
import Logo from '../assets/logo/title_green.png'

export default function Spinner() {

  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-60 bg-base-100">
      <div className="flex flex-col items-center">
        <img
          src={FaviconGreen} // Reemplaza con la ruta correcta a tu imagen de spinner
          alt="Spinner"
          className="animate-spin justify-center animate-infinite animate-duration-[1150ms] animate-ease-in-out h-24 md:h-32 md:w-32"
        />
        <img
          src={Logo} // Ruta correcta a tu imagen estática
          alt="Logo"
          className="mt-0 h-16 md:h-24 justify-center"
        />
        <h1 className="absolute ml-3 md:mt-[16rem] mt-[11rem] text-md md:text-xl font-bold justify-center text-center text-white/25">
            {t("admin.loading")}
        </h1>

      </div>
    </div>
  )
}

