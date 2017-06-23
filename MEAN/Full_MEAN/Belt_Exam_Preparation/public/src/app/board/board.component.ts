import { Component, OnInit } from '@angular/core';
import { Topic } from './../topic';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

	topics: Array<Topic> = []

  constructor(private _http: HttpService) { 
  	// this.topics.push(new Topic("1", "Best/easiest way to encrypt password", "<description>", "Ruby on Rails", "Joe"))
  	// this.topics.push(new Topic("2", "Database structure", "<description>", "MySQL", "sphinx"))
  	// this.topics.push(new Topic("3", "How to make my website user-friendly?", "<description>", "UX", "the_one"))
  	// this.topics.push(new Topic("4", "What is the first thing you should learn if you want to be a web developer", "<description>", "Web Development", "Zen"))
    _http.getTopics()
      .then((data)=>{
        this.topics = data
      })
      .catch((err)=>{
        console.log("Error getting topics.")
      })

  }

  ngOnInit() {
  }

  getTopics() {
  	console.log("Getting topics...")
  	this._http.getTopics()
  		.then((data)=>{
  			console.log("Retrieved topics.")
  			this.topics = data
  		})
  		.catch((err)=>{
  			console.log("Error getting topics...")
  		})

  }

}
