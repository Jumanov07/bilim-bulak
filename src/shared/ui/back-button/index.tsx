"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { ChevronLeft } from "lucide-react";

export const BackButton = () => {
  const router = useRouter();

  const t = useTranslations();

  const navigateBack = () => router.back();

  return (
    <button
      onClick={navigateBack}
      className="flex items-center gap-2 cursor-pointer text-blue-700 text-sm lg:text-xl font-medium"
    >
      <ChevronLeft className="text-blue-700" /> {t("common.back")}
    </button>
  );
};
