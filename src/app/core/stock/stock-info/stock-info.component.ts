import { Component, OnInit } from '@angular/core';
import { Stock } from '../../models/stock';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../../services/StockService';

@Component({
  selector: 'app-stock-info',
  imports: [],
  templateUrl: './stock-info.component.html',
  styleUrl: './stock-info.component.css',
})
export class StockInfoComponent implements OnInit {
  code = '';

  stock: Stock = new Stock('', '', 0, 0, '');

  constructor(private route: ActivatedRoute, private stockService: StockService) {
    // this.code = String(route.snapshot.paramMap.get('code'));
  }

  ngOnInit(): void {
    this.code = String(this.route.snapshot.paramMap.get('code'));

    // Sử dụng StockService để lấy stock theo code
    const stockData = this.stockService.getStockByCode(this.code);

    // Nếu tìm thấy stock, gán vào biến stock
    if (stockData) {
      this.stock = stockData;
    } else {
      console.error('Cổ phiếu không tồn tại!');
    }
  }
}
