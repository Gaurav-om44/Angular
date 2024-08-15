import { Component } from '@angular/core';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonRow } from '@ionic/angular/standalone';
import { ApiService } from '../services/api/api.service';

import { CommonModule, NgFor } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, CommonModule, IonToolbar, IonTitle, IonContent, IonCard, NgFor, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonRow],
})
export class HomePage {

  items: any[] = [];
  allitems: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.getItems();
  }

  getItems() {
    this.allitems = this.api.items;
    this.items = [...this.api.items];
  }
}
