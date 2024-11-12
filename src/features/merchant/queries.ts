import { fetchPaymentIntent } from "./services";

export const paymentIntentKeys = {
  all: ["paymentIntents"] as const,
  paymentIntent: () => [...paymentIntentKeys.all, "paymentIntent"] as const,
};

export const getFetchPaymentIntentQuery = (paymentIntentId: string) => ({
  queryKey: paymentIntentKeys.paymentIntent(),
  queryFn: () => fetchPaymentIntent(paymentIntentId),
});
