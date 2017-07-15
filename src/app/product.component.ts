import { Component, Input } from '@angular/core';
import { Product } from './model/Product';

@Component({
  selector: 'app-product',
  template: `
    <li [ngClass]="{promoted: product.isPromoted}" class="product">
      <div class="product-content">
        <div class="product-header">{{product.title}} - {{product.price}}</div>
        <div class="product-tags">
          <div *ngFor="let tag of product.tags">{{tag}}</div>
        </div>
      </div>
    </li>
  `
})
export class ProductComponent {

  @Input() public product : Product;

}
