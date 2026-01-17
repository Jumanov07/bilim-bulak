"use client";
import { useParams } from "next/navigation";
import { Spinner } from "@heroui/react";
import { useGetTest } from "@/entities/user/tests/model/api/queries";
import { ErrorBlock } from "@/shared/ui/error-block";
import { TestRunner } from "../test-runner";

export const TestSection = () => {
  const { testId } = useParams<{ testId: string }>();

  const { data: test, isPending, isError, refetch } = useGetTest(testId);

  return (
    <>
      {isPending ? (
        <div className="mt-14 flex items-center justify-center">
          <Spinner />
        </div>
      ) : isError ? (
        <ErrorBlock refetch={refetch} className="mt-14" />
      ) : test ? (
        <TestRunner test={test} testId={testId} />
      ) : null}
    </>
  );
};
