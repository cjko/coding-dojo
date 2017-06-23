import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

	comment = {}
	@Input() post
	@Output() addCommentEmitter = new EventEmitter()


  constructor(private _http: HttpService, private _cookieService: CookieService) { }

  ngOnInit() {
  }

  postComment(form) {
  	console.log(this.comment)
  	this.comment['creator'] = this._cookieService.get('_id')

  	this._http.postComment(this.post._id, this.comment)
  		.then((data)=>{
  			console.log("SUCCESS!")
  			console.log(data)
  			this.addCommentEmitter.emit()
  			this.comment = {}
  			form.reset()
  		})
  		.catch((err)=>{
  			console.log("ERROR:", err)
  		})
  }

}
