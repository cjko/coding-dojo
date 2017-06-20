import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  // TODO: Method to send GET request to server
  addNote(noteObj) {
  	return this._http.post('http://localhost:8000/notes', noteObj).map(response=>response.json()).toPromise()
  }

  getNotes() {
  	return this._http.get('http://localhost:8000/notes').map(response=>response.json()).toPromise()
  }

}
