import { Component, Input } from '@angular/core';
import { Product } from './model/Product';

@Component({
  selector: 'app-product',
  template: `
    <li [ngClass]="{promoted: product.isPromoted}" class="product">{{product.title}} - {{product.price}}</li>
  `
})
export class ProductComponent {

  @Input() public product : Product;

}
