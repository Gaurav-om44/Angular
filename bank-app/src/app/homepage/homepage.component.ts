import { Component, OnInit } from '@angular/core';

export interface Transaction {
  date: string;
  description: string;
  amount: number;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  displayedColumns: string[] = ['date', 'description', 'amount'];
  transactions: Transaction[] = [
    {date: '2024-07-12', description: 'Groceries', amount: 50.45},
    {date: '2024-07-11', description: 'Electricity Bill', amount: 75.00},
    {date: '2024-07-10', description: 'Restaurant', amount: 120.89},
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
