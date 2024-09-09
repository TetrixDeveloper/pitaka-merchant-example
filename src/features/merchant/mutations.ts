import { useMutation } from "@tanstack/react-query";

import { requestExpressSend } from "./services";
import { RequestExpressSendInput } from "__generated__/gql/graphql";

export const useExpressSendMutation = () => {
  return useMutation({
    mutationFn: (data: RequestExpressSendInput) => requestExpressSend(data),
  });
};
