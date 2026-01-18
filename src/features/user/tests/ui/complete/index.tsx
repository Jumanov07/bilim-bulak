"use client";
import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useGetTestResult } from "@/entities/user/tests/model/api/queries";
import { Button, cn, Spinner } from "@heroui/react";
import { ErrorBlock } from "@/shared/ui/error-block";
import { MoveRight } from "lucide-react";
import { SeverityLevel } from "@/entities/user/tests/model/types";

export const CompleteTest = () => {
  const { testId } = useParams<{ testId: string }>();
  const router = useRouter();

  const {
    data: result,
    isPending,
    isError,
    refetch,
  } = useGetTestResult(testId);

  const ui = useMemo(() => {
    const level = (result?.severityLevel ?? "low") as SeverityLevel;

    const map: Record<SeverityLevel, { label: string; color: string }> = {
      low: {
        label: "Төмөн",
        color: "#22C55E",
      },
      moderate: {
        label: "Орточо",
        color: "#F59E0B",
      },
      high: {
        label: "Жогору",
        color: "#FB923C",
      },
      critical: {
        label: "Өтө жогору",
        color: "#EF4444",
      },
    };

    return map[level];
  }, [result?.severityLevel]);

  const goToCourses = () => {
    router.replace("/user/courses");
  };

  return (
    <div className="flex flex-col items-center py-10 px-5">
      <Image
        src="/images/complete.webp"
        alt="Complete"
        width={200}
        height={200}
      />

      {isPending ? (
        <div className="mt-14 flex items-center justify-center">
          <Spinner />
        </div>
      ) : isError ? (
        <ErrorBlock refetch={refetch} className="mt-14" />
      ) : (
        <div style={{ maxWidth: 472 }} className="flex flex-col items-center">
          <div className="h-5" />

          <p className="text-blue-700 font-bold text-3xl">
            {result?.scorePercentage}%
          </p>

          <div className="h-5" />
          <p className="text-neutral-500 text-sm">Сиздин деңгээл:</p>

          <p
            style={{
              fontWeight: 700,
              fontSize: 48,
              color: ui.color,
            }}
          >
            {ui.label}
          </p>

          <p className="text-center text-neutral-500 mt-5">
            {result?.recommendation}
          </p>

          <Button
            onPress={goToCourses}
            style={{ marginTop: 20 }}
            className={cn(
              "w-full h-fit rounded-xl bg-blue-700 text-white font-medium text-sm lg:text-xl py-3 lg:py-4.5"
            )}
          >
            Курстарга баруу <MoveRight />
          </Button>
        </div>
      )}
    </div>
  );
};
