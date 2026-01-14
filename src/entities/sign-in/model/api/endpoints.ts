import { api } from "@/shared/api";
import { AuthResponse } from "@/shared/types";
import { LoginPayload } from "../types";

export const loginUser = async (
  payload: LoginPayload
): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>("/auth/login", payload);
  return data;
};
