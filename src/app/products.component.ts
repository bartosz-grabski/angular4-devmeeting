import { Component } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductImpl as Product} from './model/Product';


@Component({
  selector: 'app-products',
  template:
      `
      <ul class="product-list">
        <app-product *ngFor="let product of products" [product]="product"></app-product>
      </ul>
      `
})
export class ProductsComponent {

  public products: Array<Object> = [
    new Product('prod1',10),
    new Product('prod2',10),
    new Product('prod3',10),
    new Product('prod4',10)
  ];
}
