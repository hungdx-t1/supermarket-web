import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from '../../models/stock';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { StockService } from '../../services/StockService';
import { FormsModule } from '@angular/forms';
import { HTTPServiceService } from '../../services/HTTPService';

@Component({
  selector: 'app-stock-item-api',
  imports: [NgIf, RouterLink, FormsModule],
  templateUrl: './stock-item-api.component.html',
  styleUrl: './stock-item-api.component.css',
})
export class StockItemApiComponent implements OnInit {
  @Input() stock!: Stock; // chỉ ra rằng một biến hoặc thuộc tính không thể có giá trị null hoặc undefined
  @Output() toggleFavorite = new EventEmitter<Stock>();
  @Output() deleteHandler = new EventEmitter<Stock>();
  // thêm 2 sự kiện

  @Output() updateStock = new EventEmitter<Stock>();
  isPopupOpen = false;
  editableStock!: Stock;

  ngOnInit(): void {}

  constructor(private http: HTTPServiceService) {}

  onToggleFavorite(event: Event): void {
    this.toggleFavorite.emit(this.stock);
  }

  onDeleteHandler(event: Event): void {
    this.deleteHandler.emit(this.stock);
  }

  onEdit(): void {
    this.isPopupOpen = true;
    this.editableStock = {
      ...this.stock,
      isPositiveChange: this.stock.isPositiveChange ?? false,
    }; // Clone object để tránh sửa trực tiếp
  }

  closePopup(): void {
    this.isPopupOpen = false;
  }

  saveEdit(): void {
    this.http.updateStock(this.editableStock).subscribe(() => {
      this.updateStock.emit(this.editableStock);
      this.closePopup();
    });
  }
}
