import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

	@Input() notes

  constructor(private _http: HttpService) { }

  ngOnInit() {
  	
  }

}
