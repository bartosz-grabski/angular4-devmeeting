import { Component } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductImpl as Product} from './model/Product';


@Component({
  selector: 'app-products',
  template:
      `
      <ul class="product-list promoted">
        <li *ngFor="let promotedProd of promotedProducts" class="product promoted">{{promotedProd.title}} - {{promotedProd.price}}</li>
      </ul>
      <ul class="product-list">
        <li *ngFor="let product of products" class="product">{{product.title}} - {{product.price}}</li>
      </ul>

      `
})
export class ProductsComponent {
  public promotedProducts = [
    new Product('prom_prod1',10),
    new Product('prom_prod2',10),
    new Product('prom_prod3',10),
  ];
  public products = [
    new Product('prod1',10),
    new Product('prod2',10),
    new Product('prod3',10),
    new Product('prod4',10)
  ];
}
