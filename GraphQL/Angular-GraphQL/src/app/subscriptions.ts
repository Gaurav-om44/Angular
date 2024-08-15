import { gql } from '@apollo/client/core';

export const ITEM_ADDED = gql`
  subscription ItemAdded {
    itemAdded {
      id
      name
      description
    }
  }
`;
