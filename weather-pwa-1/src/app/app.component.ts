// app.component.ts

import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weatherData: any; // Assuming weatherData structure matches the provided example
  selectedForecast: any;
  city : string = 'london';

  constructor(private weatherService: WeatherService) {}

  
    ngOnInit() {
      this.fetchWeatherData(this.city);
    }
  
    fetchWeatherData(city: string) {
      this.weatherService.getWeather(city).subscribe(
        (data) => {
          this.weatherData = data;
          console.log(data); // Display received data in console
        },
        (error) => {
          console.error('Error fetching weather:', error);
        }
      );
    }
  

  onSelectForecast(forecast: any) {
    this.selectedForecast = forecast;
  }
}
