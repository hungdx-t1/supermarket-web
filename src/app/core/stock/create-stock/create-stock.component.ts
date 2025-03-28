import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validator,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Stock } from '../../models/stock';
import { NgIf } from '@angular/common';
import { StockService } from '../../services/StockService';
import { HTTPServiceService } from '../../services/HTTPService';

@Component({
  selector: 'app-create-stock',
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './create-stock.component.html',
  styleUrl: './create-stock.component.css',
})
export class CreateStockComponent {
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

  loadStockServer() {
    this.stock = new Stock('Test' + this.counter++, 'TST', 20, 10, '');
    // let stockItemModel = Object.assign({}, this.stock);
    // delete stockItemModel.previousPrice;
    // delete stockItemModel.price;

    // Tạo stockItemModel từ stock, bỏ các thuộc tính không có trong form
    let stockItemModel = {
      stockName: this.stock.name,
      stockCode: this.stock.code,
      stockPrice: this.stock.price,
      stockExchange: this.stock.exchange, // Giả sử 'exchange' là một trường trong Stock
      confirmed: false, // Mặc định là false khi load
    };
    this.stockItem.setValue(stockItemModel);
  }

  pathStockForm() {
    this.stock = new Stock(`Test ${this.counter++}`, 'TST', 20, 10, '');
    // Sử dụng patchValue() để cập nhật một số trường mà không cần phải truyền vào toàn bộ giá trị
    const stockPatchValue = {
      stockName: this.stock.name,
      stockCode: this.stock.code,
      stockPrice: this.stock.price,
    };
    this.stockItem.patchValue(stockPatchValue);
  }

  resetForm() {
    // this.stock = Object.assign({}, this.stockItem.value);
    this.stockItem.reset;
  }

  setStockPrice(price: number) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock() {
    // dấu ? dùng để kiểm tra xem đối tượng đó có tồn tại (ko phải null hoặc undefined) trc khi gọi hoặc truy cập thuộc tính từ nó
    // if (
    //   this.stockName?.hasError('required') ||
    //   this.stockCode?.hasError('required') ||
    //   this.stockPrice?.hasError('min')
    // )
    //   return;

    /*
     if (this.stockItem.invalid) {
      console.log('Form không hợp lệ!');
      return;
    }
    this.stock.name = String(this.stockName?.value);
    this.stock.code = String(this.stockCode?.value);
    this.stock.price = Number(this.stockPrice?.value);

    console.log(`Tên cổ phần: ${this.stockName?.value}`);
    console.log(`Mã cổ phần: ${this.stockCode?.value}`);
    console.log(`Giá cổ phần: ${this.stockPrice?.value}`);
    console.log('Creating stock ', this.stock);

    if (this.stockItem.valid) {
      let created = this.stockService.createStock(this.stock);
      if (created) {
        this.message = 'Tạo mới cổ phiếu thành công với mã: ' + this.stock.code;
        this.stock = new Stock('', '', 0, 0, 'NASDAQ');
      } else {
        this.message = 'Cổ phiếu với mã ' + this.stock.code + ' hiện đã tồn tại!';
      }
    } else {
      console.log('Form không hợp lệ!');
      return;
    }
    */

    // deprecated
    // if (this.stockItem.valid) {
    //   this.stockService.createStock(this.stock).subscribe((result: any) => {
    //     this.message = result.msg;
    //     this.stock = new Stock('', '', 0, 0, 'NASDAQ');
    //   }, (err) => {
    //     this.message = err.msg;
    //   });
    // } else {
    //   console.error('Form không hợp lệ!');
    // }

    if (this.stockItem.valid) {
      this.getStockInfoAfterEnter();
      console.log('Triggered: Thêm mới stock', this.stock);
      this.stockService.createStock(this.stock).subscribe({
        next: () => {
          this.message =
            'Tạo mới cổ phiếu thành công với mã: ' + this.stock.code;
          this.stock = new Stock(
            String(this.stockName?.value),
            String(this.stockCode?.value),
            Number(this.stockPrice?.value),
            0,
            String(this.stockExchange?.value)
          );
        },
        error: () => console.error('Điền form chưa đầy đủ hoặc không hợp lệ.'),
      });
    }
  }

  getStockInfoAfterEnter(): void {
    this.stock.name = String(this.stockName?.value);
    this.stock.code = String(this.stockName?.value);
    this.stock.price = Number(this.stockPrice?.value);
    this.stock.exchange = String(this.stockExchange?.value);
  }

  // rest-API
  createStock2() {
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

  createRandomStockAPI() {

  }
}
