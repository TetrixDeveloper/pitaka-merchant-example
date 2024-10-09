import { useMutation } from "@tanstack/react-query";

import { requestExpressSend, clearPaymentIntent } from "./services";
import {
  ClearPaymentIntentInput,
  RequestExpressSendInput,
} from "__generated__/gql/graphql";

export const useExpressSendMutation = () => {
  return useMutation({
    mutationFn: (data: RequestExpressSendInput) => requestExpressSend(data),
  });
};

export const useClearPaymentIntentMutation = () => {
  return useMutation({
    mutationFn: (data: ClearPaymentIntentInput) => clearPaymentIntent(data),
  });
};
