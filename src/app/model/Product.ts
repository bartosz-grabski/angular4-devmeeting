export interface Product {
  title : string;
  price : number;
}

export class ProductImpl implements Product {
  constructor (
    public title : string,
    public price : number,
    public isPromoted: boolean = false,
    public tags : Array<string> = []
  ) {}
}
