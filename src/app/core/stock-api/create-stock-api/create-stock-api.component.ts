import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Stock } from '../../models/stock';
import { NgIf } from '@angular/common';
import { StockService } from '../../services/StockService';
import { HTTPServiceService } from '../../services/HTTPService';

@Component({
  selector: 'app-create-stock-api',
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './create-stock-api.component.html',
  styleUrl: './create-stock-api.component.css'
})
export class CreateStockApiComponent {
  private stock: Stock = new Stock('', '', 0, 0, '');
  confirmed: boolean = false;
  message: string = '';
  exchanges = ['NYSE', 'NASDAQ', 'OTHER'];

  stockItem = new FormGroup({
    stockName: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    stockCode: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    stockPrice: new FormControl(0, Validators.min(0)),
    stockExchange: new FormControl('', Validators.required),
    confirmed: new FormControl(false, Validators.requiredTrue),
  });

  constructor(
    private fb: FormBuilder,
    private stockService: StockService,
    private hSSS: HTTPServiceService
  ) {
    this.stock = new Stock('', '', 0, 0, 'NASDAQ');
    this.stockItem = this.fb.group({
      stockName: ['', [Validators.required, Validators.minLength(6)]],
      stockCode: ['', [Validators.required, Validators.minLength(2)]],
      stockPrice: [0, Validators.min(0)],
      stockExchange: ['', Validators.required],
      confirmed: [false, Validators.requiredTrue],
    });
  }

  get stockName() {
    return this.stockItem.get('stockName');
  }

  get stockCode() {
    return this.stockItem.get('stockCode');
  }

  get stockPrice() {
    return this.stockItem.get('stockPrice');
  }

  get stockExchange() {
    return this.stockItem.get('stockExchange');
  }

  counter = 1;

  resetForm() {
    // this.stock = Object.assign({}, this.stockItem.value);
    this.stockItem.reset;
  }

  setStockPrice(price: number) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  getStockInfoAfterEnter(): void {
    this.stock.name = String(this.stockName?.value);
    this.stock.code = String(this.stockName?.value);
    this.stock.price = Number(this.stockPrice?.value);
    this.stock.exchange = String(this.stockExchange?.value);
  }

  // rest-API
  createStock() {
    if (this.stockItem.valid) {
      const body = {
        name: String(this.stockName?.value),
        code: String(this.stockCode?.value),
        price: Number(this.stockPrice?.value),
        previousPrice: 0,
        exchange: String(this.stockExchange?.value),
        favorite: false,
      };
      console.log('Thêm stock vào API:', body);
      this.hSSS.addStock(body).subscribe((data) => {
        console.log('Đã thêm thành công stock mới:', data);
      });
    }
  }
}
