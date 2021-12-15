import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query {
    getUserInfo {
      firstName
      lastName
      email
      avatar
      status
      joinedAt
    }
  }
`;