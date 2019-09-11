export class Ingredient {
  public price: string;
  public vitamins: string;

  public updateFrom(src: Ingredient): void {
    this.price = src.price;
    this.vitamins = src.vitamins;
  }
}
