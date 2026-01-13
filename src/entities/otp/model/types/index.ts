export type VerifyOtpType = "REGISTRATION" | "PASSWORD_RESET";

export interface VerifyOtpPayload {
  phone: string;
  code: string;
  type: VerifyOtpType;
}

export interface VerifyOtpResponse {
  success: boolean;
  phone: string;
  message: string;
}
