import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user = {}

  constructor(private _http: HttpService, private _cookieService: CookieService, private _router: Router) { }

  ngOnInit() {
  }

  login(form) {

  	this._http.validateUser(this.user)
  		.then((data)=>{
  			console.log(data)
  		})
  		.catch((err)=>{
  			console.log("Could not connect to database.")
  		})


  	this._http.postUser(this.user)
  		.then((data)=>{
  			console.log("Created a new user!")
  			console.log(data)
  			this._cookieService.put('name',data.name)
  			this._cookieService.put('_id',data._id)
  			this._router.navigate(['/dashboard'])
  		})
  		.catch((err)=>{
  			console.log("Error creating new user:", err)
  		})
  }

}
