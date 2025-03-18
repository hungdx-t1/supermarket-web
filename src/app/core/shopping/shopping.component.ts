import { Component } from '@angular/core';
import { CurrencyPipe } from '../pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from '../pipes/UpperCasePipe.pipe';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shopping',
  imports: [
    CurrencyPipe,
    UpperCasePipe, 
    NgFor, 
    NgIf, 
    CommonModule,
    RouterLink
  ],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent {

  // Khai báo mảng để dùng ngFor
  products = [
    {id: 1, name: 'Bóng rổ rẻ tiền', price: 250000, isActive: true, img: 'assets/images/pngtree-basketball-png-image_8974603.png'},
    {id: 2, name: 'Tivi rẻ tiền', price: 750000, isActive: true, img: 'assets/images/pngtree-old-television-red-png-image_8876940.png'},
    {id: 3, name: 'Ghế sofa rẻ tiền', price: 1900000, isActive: true, img: 'assets/images/sofa-chair.png'},
    {id: 4, name: 'Giày NIKE rẻ tiền', price: 200000, isActive: true, img: 'assets/images/pngtree-basketball-png-image_8974603.png'},
    {id: 5, name: 'Tivi cải tiến', price: 3000000, isActive: true, img: 'assets/images/pngtree-old-television-red-png-image_8876940.png'},
    {id: 6, name: 'Tivi cao cấp', price: 4500000, isActive: true, img: 'assets/images/pngtree-old-television-red-png-image_8876940.png'},
  ];
}
