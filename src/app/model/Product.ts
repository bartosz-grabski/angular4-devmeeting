export interface Product {
  name : string;
  price : number;
  isPromoted : boolean,
  tags : Array<string>
}

export class ProductImpl implements Product {
  constructor (
    public name : string,
    public price : number,
    public isPromoted: boolean = false,
    public tags : Array<string> = []
  ) {}

  public compareByName(product) : number {
    return this.name === product.name ? 0 : this.name > product.name ? 1 : 0;
  }

  public compareByPrice(product): number {
    return this.price - product.price;
  }
}
