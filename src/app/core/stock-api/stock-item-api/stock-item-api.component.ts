import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from '../../models/stock';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { StockService } from '../../services/StockService';

@Component({
  selector: 'app-stock-item-api',
  imports: [NgIf, RouterLink],
  templateUrl: './stock-item-api.component.html',
  styleUrl: './stock-item-api.component.css'
})
export class StockItemApiComponent implements OnInit {
  @Input() stock!: Stock; // chỉ ra rằng một biến hoặc thuộc tính không thể có giá trị null hoặc undefined
  @Output() toggleFavorite = new EventEmitter<Stock>();
  @Output() deleteHandler = new EventEmitter<Stock>();
  // thêm 2 sự kiện

  ngOnInit(): void {
    
  }

  constructor(private stockService: StockService) {}

  onToggleFavorite(event: Event): void {
    this.toggleFavorite.emit(this.stock); 
  }

  onDeleteHandler(event: Event): void {
    this.deleteHandler.emit(this.stock);
  }
}
