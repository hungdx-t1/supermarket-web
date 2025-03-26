import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from '../../models/stock';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { StockService } from '../../services/StockService';

@Component({
  selector: 'app-stock-item',
  imports: [NgIf, RouterLink],
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css',
})
export class StockItemComponent {
  @Input() stock!: Stock; // chỉ ra rằng một biến hoặc thuộc tính không thể có giá trị null hoặc undefined
  @Output() toggleFavorite = new EventEmitter<Stock>();
  @Output() deleteHandler = new EventEmitter<Stock>();
  // thêm 2 sự kiện

  constructor(private stockService: StockService) {}
  // constructor() {
  //   this.stock = new Stock('', '', 0, 0, '');
  // }

  // ngOnInit(): void {
  //   this.stock = new Stock('Test Stock Company', 'TSC', 85, 80, '');
  // }

  onToggleFavorite(event: Event): void {
    // this.stock.favorite = !this.stock.favorite;
    this.toggleFavorite.emit(this.stock); // Gửi stock ra ngoài
  }

  onDeleteHandler(event: Event): void {
    this.deleteHandler.emit(this.stock);
  }
}
