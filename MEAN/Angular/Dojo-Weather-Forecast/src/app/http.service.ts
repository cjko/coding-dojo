import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  fetchWeather(city: string) {
  	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=c57e55a565215adb064df3ffba6bd08b').map(data=>data.json()).toPromise()
  }

}
