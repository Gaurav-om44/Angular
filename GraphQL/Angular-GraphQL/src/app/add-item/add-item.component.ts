import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ADD_ITEM } from '../graphql-operations';
import { Item } from '../graphql-types';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  constructor(private apollo: Apollo) {}

  addItem(name: string, description: string): void {
    this.apollo.mutate<{ addItem: Item }>({
      mutation: ADD_ITEM,
      variables: {
        name,
        description
      }
    }).subscribe(result => {
      console.log(result.data?.addItem);
    });
  }
}
