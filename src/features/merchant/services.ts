import graphQLClient from "graphQLClient";

import { graphql } from "__generated__/gql";
import {
  ClearPaymentIntentInput,
  RequestExpressSendInput,
} from "__generated__/gql/graphql";

const requestExpressSendDocument = graphql(`
  mutation RequestExpressSend($data: RequestExpressSendInput!) {
    currentUser {
      requestExpressSend(data: $data) {
        transaction {
          id
          sentAmount
          availableBalance
          createdAt
        }
      }
    }
  }
`);

const clearPaymentIntentDocument = graphql(`
  mutation ClearPaymentIntent($data: ClearPaymentIntentInput!) {
    currentUser {
      clearPaymentIntent(data: $data) {
        id
        amount
        fee
        status
        returnUrl
      }
    }
  }
`);

const fetchPaymentIntentDocument = graphql(`
  query FetchPaymentIntent($paymentIntentId: String!) {
    currentUser {
      fetchPaymentIntent(paymentIntentId: $paymentIntentId) {
        id
        organizationId
        requestedAmount
        totalFees
        description
        statementDescriptor
        returnUrl
        createdAt
        status
      }
    }
  }
`);

export const requestExpressSend = async (data: RequestExpressSendInput) => {
  const result = await graphQLClient.request(requestExpressSendDocument, {
    data,
  });

  return result.currentUser.requestExpressSend;
};

export const clearPaymentIntent = async (data: ClearPaymentIntentInput) => {
  const result = await graphQLClient.request(clearPaymentIntentDocument, {
    data,
  });

  return result.currentUser.clearPaymentIntent;
};

export const fetchPaymentIntent = async (paymentIntentId: string) => {
  const result = await graphQLClient.request(fetchPaymentIntentDocument, {
    paymentIntentId,
  });

  return result.currentUser.fetchPaymentIntent;
};
