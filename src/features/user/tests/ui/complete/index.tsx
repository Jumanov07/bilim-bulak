"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useGetTestResult } from "@/entities/user/tests/model/api/queries";
import { Button, cn, Spinner } from "@heroui/react";
import { ErrorBlock } from "@/shared/ui/error-block";
import { MoveRight } from "lucide-react";

export const CompleteTest = () => {
  const { testId } = useParams<{ testId: string }>();

  const {
    data: result,
    isPending,
    isError,
    refetch,
  } = useGetTestResult(testId);

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
            }}
            className="text-green-500"
          >
            {result?.severityLevel}
          </p>

          <p className="text-center text-neutral-500 mt-5">
            {result?.recommendation}
          </p>

          <Button
            type="submit"
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
