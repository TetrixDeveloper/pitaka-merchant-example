/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query GetCurrentUserDetails {\n    currentUser {\n      getCurrentUserDetails {\n        id\n        displayName\n        auth0UserId\n        createdAt\n        profile {\n          id\n          userId\n          firstName\n          middleName\n          lastName\n          mobileNumber\n          emailAddress\n          userProfilePicture {\n            profilePicture\n            avatarType\n            isUseAvatar\n          }\n        }\n      }\n    }\n  }\n':
    types.GetCurrentUserDetailsDocument,
  '\n  query FetchWalletAccounts {\n    currentUser {\n      fetchWalletAccounts {\n        walletAccounts {\n          id\n          accountNumber\n          type\n          name\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n':
    types.FetchWalletAccountsDocument,
  '\n  query FetchWalletAccountBalance($accountNumber: String!) {\n    currentUser {\n      fetchWalletAccountBalance(accountNumber: $accountNumber) {\n        availableBalance\n      }\n    }\n  }\n':
    types.FetchWalletAccountBalanceDocument,
  '\n  mutation VerifyPin($pin: String!) {\n    currentUser {\n      verifyPin(pin: $pin) {\n        token\n        expiresAt\n      }\n    }\n  }\n':
    types.VerifyPinDocument,
  '\n  mutation RequestExpressSend($data: RequestExpressSendInput!) {\n    currentUser {\n      requestExpressSend(data: $data) {\n        transaction {\n          id\n          sentAmount\n          availableBalance\n          createdAt\n        }\n      }\n    }\n  }\n':
    types.RequestExpressSendDocument,
  '\n  mutation ClearPaymentIntent($data: ClearPaymentIntentInput!) {\n    currentUser {\n      clearPaymentIntent(data: $data) {\n        id\n        amount\n        fee\n        status\n        returnUrl\n      }\n    }\n  }\n':
    types.ClearPaymentIntentDocument,
  '\n  query FetchPaymentIntent($paymentIntentId: String!) {\n    currentUser {\n      fetchPaymentIntent(paymentIntentId: $paymentIntentId) {\n        id\n        organizationId\n        requestedAmount\n        totalFees\n        description\n        statementDescriptor\n        returnUrl\n        createdAt\n        status\n      }\n    }\n  }\n':
    types.FetchPaymentIntentDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetCurrentUserDetails {\n    currentUser {\n      getCurrentUserDetails {\n        id\n        displayName\n        auth0UserId\n        createdAt\n        profile {\n          id\n          userId\n          firstName\n          middleName\n          lastName\n          mobileNumber\n          emailAddress\n          userProfilePicture {\n            profilePicture\n            avatarType\n            isUseAvatar\n          }\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetCurrentUserDetails {\n    currentUser {\n      getCurrentUserDetails {\n        id\n        displayName\n        auth0UserId\n        createdAt\n        profile {\n          id\n          userId\n          firstName\n          middleName\n          lastName\n          mobileNumber\n          emailAddress\n          userProfilePicture {\n            profilePicture\n            avatarType\n            isUseAvatar\n          }\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query FetchWalletAccounts {\n    currentUser {\n      fetchWalletAccounts {\n        walletAccounts {\n          id\n          accountNumber\n          type\n          name\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  query FetchWalletAccounts {\n    currentUser {\n      fetchWalletAccounts {\n        walletAccounts {\n          id\n          accountNumber\n          type\n          name\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query FetchWalletAccountBalance($accountNumber: String!) {\n    currentUser {\n      fetchWalletAccountBalance(accountNumber: $accountNumber) {\n        availableBalance\n      }\n    }\n  }\n'
): (typeof documents)['\n  query FetchWalletAccountBalance($accountNumber: String!) {\n    currentUser {\n      fetchWalletAccountBalance(accountNumber: $accountNumber) {\n        availableBalance\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation VerifyPin($pin: String!) {\n    currentUser {\n      verifyPin(pin: $pin) {\n        token\n        expiresAt\n      }\n    }\n  }\n'
): (typeof documents)['\n  mutation VerifyPin($pin: String!) {\n    currentUser {\n      verifyPin(pin: $pin) {\n        token\n        expiresAt\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation RequestExpressSend($data: RequestExpressSendInput!) {\n    currentUser {\n      requestExpressSend(data: $data) {\n        transaction {\n          id\n          sentAmount\n          availableBalance\n          createdAt\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  mutation RequestExpressSend($data: RequestExpressSendInput!) {\n    currentUser {\n      requestExpressSend(data: $data) {\n        transaction {\n          id\n          sentAmount\n          availableBalance\n          createdAt\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation ClearPaymentIntent($data: ClearPaymentIntentInput!) {\n    currentUser {\n      clearPaymentIntent(data: $data) {\n        id\n        amount\n        fee\n        status\n        returnUrl\n      }\n    }\n  }\n'
): (typeof documents)['\n  mutation ClearPaymentIntent($data: ClearPaymentIntentInput!) {\n    currentUser {\n      clearPaymentIntent(data: $data) {\n        id\n        amount\n        fee\n        status\n        returnUrl\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query FetchPaymentIntent($paymentIntentId: String!) {\n    currentUser {\n      fetchPaymentIntent(paymentIntentId: $paymentIntentId) {\n        id\n        organizationId\n        requestedAmount\n        totalFees\n        description\n        statementDescriptor\n        returnUrl\n        createdAt\n        status\n      }\n    }\n  }\n'
): (typeof documents)['\n  query FetchPaymentIntent($paymentIntentId: String!) {\n    currentUser {\n      fetchPaymentIntent(paymentIntentId: $paymentIntentId) {\n        id\n        organizationId\n        requestedAmount\n        totalFees\n        description\n        statementDescriptor\n        returnUrl\n        createdAt\n        status\n      }\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
