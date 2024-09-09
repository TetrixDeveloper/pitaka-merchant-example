import graphQLClient from "graphQLClient";
import { graphql } from "__generated__/gql";

const getCurrentUserDetailsDocument = graphql(`
  query GetCurrentUserDetails {
    currentUser {
      getCurrentUserDetails {
        id
        displayName
        auth0UserId
        createdAt
        profile {
          id
          userId
          firstName
          middleName
          lastName
          mobileNumber
          emailAddress
          userProfilePicture {
            profilePicture
            avatarType
            isUseAvatar
          }
        }
      }
    }
  }
`);

const fetchCurrentUserWalletAccountsDocument = graphql(`
  query FetchWalletAccounts {
    currentUser {
      fetchWalletAccounts {
        walletAccounts {
          id
          accountNumber
          type
          name
          createdAt
          updatedAt
        }
      }
    }
  }
`);

const verifyPinDocument = graphql(`
  mutation VerifyPin($pin: String!) {
    currentUser {
      verifyPin(pin: $pin) {
        token
        expiresAt
      }
    }
  }
`);

export const fetchCurrentUserDetails = async () => {
  const result = await graphQLClient.request(getCurrentUserDetailsDocument);

  return result.currentUser.getCurrentUserDetails;
};

export const fetchCurrentUserWalletAccounts = async () => {
  const result = await graphQLClient.request(
    fetchCurrentUserWalletAccountsDocument
  );

  return result.currentUser.fetchWalletAccounts.walletAccounts;
};

export const verifyPin = async (pin: string) => {
  const result = await graphQLClient.request(verifyPinDocument, {
    pin,
  });

  return result.currentUser.verifyPin;
};
