import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `<div class="product">{{title}} - {{price}}</div>`
})
export class ProductComponent {
  title = 'product';
  price = 100;
}
