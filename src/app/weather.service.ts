import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = 'e5f974df82194e22b1011fc9d4e1f966';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=14f15cb2967f0ebbd8cde2cc84211707&lang=ca&units=metric';
  
  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    return this.http.get(`${this.apiUrl}${city}&appid=${this.apiKey}`);
  }
}
