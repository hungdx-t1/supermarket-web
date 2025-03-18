import { Component, Input } from '@angular/core';
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
export class ProductItemComponent {
  @Input() products : ProductItems[] = [];
}
