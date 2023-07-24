export default class Book implements Vendable {
  constructor(
    public name: string,
    public readonly price: number,
    public readonly rate: number
  ) {

  }

  discountedPrice(): number {
    return this.price * (1 - this.rate)
  }
}