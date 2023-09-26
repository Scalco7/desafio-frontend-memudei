import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ILocationResponse } from '../search-city/search-city.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private appId: string = "004b16ce7e90568f7d7389f273b47e8c"
  private url: string = `https://api.openweathermap.org/data/2.5/weather?`;

  constructor(
    private http: HttpClient,
  ) { }

  public apiGetWeather(local: ILocationResponse): Observable<any> {
    let _url = `${this.url}lat=${local.lat}&lon=${local.long}&appid=${this.appId}`;

    return (this.http.get<any>(_url).pipe(
      map(
        res => res
      )
    )
    )
  }
}
