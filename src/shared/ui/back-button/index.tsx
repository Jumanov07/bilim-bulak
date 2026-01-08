"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export const BackButton = () => {
  const router = useRouter();

  const navigateBack = () => router.back();

  return (
    <button
      onClick={navigateBack}
      className="flex items-center gap-2c cursor-pointer text-blue-700 text-xl font-medium"
    >
      <ChevronLeft className="text-blue-700" /> Артка
    </button>
  );
};
