import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

	@Input() post
	@Input() comments
	@Output() addCommentEmitter = new EventEmitter()

  constructor(private _http: HttpService) { 
  }

  ngOnInit() {
  }

  emitAddComment() {
  	this.addCommentEmitter.emit()
  }

}
