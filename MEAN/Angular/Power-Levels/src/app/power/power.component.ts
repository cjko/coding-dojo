import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

	powerLevel:number=100

  constructor() { }

  ngOnInit() {
  }

  superlativeMessage(powerLevel): string{
  	if(powerLevel == 50000) {
  		return "The One"
  	}
  	else if(powerLevel > 20000) {
  		return "Superlative!"
  	}
  	else if(powerLevel > 9000) {
  		return "Over 9000!"
  	}
  	return ""
  }

}
