import { useMutation } from "@tanstack/react-query";
import { resendOtp, verifyOtp } from "./endpoints";

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: verifyOtp,
  });
};

export const useResendOtp = () => {
  return useMutation({
    mutationFn: resendOtp,
  });
};
