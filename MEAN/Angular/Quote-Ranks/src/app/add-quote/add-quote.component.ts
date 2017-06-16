import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
	@Input() quotes

	@Output() addQuoteEmitter = new EventEmitter();

	newQuote = new Quote()
	submittedQuote: Quote = {}

  constructor() {

  }

  submitQuote(form) {
  	this.newQuote['votes'] = 1
  	this.submittedQuote = this.newQuote
  	this.newQuote = {}
  	form.reset()
  	this.addQuoteEmitter.emit(this.submittedQuote)
  }

  ngOnInit() {
  }

}
