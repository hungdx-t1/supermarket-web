import { Component } from '@angular/core';
import { CurrencyPipe } from '../pipes/CurrencyPipe.pipe';

@Component({
  selector: 'app-shopping',
  imports: [CurrencyPipe],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent {

}
