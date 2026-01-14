import { Button, cn } from "@heroui/react";

interface Props {
  confirmText: string;
  loadingText: string;
  wrongNumberText: string;
  resendLabel: string;
  retryText: string;
  mmss: string;
  isExpired: boolean;
  isBusy: boolean;
  isConfirmDisabled: boolean;
  verifyPending: boolean;
  onWrongNumber: () => void;
  onResend: () => void;
}

export const OtpActions = ({
  confirmText,
  loadingText,
  wrongNumberText,
  resendLabel,
  retryText,
  mmss,
  isExpired,
  isBusy,
  isConfirmDisabled,
  verifyPending,
  onWrongNumber,
  onResend,
}: Props) => (
  <>
    <div className="flex justify-center">
      <Button
        type="button"
        onClick={onWrongNumber}
        variant="ghost"
        size="sm"
        isDisabled={isBusy}
        className="px-0 min-w-0 h-auto hover:bg-transparent font-medium text-sm lg:text-xl text-blue-700"
      >
        {wrongNumberText}
      </Button>
    </div>

    <Button
      type="submit"
      isDisabled={isConfirmDisabled}
      className={cn(
        "w-full h-fit rounded-xl font-medium text-sm lg:text-xl py-3 lg:py-4.5",
        isConfirmDisabled
          ? "bg-[#EEEEEE] text-[#A9A9A9]"
          : "bg-blue-700 text-white"
      )}
    >
      {verifyPending ? loadingText : confirmText}
    </Button>

    <div className="flex justify-center">
      <Button
        type="button"
        onClick={onResend}
        variant="ghost"
        size="sm"
        isDisabled={!isExpired || isBusy}
        className="px-0 min-w-0 h-auto hover:bg-transparent mt-3 flex items-center justify-center gap-2 font-medium text-sm lg:text-xl"
      >
        <span className="text-neutral-500">{resendLabel}</span>
        <span className="text-blue-700">{isExpired ? retryText : mmss}</span>
      </Button>
    </div>
  </>
);
