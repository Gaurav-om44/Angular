import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  private apiUrl = 'https://api.example.com/stocks';

  constructor(private http: HttpClient) {}

  getStockData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
