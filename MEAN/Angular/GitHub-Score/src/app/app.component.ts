import { Component } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gitUser = {}
  score: number = 0
  message: string = ""
  tier: number = 0

  constructor(private _httpService: HttpService){}

  getGitHubUser(username) {
  	this._httpService.fetchGitHubUser(username)
  	.then(gitUser => { 
  		this.gitUser = gitUser;
  		this.updateScore(gitUser);
  	})
  	.catch(err => { 
  		this.message = "USER DOES NOT EXIST, PICK A DIFFERENT GITHUB USERNAME."
  		this.score = 0
  		this.tier = 0
  	})
  }

  updateScore(gitUser) {
  	let score = gitUser.public_repos + gitUser.followers
  	this.score = score

  	if(score >= 200) {
  		this.message = "Github Elite!"
  		this.tier = 4
  	} else if (score >= 100) {
  		this.message = "Great job!"
  		this.tier = 3
  	} else if (score >= 50) {
  		this.message = "Doing good!"
  		this.tier = 2
  	} else if (score >= 20) {
  		this.message = "A decent start!"
  		this.tier = 1
  	} else {
  		this.message = "Needs work!"
  		this.tier = 0
  	}

  }

}
