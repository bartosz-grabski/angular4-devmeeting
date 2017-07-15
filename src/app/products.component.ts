import {Component, EventEmitter, Inject} from '@angular/core';
import {Product, ProductImpl} from './models/Product';
import {FormControl} from '@angular/forms';
import {ProductsRepository, ProductsRepositoryToken} from "./repositories/Product.repository";

@Component({
  selector: 'app-products',
  template: `
    <div>
      <div>
        <input type="text" [formControl]="searchInput"/>
        <button #button (click)="onSortByPriceClick(button,button1)">Sort by price</button>
        <button #button1 (click)="onSortByNameClick(button1,button)">Sort by name</button>
      </div>
      <app-product *ngFor="let product of products" [product]="product"></app-product>
    </div>`


})
export class ProductsComponent {
  private repository: ProductsRepository;

  private labelName = 'Sort by name';
  private labelPrice = 'Sort by price';
  public products: Product[];

  public searchInput = new FormControl();

  constructor(@Inject(ProductsRepositoryToken) productsRepository: ProductsRepository) {
    this.repository = productsRepository;
    this.products = this.repository.getProducts();

    this.searchInput.valueChanges.subscribe((value) => {
      productsRepository.setFilter(value);
      this.products = productsRepository.getProducts();
    });
  }


  public onSortByPriceClick(button, button1) {
    const direction = this.repository.setSortType('price');

    button.textContent = this.labelPrice + (direction === 'asc' ? ' >' : ' <');
    button1.textContent = this.labelName;
    this.products = this.repository.getProducts();
  }


  public onSortByNameClick(button, button1) {
    const direction = this.repository.setSortType('name');

    button.textContent = this.labelName + (direction === 'asc' ? ' >' : ' <');
    button1.textContent = this.labelPrice;
    this.products = this.repository.getProducts();
  }

}

