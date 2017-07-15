import { Component } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductImpl } from './model/Product';
import { Product } from './model/Product';


@Component({
  selector: 'app-products',
  template:
      `
      <button (click)="sort('price',input)" [ngClass]="{up : current == 'price' && priceAsc,down : current == 'price' && !priceAsc }">
        <div>
          Sort by price
        </div>
      </button>
      <button (click)="sort('name',input)" [ngClass]="{up : current == 'name' && nameAsc,down : current == 'name' && !nameAsc }">
        <div>
          Sort by name
        </div>
      </button>
      <input type="text" #input (keyup)="filter(input)"/>
      <ul class='product-list'>
        <app-product *ngFor="let product of promotedProducts" [product]="product"></app-product>
      </ul>
      <ul class="product-list">
        <app-product *ngFor="let product of products" [product]="product"></app-product>
      </ul>
      `
})
export class ProductsComponent {


  private sortByName(asc) {
    return function(productA,productB) {
      return asc == true ? productA.compareByName(productB) : productB.compareByName(productA);
    }
  }

  private sortByPrice(asc) {
    return function(productA,productB) {
      return asc == true ? productA.compareByPrice(productB) : productB.compareByPrice(productA);
    }
  }
  public sort(type,input) {
    if (type == "name") {
      this.sortFunc = this.sortByName(this.nameAsc);
      this.nameAsc = !this.nameAsc;
    } else {
      this.sortFunc = this.sortByPrice(this.priceAsc);
      this.priceAsc = !this.priceAsc;
    }
    this.current = type;
    this.filter(input);
  }


  private sortFunc;
  private nameAsc = true;
  private priceAsc = true;
  private current;

  public filter(input) {
    let filtered = input.value.trim().toLowerCase();
    this.products = this._products.filter((product) => {
      return (product.name + product.price + product.tags.reduce((s, tag) => {return s+tag},'')).toLowerCase().indexOf(filtered) > -1;
    });
    this.promotedProducts = this._promotedProducts.filter((product) => {
      return (product.name + product.price + product.tags.reduce((s, tag) => {return s+tag},'')).indexOf(filtered) > -1;
    })

    this.products.sort(this.sortFunc);
    this.promotedProducts.sort(this.sortFunc);

  };

  private _promotedProducts: Array<Product> = [
    new ProductImpl('prom_prod1',30),
    new ProductImpl('prom_prod2',21),
    new ProductImpl('prom_prod3',10),
  ].map((p) => { return new ProductImpl(p.name,p.price,true)});

  private _products: Array<Product> = [
    new ProductImpl('prod1',10),
    new ProductImpl('prod22',30,false,['tag1','tag2']),
    new ProductImpl('prod333',20)
  ];

  public products = this._products;
  public promotedProducts = this._promotedProducts;
}
