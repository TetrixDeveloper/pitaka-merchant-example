import { GraphQLClient } from "graphql-request";

const graphQLClient = new GraphQLClient(
  process.env.REACT_APP_PITAKA_GRAPHQL_API_URL || ""
);

export const setAuthToken = (tokenId: string) => {
  graphQLClient.setHeader("Authorization", `Bearer ${tokenId}`);
  graphQLClient.setHeader("Access-Control-Allow-Credentials", "true");
  graphQLClient.setHeader("Access-Control-Allow-Origin", "*");
  graphQLClient.setHeader(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT"
  );
  graphQLClient.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
};

export default graphQLClient;
