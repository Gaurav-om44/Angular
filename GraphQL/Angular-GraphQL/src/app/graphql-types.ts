export interface Item {
  id: string;
  name: string;
  description: string;
}

export interface ItemAddedSubscriptionResponse {
  itemAdded: Item;
}
