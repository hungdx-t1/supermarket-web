import { Component, Input, OnInit } from '@angular/core';
import { StockItemApiComponent } from '../stock-item-api/stock-item-api.component';
import { Stock } from '../../models/stock';
import { StockService } from '../../services/StockService';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { HTTPServiceService } from '../../services/HTTPService';

@Component({
  selector: 'app-stock-list-api',
  imports: [StockItemApiComponent, CommonModule, RouterLink],
  templateUrl: './stock-list-api.component.html',
  styleUrl: './stock-list-api.component.css'
})
export class StockListApiComponent implements OnInit {
  stocks$: Observable<Stock[]> = new Observable<Stock[]>();

  constructor(private http: HTTPServiceService) {
  }

  ngOnInit(): void {
    this.getAllStocks();
  }

  getAllStocks() {
    // this.stocks$ = this.http.listStocks().pipe(
    //   map((stocks: any[]) =>
    //     stocks.map(stock => ({
    //       ...stock,
    //       price: Number(stock.price), // Chuyển đổi kiểu dữ liệu từ string thành number
    //       previousPrice: Number(stock.previousPrice),
    //       favorite: stock.favorite === "true" ? true : false // Chuyển đổi kiểu dữ liệu từ string thành boolean
    //     }))
    //   )
    // );

    this.stocks$ = this.http.listStocks().pipe(
      map((stocks: any[]) => stocks.map(stock => new Stock(
        stock.name,
        stock.code,
        Number(stock.price),
        Number(stock.previousPrice),
        stock.exchange
      )))
    );
  }

  onToggleFavorite(stock: Stock): void {
    // console.log('Favorite for stock ', stock, ' was triggered.');
    // this._stockService.toggleFavorite(stock);
  }

  onUpdate(stock: Stock): void {
    this.http.updateStock(stock).subscribe(() => {
      console.log('Update stock thành công: ', stock);
    })
  }

  onDelete(stock: Stock): void {
    if (confirm('Bạn có chắc chắn muốn xóa stock này không?')) {
      this.http.deleteStock(stock.code).subscribe(() => {
        console.log('Đã xóa cổ phần ', stock);
        this.getAllStocks();
      });
    }
  }

  isPositiveChange(stock: any): boolean {
    return Number(stock.price) >= Number(stock.previousPrice);
  }
}
