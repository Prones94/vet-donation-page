import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

export const REGISTER_USER = gql`
  mutation register($firstName: String!, $lastNameName: String! $email: String!, $password: String!) {
    register(firstName: $firstName, lastName: $firstName, email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;
