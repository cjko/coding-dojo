import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	arrOfColors: Array<string> = this.generateArray()

  generateArray(): Array<string> {
  	var arr: Array<string> = []
  	var hexValues = ['A','B','C','D','E','F','1','2','3','4','5','6','7','8','9','0']

  	for(let i=0; i<10; i++) {
  		let hexStr = "#"
  		for(let j=0; j<=5; j++) {
  			hexStr += hexValues[Math.floor(Math.random()*15)+1]
  		}
  		arr.push(hexStr)
  	}
  	return arr
  }
}
