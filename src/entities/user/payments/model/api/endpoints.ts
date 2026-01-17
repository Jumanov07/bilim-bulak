import { api } from "@/shared/api";
import type { CreatePaymentPayload, CreatePaymentResponse } from "../types";

export const createPayment = async (
  payload: CreatePaymentPayload
): Promise<CreatePaymentResponse> => {
  const { data } = await api.post<CreatePaymentResponse>(
    "/payments/create",
    payload
  );

  return data;
};
