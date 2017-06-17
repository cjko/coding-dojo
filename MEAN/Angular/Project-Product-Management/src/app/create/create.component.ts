import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from './../product';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from './../communicate.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {

	products: Array<Product> = []
	newProduct = new Product()
	sub: Subscription;

  constructor(private _communicateService: CommunicateService, private router: Router) {
  	this.sub = this._communicateService.observedProducts.subscribe(
  		(updatedProducts) => { this.products = updatedProducts; 
  			// console.log(updatedProducts);
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

  createProduct(form) {
	this.products.push(this.newProduct);
  	this.newProduct = {}
  	this._communicateService.updateProducts(this.products)
  	form.reset()

  	this.router.navigate(['/products'])
  }

}
