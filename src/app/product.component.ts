import { Component } from '@angular/core';
import { ProductImpl as Product } from './model/Product';

@Component({
  selector: 'app-product',
  template: `<div class="product">{{title}} - {{price}}</div>`
})
export class ProductComponent {
  
}
