import { z } from "zod";
import { ForgotPasswordSchema } from "../schemas";

export type ForgotPasswordFormValues = z.infer<typeof ForgotPasswordSchema>;
