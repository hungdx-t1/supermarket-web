import { Component, Input, OnInit } from '@angular/core';
import { StockItemComponent } from '../stock-item/stock-item.component';
import { Stock } from '../../models/stock';
import { StockService } from '../../services/StockService';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  imports: [StockItemComponent, CommonModule, RouterLink],
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.css',
})
export class StockListComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private _stockService: StockService) {}

  ngOnInit(): void {
    this.stocks = this._stockService.getStocks();
    console.log(this.stocks); // In danh sách cổ phiếu ra console để xác nhận
  }

  onToggleFavorite(stock: Stock): void {
    console.log('Favorite for stock ', stock, ' was triggered.');
    stock.favorite = !stock.favorite;
  }
}
