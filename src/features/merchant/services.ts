import graphQLClient from "graphQLClient";

import { graphql } from "__generated__/gql";
import { RequestExpressSendInput } from "__generated__/gql/graphql";

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

export const requestExpressSend = async (data: RequestExpressSendInput) => {
  const result = await graphQLClient.request(requestExpressSendDocument, {
    data,
  });

  return result.currentUser.requestExpressSend;
};
