// src/app/app.component.ts

import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataService: DataService) { }

  fetchData() {
    this.dataService.getData().subscribe(data => {
      console.log('Fetched data:', data);
    });
  }
}
