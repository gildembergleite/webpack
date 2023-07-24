interface Vendable {
  name: string
  price: number
  rate: number
  discountedPrice(): number
}