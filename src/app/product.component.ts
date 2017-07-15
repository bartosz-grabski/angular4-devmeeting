import { Component, Input } from '@angular/core';
import { ProductImpl as Product } from './model/Product';

@Component({
  selector: 'app-product',
  template: `<li class="product">{{product.title}} - {{product.price}}</li>`
})
export class ProductComponent {

  @Input() public product;

}
