import { Component, OnInit } from '@angular/core';
import { Topic } from './../topic';
import { Post } from './../post';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

	topic = new Topic()
  posts: Array<Post> = []
  topic_id = ""

  constructor(private _httpService: HttpService, private _route: ActivatedRoute) { 
  	this._route.params.subscribe((param)=>{
  		console.log("Topic id: ",param.id)
      this.topic_id = param.id
  		// TODO: Get topic
      this.getTopic()
  	})

  }

  ngOnInit() {
  }

  getTopic() {
    this._httpService.getTopic(this.topic_id)
        .then((data)=>{
          console.log("Got topic.")
          console.log(data)
          this.topic = data
          this.posts = data.posts
          console.log("DATA.POSTS:",data.posts)
        })
        .catch((err)=>{
          console.log("Incorrect id")
          console.log("Error:", err)
        })
  }

}
