import React from 'react'
import { useTranslation } from "react-i18next";

function HeaderOrder(props) {
  const { platillo } = props;
  const { t } = useTranslation();
  return (
    <>
      {/* Mensaje de Arriba */}
      <div className="flex items-center justify-between py-7 px-10 ">
        <div>
          <h1 className="text-4xl font-semibold leading-relaxed text-primary">{platillo} -</h1>
          <p className="text-sm font-medium text-gray-800">
            {t("admin.deliv-desc")}
          </p>
        </div>
      </div>
    </>
  )
}

export default HeaderOrder
