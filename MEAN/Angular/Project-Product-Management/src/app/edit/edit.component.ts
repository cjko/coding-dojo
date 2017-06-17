import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunicateService } from './../communicate.service';
import { Product } from './../product';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

	products: Array<Product>
	productIndex: number

	sub: Subscription
	paramSub: Subscription
	
  constructor(private _communicateService: CommunicateService, private _route: ActivatedRoute, private _router: Router) { 
  	this.sub = _communicateService.observedProducts.subscribe(
  		(updatedProducts) => { 
  			this.products = updatedProducts; 
  			// console.log(this.products)
  		},
  		(err) => { console.log(err) },
  		() => {}
  	)
  	this.paramSub = this._route.params.subscribe((param)=>{
  		this.productIndex = param.id
  	})
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  	this.sub.unsubscribe()
  	this.paramSub.unsubscribe()
  }

  updateProduct(productIndex, title, price, imgurl, form) {
  	let editProduct = {
  		'title': title,
  		'price': price,
  		'imgurl': imgurl,
  	}

  	this.products[productIndex] = new Product()
  	this.products[productIndex]['title'] = title
  	this.products[productIndex]['price'] = price
  	this.products[productIndex]['imgurl'] = imgurl


  	this._communicateService.updateProducts(this.products);

  	this._router.navigate(['/products'])

  }

  deleteProduct(productIndex) {
  	
  	this._router.navigate(['/products'])
  }

}
