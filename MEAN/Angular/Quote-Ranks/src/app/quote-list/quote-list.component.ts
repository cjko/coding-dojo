import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

	@Input() quotes

	constructor() {

	}

	ngOnInit() {

	}

	deleteQuote(index) {
		for(var i = index; i < this.quotes.length-1; i++) {
			this.quotes[i] = this.quotes[i+1]
		}
		this.quotes.pop()
	}

	sortQuotes() {
		this.quickSort(this.quotes, 0, this.quotes.length-1)
	}

	quickSort(arr, start, end){
	   var partitionIndex;

	  if(start < end){
	    partitionIndex = this.partition(arr, start, end);
	    
	   //sort start and end
	   this.quickSort(arr, start, partitionIndex - 1);
	   this.quickSort(arr, partitionIndex + 1, end);
	  }
	  return arr;
	}

	partition(arr, start, end){
	   var pivotValue = arr[end].votes,
	       partitionIndex = start;

	   for(var i = start; i < end; i++){
	    if(arr[i].votes > pivotValue){
	      this.swap(arr, i, partitionIndex);
	      partitionIndex++;
	    }
	  }
	  this.swap(arr, end, partitionIndex);
	  return partitionIndex;
	}

	swap(arr, i, j){
	   var temp = arr[i];
	   arr[i] = arr[j];
	   arr[j] = temp;
	}

}
