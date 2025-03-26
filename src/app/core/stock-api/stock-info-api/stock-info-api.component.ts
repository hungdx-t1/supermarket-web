import { Component, OnInit } from '@angular/core';
import { Stock } from '../../models/stock';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../../services/StockService';
@Component({
  selector: 'app-stock-info-api',
  imports: [],
  templateUrl: './stock-info-api.component.html',
  styleUrl: './stock-info-api.component.css',
})
export class StockInfoApiComponent {
  code = '';

  stock: Stock = new Stock('', '', 0, 0, '');

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService
  ) {}

  ngOnInit(): void {
    this.code = String(this.route.snapshot.paramMap.get('code'));
    this.stockService.getStockByCode(this.code).subscribe(
      (stockData) => {
        if (stockData) {
          this.stock = stockData;
        } else {
          console.error('Cổ phiếu không tồn tại!');
        }
      },
      (error) => {
        console.error('Lỗi khi lấy dữ liệu cổ phiếu:', error);
      }
    );
  }
}
