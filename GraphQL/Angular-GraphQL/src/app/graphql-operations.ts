import { gql } from 'apollo-angular';

export const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      name
      description
    }
  }
`;

export const ADD_ITEM = gql`
  mutation AddItem($name: String!, $description: String!) {
    addItem(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const ITEM_ADDED = gql`
  subscription ItemAdded {
    itemAdded {
      id
      name
      description
    }
  }
`;
