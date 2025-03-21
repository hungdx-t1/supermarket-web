import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Stock } from '../../models/stock';

@Component({
  selector: 'app-create-stock',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './create-stock.component.html',
  styleUrl: './create-stock.component.css'
})
export class CreateStockComponent {
  stockName = new FormControl('');
  stockCode = new FormControl(''); 
  stockPrice = new FormControl(''); 

  addStockHandler() {
    console.log(`Tên cổ phần: ${this.stockName.value}`);
    console.log(`Mã cổ phần: ${this.stockCode.value}`);
    console.log(`Giá cổ phần: ${this.stockPrice.value}`);
  }
}
