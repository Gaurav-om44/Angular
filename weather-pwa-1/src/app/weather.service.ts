import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  
    private apiUrl = environment.apiUrl;
    private apiKey = environment.apiKey;
  

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const headers = new HttpHeaders({
     'x-rapidapi-key': this.apiKey,
		 'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
    });

    // Make the HTTP GET request with headers
    
    return this.http.get<any>(this.apiUrl + `location=${city}&format=json&u=f`, { headers });
  }
}
