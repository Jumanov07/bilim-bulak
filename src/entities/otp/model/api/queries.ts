import { useMutation } from "@tanstack/react-query";
import { verifyOtp } from "./endpoints";

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: verifyOtp,
  });
};
