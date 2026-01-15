import { z } from "zod";

export const ForgotPasswordSchema = z.object({
  phone: z
    .string()
    .trim()
    .regex(/^996\d{9}$/, "validation.phoneKg"),
});