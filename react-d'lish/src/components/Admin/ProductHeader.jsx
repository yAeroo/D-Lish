import React from "react";

import { useTranslation } from "react-i18next";

function ProductHeader() {

  const { t } = useTranslation();

  return (
    <tr className="bg-terc flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
      <th className="p-3 text-center">Id</th>
      <th className="p-3 text-center">{t("admin.tb-name")}</th>
      <th className="p-3 text-center h-[242px] sm:h-[49px]">
        {t("admin.tb-img")}
      </th>
      {/* <th className="p-3 text-center" width="110px">
        Precio
      </th> */}
      <th className="p-3 text-center" width="110px">
        {t("admin.tb-actions")}
      </th>
    </tr>
  )
}

export default ProductHeader