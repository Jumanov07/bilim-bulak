import { useMutation } from "@tanstack/react-query";
import { createPayment } from "./endpoints";

export const useCreatePayment = () => {
  return useMutation({
    mutationFn: createPayment,
  });
};
