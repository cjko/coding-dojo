import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	username: string

  constructor(private _http: HttpService, private _cookieService: CookieService, private _router: Router) {
  	// console.log(_cookieService.get('_id'))
  	if (!this._cookieService.get('_id')){
  		this._router.navigate(['/login'])
  	} else {
  		this.username = this._cookieService.get('name')
  	}
  }

  logout() {
  	this._cookieService.put('_id', null)
  	this._router.navigate(['/login'])
  	console.log(this._cookieService.get('_id'))
  }

  checkUsername(name) {
  	// this._http.checkUsername(name)
  }

  ngOnInit() {
  }

}
