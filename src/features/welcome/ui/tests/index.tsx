"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Button, Spinner } from "@heroui/react";
import { CircleQuestionMark, Clock } from "lucide-react";

import { useCreatePayment } from "@/entities/user/payments/model/api/queries";
import { useGetTests } from "@/entities/user/tests/model/api/queries";
import { ErrorBlock } from "@/shared/ui/error-block";

export const Tests = () => {
  const router = useRouter();

  const t = useTranslations();

  const { data: tests, isPending, isError, refetch } = useGetTests();
  const createPayment = useCreatePayment();

  const onPay = async (testId: number) => {
    try {
      const redirectURL = window.location.href;

      toast.promise(createPayment.mutateAsync({ testId, redirectURL }), {
        loading: t("payment.paymentLoading"),
        success: (res) => {
          if (res?.paymentUrl) {
            window.location.href = res.paymentUrl;
            return t("payment.paymentRedirect");
          }

          router.push("/user");
          return t("payment.paymentCreated");
        },
        error: () => {
          router.push("/user");
          return t("common.requestError");
        },
      });
    } catch {
      router.push("/user");
    }
  };

  if (isPending) return <Spinner />;

  return (
    <div>
      <h2 id="tests" className="font-bold text-2xl md:text-4xl text-center">
        {t("testsPage.title")}
      </h2>

      {isError ? (
        <ErrorBlock refetch={refetch} className="mt-14" />
      ) : (
        <div className="mt-14 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:items-stretch gap-8 relative before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-indigo-100 before:blur-2xl before:opacity-80">
          {tests?.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl max-w-86.5 p-4 md:basis-[calc(50%-1rem)] lg:basis-0 lg:flex-1"
            >
              <h3 className="font-semibold text-xl md:text-2xl">
                {test.title}
              </h3>

              <p className="font-medium text-neutral-500 mt-2">
                {test.description}
              </p>

              <div className="flex items-center gap-8 mt-6 font-medium">
                <div className="flex items-center gap-1">
                  <Clock />
                  <span>
                    {t("testsPage.minutes", { value: test.timerMinutes })}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <CircleQuestionMark />
                  <span>
                    {t("testsPage.questions", { value: test.questionCount })}
                  </span>
                </div>
              </div>

              <p className="mt-6 font-medium text-neutral-500">
                {t("testsPage.priceLabel")}
                <span className="text-xl md:text-2xl text-blue-700">
                  {" "}
                  {test.price}с
                </span>
              </p>

              <Button
                className="bg-blue-700 mt-3 md:mt-6 rounded-xl w-full font-medium text-sm md:text-xl py-3.5 md:py-6"
                isDisabled={createPayment.isPending}
                onClick={() => onPay(test.id)}
              >
                {createPayment.isPending
                  ? t("common.loading")
                  : t("testsPage.pay")}
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
