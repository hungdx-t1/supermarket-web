import { Component, OnInit } from '@angular/core';
import { Stock } from '../../models/stock';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stock-item',
  imports: [RouterLink],
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css'
})
export class StockItemComponent implements OnInit {
  public stock: Stock;

  constructor() {
    this.stock = new Stock('', '', 0, 0);
  }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
  }

  toggleFavorite(event: Event): void {
    this.stock.favorite = !this.stock.favorite;
  }
}
