import {Component, Input} from '@angular/core';
import {ProductImpl} from './models/Product';

@Component({
  selector: 'app-product',
  template: `
    <li class="product">
      <div [ngClass]="{promoted: product.isPromoted}">
        {{product.name}} - {{product.price}}
      </div>
      <div class="tags" *ngIf="product.tags.length > 0">tags
        <app-tags [tags]="product.tags"></app-tags>
      </div>
    </li>
  `,
  styles: [
    '.product { width: 200px;height: 200px;display: block; float: left;background-color: gray;margin: 5px}',
    '.promoted {background-color: yellow}'
  ]

})
export class ProductComponent {
  @Input() public product: ProductImpl;
}

