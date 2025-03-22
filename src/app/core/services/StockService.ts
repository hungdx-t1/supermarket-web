import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';

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
    new Stock('Shopify', 'SHOP', 1500, 1600, 'NASDAQ')
  ];

  constructor() {}

  getStocks(): Stock[] {
    return this.stocks;
  }

  setStocks(stocks: Stock[]) {
    this.stocks = stocks;
  }

  createStock(stock: Stock): boolean {
    let foundStock = this.stocks.find((each) => each.code === stock.code);
    if (foundStock) {
      return false;
    }
    this.stocks.push(stock);
    return true;
  }

  toggleFavorite(stock: Stock) {
    let foundStock = this.stocks.find((each) => each.code === stock.code);
    if(foundStock) {
        foundStock.favorite = !foundStock.favorite;
    }
  }

  updateStock(code: string, stock: Stock) {
    const index = this.stocks.findIndex(stock => stock.code === code);
    if (index !== -1) {
      this.stocks[index] = stock;
    }
  }

  deleteStock(code: string) {
    this.stocks = this.stocks.filter(stock => stock.code !== code);
  }

  // Lấy thông tin stock từ code
  getStockByCode(code: string): Stock | undefined {
    return this.stocks.find((stock) => stock.code === code);
  }
}
