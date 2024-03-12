import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation RegisterUser($username: String!, $password: String!) {
    register(username: $username, password: $password) {
      id
      username
    }
  }
`;