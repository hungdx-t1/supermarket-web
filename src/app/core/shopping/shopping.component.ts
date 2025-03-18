import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from "../model/product-item/product-item.component";
import { ProductItems } from '../type/productItem';

@Component({
  selector: 'app-shopping',
  imports: [
    CommonModule,
    ProductItemComponent,
],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent {

  // Khai báo mảng để dùng ngFor
  products: ProductItems[] = [
    {id: 1, name: 'Bóng rổ rẻ tiền', price: 250000, isActive: true, img: 'assets/images/pngtree-basketball-png-image_8974603.png'},
    {id: 2, name: 'Tivi rẻ tiền', price: 750000, isActive: true, img: 'assets/images/pngtree-old-television-red-png-image_8876940.png'},
    {id: 3, name: 'Ghế sofa rẻ tiền', price: 1900000, isActive: true, img: 'assets/images/sofa-chair.png'},
    {id: 4, name: 'Giày NIKE rẻ tiền', price: 200000, isActive: true, img: 'assets/images/pngtree-basketball-png-image_8974603.png'},
    {id: 5, name: 'Tivi cải tiến', price: 3000000, isActive: true, img: 'assets/images/pngtree-old-television-red-png-image_8876940.png'},
    {id: 6, name: 'Tivi cao cấp', price: 4500000, isActive: true, img: 'assets/images/pngtree-old-television-red-png-image_8876940.png'},
  ];
}
