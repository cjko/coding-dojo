import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from './product';

@Injectable()
export class CommunicateService {

  constructor() { }

  observedProducts = new BehaviorSubject(null);

  updateProducts(products: Array<Product>) {
  	this.observedProducts.next(products)
  }

}
