export interface CreatePaymentPayload {
  testId: number;
  redirectURL: string;
}

export interface CreatePaymentResponse {
  paymentId: string;
  paymentUrl: string;
  status: string;
}
