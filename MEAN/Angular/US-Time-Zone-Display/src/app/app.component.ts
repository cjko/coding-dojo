import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateTime = new Date()

  pstSelected: boolean = false
  mstSelected: boolean = false
  cstSelected: boolean = false
  estSelected: boolean = false

  updateTimeZone(timeZone: string) {
  	let d = new Date()
  	let offset = d.getTimezoneOffset()/60
  	let utcTime = d.getTime() + (offset*60*60*1000)
  	d.setTime(utcTime)

  	switch(timeZone) {
  		case "PST": {
  			  this.pstSelected = true
			  this.mstSelected = false
			  this.cstSelected = false
			  this.estSelected = false

  			let pstTime = d.getTime() - (7*60*60*1000)
  			d.setTime(pstTime)
  			this.dateTime = d
  			break
  		}
  		case "MST": {
  			this.pstSelected = false
			  this.mstSelected = true
			  this.cstSelected = false
			  this.estSelected = false

  			let mstTime = d.getTime() - (6*60*60*1000)
  			d.setTime(mstTime)
  			this.dateTime = d
  			break
  		}
  		case "CST": {
  			this.pstSelected = false
			  this.mstSelected = false
			  this.cstSelected = true
			  this.estSelected = false

  			let cstTime = d.getTime() - (5*60*60*1000)
  			d.setTime(cstTime)
  			this.dateTime = d
  			break
  		}
  		case "EST": {
  			this.pstSelected = false
			  this.mstSelected = false
			  this.cstSelected = false
			  this.estSelected = true

  			let estTime = d.getTime() - (4*60*60*1000)
  			d.setTime(estTime)
  			this.dateTime = d
  			break
  		}
  		default: {
  			this.pstSelected = false
			  this.mstSelected = false
			  this.cstSelected = false
			  this.estSelected = false

  			this.dateTime = new Date()
  			break
  		}
  	}
  	
  }

}
