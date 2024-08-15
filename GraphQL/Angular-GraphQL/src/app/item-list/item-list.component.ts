import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ITEMS, ITEM_ADDED } from '../graphql-operations';
import { Item } from '../graphql-types';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  loading: boolean = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo.watchQuery<{ items: Item[] }>({
      query: GET_ITEMS
    }).valueChanges.subscribe(result => {
      this.items = result.data?.items || [];
      this.loading = result.loading;
      this.error = result.error;
    });

    this.apollo.subscribe<{ itemAdded: Item }>({
      query: ITEM_ADDED
    }).subscribe(result => {
      if (result.data) {
        this.items.push(result.data.itemAdded);
      }
    });
  }
}
