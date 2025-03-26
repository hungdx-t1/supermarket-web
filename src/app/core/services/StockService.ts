import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

// import { of as ObservableOf } from 'rxjs/observable/of';
// import { _throw as ObservableThrow } from 'rxjs/observable/throw';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private stocks: Stock[] = [
    new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
    new Stock('Second Stock Company', 'SSC', 10, 20, 'NSE'),
    new Stock('Last Stock Company', 'LSC', 876, 765, 'NYSE'),
    new Stock('Apple', 'AAPL', 150, 200, 'NASDAQ'),
    new Stock('Google', 'GOOGL', 2500, 2200, 'NASDAQ'),
    new Stock('Microsoft', 'MSFT', 320, 300, 'NASDAQ'),
    new Stock('Amazon', 'AMZN', 3300, 3500, 'NASDAQ'),
    new Stock('Facebook', 'FB', 250, 300, 'NASDAQ'),
    new Stock('Tesla', 'TSLA', 890, 800, 'NASDAQ'),
    new Stock('Netflix', 'NFLX', 500, 600, 'NASDAQ'),
    new Stock('Nvidia', 'NVDA', 600, 700, 'NASDAQ'),
    new Stock('Paypal', 'PYPL', 250, 300, 'NASDAQ'),
    new Stock('Shopify', 'SHOP', 1500, 1600, 'NASDAQ'),
  ];

  private stocksSubject = new BehaviorSubject<Stock[]>(this.stocks);
  stocks$ = this.stocksSubject.asObservable();

  constructor() {}

  getStocks(): Observable<Stock[]> {
    // rxjs 6 trở lên sử dụng of thay cho ObservableOf
    // return ObservableOf(this.stocks);
    return of(this.stocks);
  }

  setStocks(stocks: Stock[]) {
    this.stocks = stocks;
  }

  createStock(stock: Stock): Observable<any> {
    let foundStock = this.stocks.find((each) => each.code === stock.code);
    if (foundStock) {
      // return ObservableThrow({msg: 'Cổ phiếu với mã ' + stock.code + ' đã tồn tại!'});
      return throwError(
        () => new Error(`Cổ phiếu với mã ${stock.code} đã tồn tại!`)
      );
    }
    this.stocks.push(stock);
    // return ObservableOf({msg: 'Cổ phiếu với mã ' + stock.code + ' đã tồn tại!'});
    return of({ msg: `Cổ phiếu với mã ${stock.code} đã được thêm!` });
  }

  /** Chuyển đổi trạng thái yêu thích của cổ phiếu */
  toggleFavorite(stock: Stock): Observable<Stock | undefined> {
    let foundStock = this.stocks.find((each) => each.code === stock.code);
    if (foundStock) {
      foundStock.favorite = !foundStock.favorite;
      return of(foundStock); // ✅ Trả về Observable chứa cổ phiếu đã cập nhật
    }
    return throwError(() => new Error('Không tìm thấy cổ phiếu này!'));
  }

  updateStock(code: string, stock: Stock): Observable<any> {
    const index = this.stocks.findIndex((stock) => stock.code === code);
    if (index !== -1) {
      this.stocks[index] = stock;
      return of({ msg: `Cổ phiếu ${code} đã được cập nhật!` });
    }
    return throwError(() => new Error(`Không tìm thấy cổ phiếu với mã ${code}!`));
  }

  deleteStock(code: string): Observable<any>{
    // Tìm stock từ code
    // const stockExists = this.stocks.some((stock) => stock.code === code);
    // if (!stockExists) {
    //   return throwError(() => new Error(`Không tìm thấy cổ phiếu với mã ${code}!`));
    // }
    // this.stocks = this.stocks.filter(stock => stock.code !== code);
    // return of({ msg: `Cổ phiếu ${code} đã được xóa!` });


    // debug
    console.log('Danh sách trước khi xóa:', this.stocks);

    this.stocks = this.stocks.filter(stock => stock.code !== code);
    this.stocksSubject.next(this.stocks); // Cập nhật danh sách mới

    // debug
    console.log('Danh sách sau khi xóa:', this.stocks);
    
    return of(undefined); // Trả về Observable<void> để có thể subscribe
  }

  // Lấy thông tin stock từ code
  getStockByCode(code: string): Observable<Stock | null> {
    const foundStock = this.stocks.find((stock) => stock.code === code);
    return of(foundStock ? foundStock : null);
    // if(stock) { return of(stock);}
    // return throwError(() => new Error(`Không tìm thấy cổ phiếu với mã ${code}!`));
  }
}
