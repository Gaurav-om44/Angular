import { Component, OnInit } from '@angular/core';
import { StockDataService } from '../service/stock-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stockData$: Observable<any>;

  constructor(private stockDataService: StockDataService) {}

  ngOnInit() {
    this.stockData$ = this.stockDataService.getStockData().pipe(
      map(data => data.stocks)
    );
  }
}
