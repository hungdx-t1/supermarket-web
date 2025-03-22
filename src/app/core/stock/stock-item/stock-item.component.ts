import { Component, Input, OnInit } from '@angular/core';
import { Stock } from '../../models/stock';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-stock-item',
  imports: [NgIf, RouterLink],
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css'
})
export class StockItemComponent {
  @Input() stock!: Stock; // chỉ ra rằng một biến hoặc thuộc tính không thể có giá trị null hoặc undefined

  // constructor() {
  //   this.stock = new Stock('', '', 0, 0, '');
  // }

  // ngOnInit(): void {
  //   this.stock = new Stock('Test Stock Company', 'TSC', 85, 80, '');
  // }

  toggleFavorite(event: Event): void {
    this.stock.favorite = !this.stock.favorite;
  }
}
