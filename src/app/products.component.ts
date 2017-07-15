import { Component } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductImpl } from './model/Product';
import { Product } from './model/Product';


@Component({
  selector: 'app-products',
  template:
      `
      <ul class='product-list'>
        <app-product *ngFor="let product of promotedProducts" [product]="product"></app-product>
      </ul>
      <ul class="product-list">
        <app-product *ngFor="let product of products" [product]="product"></app-product>
      </ul>
      `
})
export class ProductsComponent {

  public promotedProducts: Array<Product> = [
    new ProductImpl('prom_prod1',10),
    new ProductImpl('prom_prod2',10),
    new ProductImpl('prom_prod3',10),
  ].map((p) => { return new ProductImpl(p.title,p.price,true)});

  public products: Array<Product> = [
    new ProductImpl('prod2',10),
    new ProductImpl('prod3',10,false,['tag1','tag2']),
    new ProductImpl('prod4',10)
  ];
}
