import { useMutation } from "@tanstack/react-query";
import { verifyPin } from "./services";
import { setPitakaToken } from "graphQLClient";

export const useVerifyPinMutation = () => {
  return useMutation({
    mutationFn: (pin: string) => verifyPin(pin),
    onSuccess: (data: { token: string; expiresAt: number }) => {
      setPitakaToken(data.token);
      localStorage.setItem("x-pitaka-token", data.token);
    },
  });
};
