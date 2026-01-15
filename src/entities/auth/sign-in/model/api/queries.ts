import { useMutation } from "@tanstack/react-query";
import { loginUser } from "./endpoints";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};
