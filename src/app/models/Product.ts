export interface Product {
  name: string;
  price: number;
  isPromoted: boolean;
  tags: string[];
  contains(value: string): boolean;
}

export class ProductImpl implements Product {
  tags: string[];
  isPromoted: boolean;
  name: string;
  price: number;

  constructor(name: string, price: number, tags?: string[], isPromoted?: boolean) {
    this.name = name;
    this.price = price;

    this.isPromoted = isPromoted ? isPromoted : false;
    this.tags = tags ? tags : [];

  }

  public contains(val: string): boolean {
    if (this.name.match(val)) {
      return true;
    }
    if (this.price.toString().match(val)) {
      return true;
    }
    let found = false;
    this.tags.forEach((tag) => {
      if (tag.match(val)) {
        found = true;
      }
    });
    return found;
  }
}

