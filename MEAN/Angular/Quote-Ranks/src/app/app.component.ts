import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	quote = new Quote()
	quotes: Array<Quote> = [
		{'quote': "Many of life's failures are people who did not realize how close they were to success when they gave up.", 'author': "Thomas A. Edison", 'votes': 1},
		{'quote': "Cure for an obsession: get another one.", 'author': "Mason Cooley", 'votes': 1}
	]

	addQuote(event) {
		this.quotes.push(event)
	}
}
