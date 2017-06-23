import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Topic } from './../topic';
import { HttpService } from './../http.service';
import { CommunicateService } from './../communicate.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {

	topic = new Topic()

	@Output() addTopicEmitter = new EventEmitter()

  constructor(private _http: HttpService, private _cookieService: CookieService) { }

  ngOnInit() {
  }

  postTopic(form) {
    this.topic['creator'] = this._cookieService.get('_id')
  	this._http.postTopic(this.topic)
  		.then((data)=>{
  			console.log("Topic submitted!")
        console.log(data)

  			this.addTopicEmitter.emit()

  			form.reset()

  		})
  		.catch((err)=>{
  			console.log("Error submitting topic: ", err)
  		})
  	
  }

}
