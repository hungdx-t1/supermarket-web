import { Component } from '@angular/core';
import { CurrencyPipe } from '../pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from '../pipes/UpperCasePipe.pipe';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-shopping',
  imports: [CurrencyPipe, UpperCasePipe, NgFor],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent {

  // Khai báo mảng để dùng ngFor
  products = [
    {name: 'Bóng rổ rẻ tiền', price: 250000, img: 'assets/images/pngtree-basketball-png-image_8974603.png'},
    {name: 'Tivi rẻ tiền', price: 750000, img: 'assets/images/pngtree-old-television-red-png-image_8876940.png'},
    {name: 'Ghế sofa rẻ tiền', price: 1900000, img: 'assets/images/sofa-chair.png'},
    {name: 'Giày NIKE rẻ tiền', price: 200000, img: 'assets/images/pngtree-basketball-png-image_8974603.png'},
    {name: 'Tivi cải tiến', price: 3000000, img: 'assets/images/pngtree-basketball-png-image_8974603.png'},
    {name: 'Tivi cao cấp', price: 4500000, img: 'assets/images/pngtree-basketball-png-image_8974603.png'},
  ];

}
