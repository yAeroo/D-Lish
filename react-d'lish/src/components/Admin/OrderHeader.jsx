import React from "react";
import { useTranslation } from "react-i18next";

export default function OrderHeader() {
  const { t } = useTranslation();

  return (
    <tr className="bg-terc flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
      <th className="border p-3 text-left">{t("admin.deliv-price")}</th>
      <th className="border p-3 text-left">{t("admin.deliv-paymentstatus")}</th>
      <th className="border p-3 text-left">{t("admin.deliv-client")}</th>
      <th className="border p-3 text-left">
        {t("index.category-complement-1")}
      </th>
      <th className="border p-3 text-left">
        {t("index.category-complement-2")}
      </th>
      <th className="border p-3 text-left">{t("index.category-drink")}</th>
      <th className="border p-3 text-left">
        {t("index.category-accompaniment")}
      </th>
    </tr>
  );
}
