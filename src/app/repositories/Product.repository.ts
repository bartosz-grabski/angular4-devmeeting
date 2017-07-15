import {InjectionToken} from '@angular/core';
import {Product, ProductImpl} from '../models/Product';


export interface ProductsRepository {
  getProducts(): Product[];
  setFilter(filterValue: string);
  setSortType(type: string): string;
}

export class InMemoryTodoRepository implements ProductsRepository {

  private products: Product[];
  private filterValue: string;
  private sortByPrice: string;
  private sortByName: string;
  private sortType: string;


  constructor() {
    this.products = [
      new ProductImpl('pierwszy', 100, ['tag1', 'b', 'c']),
      new ProductImpl('drugi', 200),
      new ProductImpl('trzecie', 300),
      new ProductImpl('czwarty', 400, ['a', 'tag2', 'c'], true),
      new ProductImpl('piaty', 500),
      new ProductImpl('szusty', 600, [], true),
      new ProductImpl('Pierwszy', 600, [], true)
    ];
    this.sortByPrice = 'desc';
    this.sortByName = 'desc';
  }

  public getProducts(): Product[] {
    let products;

    if (this.filterValue) {
      products = this.products.filter((product) => {
        if (product.contains(this.filterValue)) {
          return true;
        }
      });
    } else {
      products = this.products;
    }

    if (this.sortType) {
      if (this.sortType === 'price') {
        products = this.sortListByPrice(products);
      } else if (this.sortType === 'name') {
        products = this.sortListByName(products);
      }
    }

    return products;
  }

  public setFilter(value: string) {
    this.filterValue = value;
  }

  public setSortType(type: string) {
    this.sortType = type;
    if (type === 'name') {
      this.sortByName = (this.sortByName === 'asc' ? 'desc' : 'asc');
      this.sortByPrice = 'desc';
      return this.sortByName;
    } else if (type === 'price') {
      this.sortByPrice = (this.sortByPrice === 'asc' ? 'desc' : 'asc');
      this.sortByName = 'desc';
      return this.sortByPrice;
    }
  }

  private sortListByPrice(products: Product[]): Product[] {
    return products.sort((product1, product2) => {
      if (this.sortByPrice === 'desc') {
        if (product1.price > product2.price) {
          return 1;
        } else if (product1.price === product2.price) {
          return 0;
        } else {
          return -1;
        }
      } else {
        if (product1.price > product2.price) {
          return -1;
        } else if (product1.price === product2.price) {
          return 0;
        } else {
          return 1;
        }
      }
    });
  }

  private sortListByName(products: Product[]): Product[] {

    return products.sort((product1, product2) => {
      if (this.sortByName === 'desc') {
        if (product1.name.toLowerCase() > product2.name.toLowerCase()) {
          return 1;
        } else if (product1.name.toLowerCase() === product2.name.toLowerCase()) {
          return 0;
        } else {
          return -1;
        }
      } else {
        if (product1.name.toLowerCase() > product2.name.toLowerCase()) {
          return -1;
        } else if (product1.name.toLowerCase() === product2.name.toLowerCase()) {
          return 0;
        } else {
          return 1;
        }
      }
    });

  }

}


export const ProductsRepositoryToken = new InjectionToken('ProductsRepository');
