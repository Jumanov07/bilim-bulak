import { api } from "@/shared/api";
import type { VerifyOtpPayload, VerifyOtpResponse } from "../types";

export const verifyOtp = async (
  payload: VerifyOtpPayload
): Promise<VerifyOtpResponse> => {
  const { data } = await api.post<VerifyOtpResponse>(
    "/auth/verify-otp",
    payload
  );

  return data;
};
