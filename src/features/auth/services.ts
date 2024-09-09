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

export const fetchCurrentUserDetails = async () => {
  const result = await graphQLClient.request(getCurrentUserDetailsDocument);

  return result.currentUser.getCurrentUserDetails;
};
