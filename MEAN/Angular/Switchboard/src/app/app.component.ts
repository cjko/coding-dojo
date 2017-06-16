import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 switches: Array<boolean> = []

  constructor() {
  	this.switches = this.generateSwitches(10);
  }

  toggleSwitch(index) {
  	let newSwitchboard = this.switches
  	newSwitchboard[index] = !newSwitchboard[index]
  	this.switches = newSwitchboard
  }

  generateSwitches(num): Array<boolean> {
  	let arr: Array<boolean> = []
  	for(let i=1; i<=num; i++) {
  		arr.push(false)
  	}
  	return arr
  }

}
