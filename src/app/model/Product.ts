interface Product {
  title : string;
  price : number;
}

export class ProductImpl implements Product {
  constructor (
    public title : string,
    public price : number
  ) {}
}
