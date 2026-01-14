import { Form } from "@heroui/react";
import { OtpCodeInput } from "../otp-code-input";
import { useOtpForm } from "../../lib/hooks/useOtpForm";
import { OtpActions } from "../otp-actions";

export const OtpForm = () => {
  const f = useOtpForm();

  return (
    <div className="flex flex-col items-center lg:min-w-118">
      <h1 className="text-3xl lg:text-4xl font-semibold">
        {f.t("otpPage.formTitle")}
      </h1>

      <p className="text-blue-700 text-base lg:text-xl font-medium mt-2 text-center">
        {f.t("otpPage.formDescription", { phone: f.phone })}
      </p>

      <Form
        className="mt-10 lg:mt-15 w-full flex flex-col gap-8 lg:gap-10"
        onSubmit={f.onSubmit}
      >
        <OtpCodeInput value={f.otp} onChange={f.setOtp} />

        <OtpActions
          confirmText={f.t("otpPage.confirm")}
          loadingText={f.t("common.loading")}
          wrongNumberText={f.t("otpPage.wrongNumber")}
          resendLabel={f.t("otpPage.resendLabel")}
          retryText={f.t("common.retry")}
          mmss={f.mmss}
          isExpired={f.isExpired}
          isBusy={f.isBusy}
          isConfirmDisabled={f.isConfirmDisabled}
          verifyPending={f.verifyPending}
          onWrongNumber={f.onWrongNumber}
          onResend={f.onResend}
        />
      </Form>
    </div>
  );
};
