import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clima } from './models/Clima';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private URL_API = "http://api.openweathermap.org/data/2.5/weather?q=manizales&appid=794757c5451e5edad601ea4383720c47"
                            

  constructor(private http: HttpClient) { }

  getWeather(){   
    return this.http.get<Clima>(this.URL_API);
  }
  
}
