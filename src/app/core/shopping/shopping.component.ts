import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ProductItemComponent } from "../model/product-item/product-item.component";
import { ProductItems } from '../type/productItem';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { BlogService } from '../services/BlogService';

@Component({
  selector: 'app-shopping',
  imports: [
    CommonModule,
    ProductItemComponent,
    NgIf
],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent implements OnInit {

  isVisible = true;

  // Khai báo mảng để dùng ngFor
  products: ProductItems[] = [
    {id: 1, name: 'Bóng rổ rẻ tiền', price: 250000, isActive: true, img: 'assets/images/pngtree-basketball-png-image_8974603.png'},
    {id: 2, name: 'Tivi rẻ tiền', price: 750000, isActive: true, img: 'assets/images/pngtree-old-television-red-png-image_8876940.png'},
    {id: 3, name: 'Ghế sofa rẻ tiền', price: 1900000, isActive: true, img: 'assets/images/sofa-chair.png'},
    {id: 4, name: 'Giày NIKE rẻ tiền', price: 200000, isActive: true, img: 'assets/images/pngtree-basketball-png-image_8974603.png'},
    {id: 5, name: 'Tivi cải tiến', price: 3000000, isActive: true, img: 'assets/images/pngtree-old-television-red-png-image_8876940.png'},
    {id: 6, name: 'Tivi cao cấp', price: 4500000, isActive: true, img: 'assets/images/pngtree-old-television-red-png-image_8876940.png'},
  ];

  constructor(private blogService: BlogService) {
    console.log('Initializing ShoppingComponent...');
  }

  /*
    Trên trang web API https://ninedev-api.vercel.app/blogs hiện như này:

    {
      "data": [
        {
          "id": 0.141193493107266,
          "title": "Ninedev Test 01",
          "body": "500000",
          "author": "mario"
        },
        {
          "id": 0.253956475090453,
          "title": "Ninedev Test 02",
          "body": "400000",
          "author": "mario"
        },
        {
          "id": 0.666467571051155,
          "title": "Ninedev Test 03",
          "body": "300000",
          "author": "yoshi"
        }
      ],
      "status": 200,
      "message": "Successful!"
    }

  */

  ngOnInit(): void {
    // In ra console để xác nhận rằng component đã được khởi tạo
    console.log('Initialized ShoppingComponent!');
    
    // Gửi yêu cầu HTTP GET đến API để lấy dữ liệu từ server
    this.blogService.getBlog()
      .subscribe(({ data }) => { // Lắng nghe phản hồi từ API, trích xuất dữ liệu từ response
        // Chuyển đổi dữ liệu từ API thành danh sách sản phẩm
        this.products = data.map((item: any) => { // Duyệt qua từng phần tử trong mảng `data`
          return {
            ... item, // Sao chép toàn bộ thuộc tính gốc từ `item`
            price: Number(item.body), // Chuyển `body` từ dạng chuỗi sang số và gán vào `price`
            img: 'assets/images/pngtree-old-television-red-png-image_8876940.png', // Gán ảnh mặc định cho sản phẩm
            name: item.title, // Chuyển trường `title` của API thành `name` (tên sản phẩm)
            id: item.id,
            isActive: true // Mặc định tất cả sản phẩm được hiển thị (active)
          }
        });
      })
  }

  // đối với c++ thì có delHandler(event), thì ts có delHandler = (event)
  // phương thức xóa một sản phẩm (product) khỏi danh sách sản phẩm bày bán
  deleteHandler = (id: number) => {
    // // -- Tìm vị trí (index) của sản phẩm trong mảng `products` có id trùng với id truyền vào
    // const productIndex = this.products.findIndex(item => item.id == id);
    
    // // -- Nếu tìm thấy sản phẩm (chỉ mục không phải -1)
    // if(productIndex !== -1) {
    //   // -- Xóa sản phẩm khỏi mảng `products` tại vị trí `productIndex`, chỉ xóa 1 phần tử
    //   this.products.splice(productIndex, 1);
    //   console.log("Đã xóa item ",id);
    // }

    this.products = this.products.filter((item) => item.id !== id)
  }

  changeVisibility = () => {
    this.isVisible = false;
  }

}
