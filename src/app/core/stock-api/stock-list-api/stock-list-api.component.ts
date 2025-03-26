import { Component, Input, OnInit } from '@angular/core';
import { StockItemApiComponent } from '../stock-item-api/stock-item-api.component';
import { Stock } from '../../models/stock';
import { StockService } from '../../services/StockService';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock-list-api',
  imports: [StockItemApiComponent, CommonModule, RouterLink],
  templateUrl: './stock-list-api.component.html',
  styleUrl: './stock-list-api.component.css'
})
export class StockListApiComponent {
  stocks$: Observable<Stock[]>;

  constructor(private _stockService: StockService) {
    this.stocks$ = this._stockService.stocks$;
  }

  ngOnInit(): void {
    this.stocks$ = this._stockService.getStocks();
  }

  onToggleFavorite(stock: Stock): void {
    console.log('Favorite for stock ', stock, ' was triggered.');
    this._stockService.toggleFavorite(stock);
  }

  onDelete(stock: Stock): void {
    this._stockService.deleteStock(stock.code).subscribe(() => {
      console.log('Đã xóa cổ phần ', stock);
      this.stocks$ = this._stockService.getStocks();
    });
  }
}
