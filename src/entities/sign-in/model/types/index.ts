import { z } from "zod";
import { SignInSchema } from "../schemas";

export type SignInFormValues = z.infer<typeof SignInSchema>;

export type LoginPayload = {
  phone: string;
  password: string;
};
