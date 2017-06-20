import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	notes: Array<Note> = []

	constructor(private _http: HttpService) {
    this.getNotes("")

  }

  getNotes(event) {
  	// console.log(event)
    
  	this._http.getNotes()
  		.then(
  			(data) => {
          this.notes = data
  		})
  		.catch(
  			()=>console.log("An error occurred.")
  		)

     // console.log(event)
  }
}
