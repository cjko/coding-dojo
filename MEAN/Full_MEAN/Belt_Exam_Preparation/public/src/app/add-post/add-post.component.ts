import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from './../post';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

	topic_id = ""
	newPost = new Post()
	@Output() postPostEmitter = new EventEmitter()

  constructor(private _http: HttpService, private _route: ActivatedRoute, private _cookieService: CookieService) { 
  	this._route.params.subscribe((param)=>{
  		this.topic_id = param.id
  	})
  }

  ngOnInit() {
  }

  postPost(form){

  	this.newPost['creator'] = this._cookieService.get('_id')
  	this.newPost['comments'] = []
    this.newPost['upvotes'] = 0
    this.newPost['downvotes'] = 0

  	this._http.postPost(this.topic_id, this.newPost)
  		.then((data)=>{
  			console.log("POST POSTED!")
  			console.log(data)
  			this.postPostEmitter.emit()
  			this.newPost = {}
  			form.reset()
  		})
  		.catch((err)=>{
  			console.log("ERROR",err)
  		}) 
  	
  }

}
