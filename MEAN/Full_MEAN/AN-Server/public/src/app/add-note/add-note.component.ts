import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from './../note';
import { HttpService } from './../http.service'

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

	noteObj = new Note()
	@Output() addNoteEmitter = new EventEmitter();

  constructor(private _http: HttpService) { }

  ngOnInit() {
  }


  // TODO: Method to call Service to do a POST request
  addNote(form) {
  	this._http.addNote(this.noteObj)
  		.then(
  			(response)=>{
  				console.log("Response: ", response)
  				this.addNoteEmitter.emit("Note was added.")
  				this.noteObj = new Note()	
  				form.reset()
  			}
  		)
  		.catch(
  			(err)=>{
  				console.log("Error: ", err)
  				this.addNoteEmitter.emit("Note was NOT added.")
  			}
  		)
  }

}
