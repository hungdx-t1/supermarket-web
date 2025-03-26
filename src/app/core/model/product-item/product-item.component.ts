import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { ProductItems } from '../../type/productItem';
import { UpperCasePipe } from '../../pipes/UpperCasePipe.pipe';
import { CurrencyPipe } from '../../pipes/CurrencyPipe.pipe';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [
    UpperCasePipe, 
    CurrencyPipe,
    RouterLink,
    NgIf,
    NgFor,
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})

export class ProductItemComponent implements OnChanges, OnDestroy {
  // Đây là component con
  @Input() products : ProductItems[] = [];

  @Output() dataEvent = new EventEmitter<number>();

  deleteHandler = (id: number) => {
    this.dataEvent.emit(id); // truyền tham số id lên component cha
  }

  // phương thức getter
  get totalPrice(): number {
    // Hàm reduce() dùng để tính tổng giá trị của tất cả sản phẩm, nó có tác dụng duyệt từng phần tử trong mảng
    // total là tham số tính tổng, item là tham số hiện tại, tức là tham số cho từng 1 phần tử trong mảng
    const sum = this.products.reduce((total, item) => {
      return total + item.price;
    }, 0); 
    
    // nếu không có giá trị, mặc định tổng giá tiền là 0
    // Giá trị khởi tạo ban đầu của `total` là 0

    // return `Tổng tiền: ${sum}`; // lưu ý: return này sử dụng dấu ` để nhận định ${sum} là 1 biến
    return sum;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['products'].currentValue);

    // Hiển thị giá trị trước khi thay đổi nội dung (ví dụ thêm xóa sửa)
    console.log(changes['products'].previousValue);
  }
  
  // Điểm lưu ý: nếu sử dụng phương thức splice, nó chỉ cắt mất
  // phần dữ liệu mà thôi, không ảnh hưởng đến dữ liệu, nên nếu dùng
  // phương thức splice sẽ không tác động gì đến ngOnChanges cả.
  // Nếu muốn xóa dữ liệu, sử dụng phương thức filter.
  // this.products = this.products.filter((item) => item.id !== id)

  ngOnDestroy(): void {
    console.log('ProductItemComponent is removed.');
  }

  createRandomProduct() {
    
  }
}
