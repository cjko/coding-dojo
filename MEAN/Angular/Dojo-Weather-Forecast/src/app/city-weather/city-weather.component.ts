import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {

	cityWeather = null
	temps = null

  constructor(private _httpService: HttpService, private _route: ActivatedRoute) { 
  	this._route.params.subscribe((param)=>{
  		this.fetchWeather(param.city)
  	})
  }

  ngOnInit() {
  }

  fetchWeather(city) {
  	this._httpService.fetchWeather(city)
  		.then(data => {
  			this.cityWeather = data
  			let temp = Math.round(data.main.temp * (9/5) - 459.67)
  			let temp_max = Math.round(data.main.temp_max * (9/5) - 459.67)
  			let temp_min = Math.round(data.main.temp_min * (9/5) - 459.67)

  			this.temps = {'temp': temp, 'temp_max': temp_max, 'temp_min': temp_min}
  		})
  		.catch(error => {
  			console.log("ERROR! :(",error)
  		})
  }

}
