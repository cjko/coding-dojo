import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from './../communicate.service';
import { Product } from './../product';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

	products: Array<Product>
	sub: Subscription;

  constructor(private _communicateService: CommunicateService) { 
  	this.sub = this._communicateService.observedProducts.subscribe(
  		(updatedProducts) => { this.products = updatedProducts; 
  			console.log(updatedProducts);
  		},
  		(err) => { console.log(err) },
  		() => {}
  	)
  }

  ngOnInit() {
  	
  }

  ngOnDestroy() {
  	this.sub.unsubscribe();
  }

  deleteProduct(productIndex) {
  	for(let i=productIndex; i < this.products.length; i++) {
  		this.products[productIndex] = this.products[productIndex+1]
  	}
  	this.products.pop()
  }

}
