import { InputOTP } from "@heroui/react";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

const slotClass =
  "w-10 h-10 lg:w-15 lg:h-15 rounded-xl bg-[#F5F5F5] " +
  "flex items-center justify-center " +
  "text-xl lg:text-2xl font-medium text-neutral-900 " +
  "border border-transparent " +
  "data-[active=true]:border-blue-700 data-[active=true]:bg-white " +
  "data-[filled=true]:border-[#E5E5E5]";

export const OtpCodeInput = ({ value, onChange }: Props) => {
  return (
    <div className="w-full flex justify-center">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={onChange}
        inputMode="numeric"
        pattern="\d*"
        pasteTransformer={(text) => text.replace(/\D/g, "").slice(0, 6)}
        className="w-full flex items-center justify-center"
      >
        <InputOTP.Group className="flex gap-3 lg:gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <InputOTP.Slot key={i} index={i} className={slotClass} />
          ))}
        </InputOTP.Group>
      </InputOTP>
    </div>
  );
};
