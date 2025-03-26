import { Component, Input, OnInit } from '@angular/core';
import { StockItemComponent } from '../stock-item/stock-item.component';
import { Stock } from '../../models/stock';
import { StockService } from '../../services/StockService';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock-list',
  imports: [StockItemComponent, CommonModule, RouterLink],
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.css',
})
export class StockListComponent implements OnInit {
  stocks$: Observable<Stock[]>;
  // stocks$?: Observable<Stock[]>; -- optional
  // stocks$: Observable<Stock[]> = of([]); -- install initialize

  constructor(private _stockService: StockService) {
    this.stocks$ = this._stockService.stocks$;
  }

  ngOnInit(): void {
    // this.stocks = this._stockService.getStocks();
    // this._stockService.getStocks().subscribe(stocks => {this.stocks = stocks});
    // console.log(this.stocks); // In danh sách cổ phiếu ra console để xác nhận

    this.stocks$ = this._stockService.getStocks();
  }

  onToggleFavorite(stock: Stock): void {
    console.log('Favorite for stock ', stock, ' was triggered.');
    this._stockService.toggleFavorite(stock);
    // stock.favorite = !stock.favorite;
  }

  onDelete(stock: Stock): void {
    this._stockService.deleteStock(stock.code).subscribe(() => {
      console.log('Đã xóa cổ phần ', stock);

      this.stocks$ = this._stockService.getStocks();
    });
  }
}
