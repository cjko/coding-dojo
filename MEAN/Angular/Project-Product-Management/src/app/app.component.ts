import { Component } from '@angular/core';
import { Product } from './product';
import { CommunicateService } from './communicate.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	products: Array<Product> = []

	constructor(private _communicateService: CommunicateService) {
		
		let goat = new Product()
		goat['title'] = 'Goat'
		goat['price'] = '20'
		goat['imgurl'] = 'http://cdn.modernfarmer.com/wp-content/uploads/2013/09/saanen.jpg'
		this.products.push(goat)
		_communicateService.updateProducts(this.products);
  	}
}
