export class Stock {
  favorite: boolean = false;

  constructor(
    public name: string,
    public code: string,
    public price: number,
    public previousPrice: number
  ) {}

  isPositiveChange(): boolean {
    return this.price >= this.previousPrice;
    // nếu giá hiện tại thấp hơn giá trước đó (nghĩa là đang giảm giá) thì sẽ trả về true
  }
}
