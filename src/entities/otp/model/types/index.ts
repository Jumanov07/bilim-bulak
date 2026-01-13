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

export type ResendOtpParams = {
  phone: string;
  type: VerifyOtpType;
};

export interface ResendOtpResponse {
  success: boolean;
  phone: string;
  transactionId: string;
  token: string;
  expiresAt: string;
  message: string;
}
